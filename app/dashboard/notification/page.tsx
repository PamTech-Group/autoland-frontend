"use client";
import {
  Box,
  Container,
  VStack,
  Text,
  Flex,
  IconButton,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Heading,
  HStack,
  Badge,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  FaBars,
  FaBell,
  FaCarSide,
  FaCheck,
  FaCoins,
  FaEllipsisV,
  FaTools,
  FaTrash,
} from "react-icons/fa";

import Sidebar from "@/app/components/SideBar";
import { useState } from "react";

const MainContent = styled(Box)`
  background: #111322;
  min-height: 100vh;
  margin-left: 250px;
  width: calc(100% - 250px);
  color: white;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const GlassCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(36, 39, 59, 0.7),
    rgba(28, 31, 48, 0.9)
  );
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 100%;
`;

const NotificationItem = styled(motion.div)`
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(8px);
  }
`;

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "payment":
      return FaCoins;
    case "service":
      return FaTools;
    case "vehicle":
      return FaCarSide;
    default:
      return FaBell;
  }
};

export default function NotificationsPage() {
  const toast = useToast();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const [filter, setFilter] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "payment",
      message: "Your payment of ₦150,000 is due tomorrow",
      time: "2 hours ago",
      read: false,
      date: "today",
    },
    {
      id: 2,
      type: "service",
      message: "Vehicle maintenance scheduled for tomorrow",
      time: "5 hours ago",
      read: false,
      date: "today",
    },
    {
      id: 3,
      type: "vehicle",
      message: "Your vehicle inspection is complete",
      time: "1 day ago",
      read: true,
      date: "yesterday",
    },
    // Add more notifications as needed
  ]);

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
    toast({
      title: "All notifications cleared",
      status: "success",
      duration: 2000,
    });
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "unread") return !notif.read;
    if (filter === "read") return notif.read;
    return true;
  });

  const groupedNotifications = filteredNotifications.reduce(
    (groups: any, notif) => {
      const date = notif.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(notif);
      return groups;
    },
    {}
  );

  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>

      <Drawer
        autoFocus={false}
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
        returnFocusOnClose={false}
        onOverlayClick={onDrawerClose}
        size="xs">
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <Sidebar onClose={onDrawerClose} />
        </DrawerContent>
      </Drawer>

      <MainContent>
        <Container maxW="container.xl" py={8} px={{ base: 4, lg: 12 }}>
          {/* Mobile Header */}
          <Flex
            mb={8}
            justify="space-between"
            align="center"
            display={{ base: "flex", lg: "none" }}>
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={onDrawerOpen}
              variant="ghost"
              color="white"
            />
          </Flex>

          {/* Notifications Header */}
          <GlassCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Flex
              justify={{ base: "center", md: "space-between" }}
              wrap="wrap"
              align="center"
              gap={4}
              mb={6}>
              <HStack spacing={4}>
                <Heading size="sm">Notifications</Heading>
                <Badge colorScheme="blue" rounded="full" px={3}>
                  {notifications.filter((n) => !n.read).length} New
                </Badge>
              </HStack>
              <HStack align="left" spacing={4}>
                <Menu>
                  <MenuButton as={Button} variant="ghost" size="sm">
                    Filter: {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </MenuButton>
                  <MenuList bg="#1a1f37">
                    <MenuItem onClick={() => setFilter("all")}>All</MenuItem>
                    <MenuItem onClick={() => setFilter("unread")}>
                      Unread
                    </MenuItem>
                    <MenuItem onClick={() => setFilter("read")}>Read</MenuItem>
                  </MenuList>
                </Menu>
                <Button
                  leftIcon={<FaTrash />}
                  variant="ghost"
                  size="sm"
                  onClick={handleClearAll}>
                  Clear All
                </Button>
              </HStack>
            </Flex>

            <VStack spacing={6} align="stretch">
              {Object.entries(groupedNotifications).map(
                ([date, notifs]: [string, any]) => (
                  <Box key={date}>
                    <Text
                      color="gray.400"
                      fontSize="sm"
                      textTransform="capitalize"
                      mb={4}>
                      {date}
                    </Text>
                    <VStack spacing={3} align="stretch">
                      {notifs.map((notification: any) => (
                        <NotificationItem
                          key={notification.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          whileHover={{ x: 8 }}
                          onClick={() => handleMarkAsRead(notification.id)}>
                          <Flex justify="space-between" align="center">
                            <HStack spacing={4}>
                              <Icon
                                as={getNotificationIcon(notification.type)}
                                color={
                                  notification.read ? "gray.500" : "blue.400"
                                }
                                boxSize={5}
                              />
                              <VStack align="start" spacing={1}>
                                <Text
                                  fontSize="md"
                                  color={
                                    notification.read ? "gray.400" : "white"
                                  }>
                                  {notification.message}
                                </Text>
                                <Text fontSize="xs" color="gray.500">
                                  {notification.time}
                                </Text>
                              </VStack>
                            </HStack>
                            <HStack>
                              {!notification.read && (
                                <Badge colorScheme="blue" rounded="full" />
                              )}
                              <Menu>
                                <MenuButton
                                  as={IconButton}
                                  icon={<FaEllipsisV />}
                                  variant="ghost"
                                  size="sm"
                                />
                                <MenuList bg="#1a1f37">
                                  <MenuItem
                                    icon={<FaCheck />}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleMarkAsRead(notification.id);
                                    }}>
                                    Mark as read
                                  </MenuItem>
                                  <MenuItem icon={<FaTrash />}>Remove</MenuItem>
                                </MenuList>
                              </Menu>
                            </HStack>
                          </Flex>
                        </NotificationItem>
                      ))}
                    </VStack>
                  </Box>
                )
              )}

              {notifications.length === 0 && (
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  py={10}
                  color="gray.500">
                  <Icon as={FaBell} boxSize={8} mb={4} />
                  <Text>No notifications</Text>
                </Flex>
              )}
            </VStack>
          </GlassCard>
        </Container>
      </MainContent>
    </Flex>
  );
}

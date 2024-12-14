/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  SimpleGrid,
  Icon,
  Flex,
  Button,
  HStack,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
// import { motion } from "framer-motion";
import {
  FaCar,
  FaTools,
  FaWrench,
  FaCog,
  FaCarBattery,
  FaAlignCenter,
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaCreditCard,
  FaBell,
  FaUserCog,
  FaSignOutAlt,
  FaQuestionCircle,
  FaEllipsisH,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styled from "@emotion/styled";
import { FaCarSide, FaNetworkWired } from "react-icons/fa6";
import { Image, Link } from "@chakra-ui/next-js";
import logo from "../assets/logo.webp";
// import { useRouter } from "next/navigation";
// const MotionBox = motion(Box as any);
// const MotionCard = motion(Card as any);

const Sidebar = styled(Box)`
  background: #1a1f37;
  height: 100vh;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 1rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

const GlassCard = styled(Card)`
  background: rgba(26, 31, 55, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) => (
  <HStack
    cursor="pointer"
    p={3}
    borderRadius="md"
    bg={active ? "rgba(255, 255, 255, 0.1)" : "transparent"}
    _hover={{
      bg: "rgba(255, 255, 255, 0.1)",
    }}
    color="white"
    transition="all 0.3s ease"
  >
    <Icon as={icon} />
    <Text fontWeight="medium">{label}</Text>
  </HStack>
);

const serviceCards = [
  {
    title: "Computerised Auto Diagnosis",
    icon: FaCog,
    description: "Advanced diagnostic scanning and troubleshooting",
  },
  {
    title: "Maintenance & Lube Check",
    icon: FaTools,
    description: "Regular maintenance and fluid checks",
  },
  {
    title: "Body Shop & Upgrade",
    icon: FaCar,
    description: "Body repairs and vehicle upgrades",
  },
  {
    title: "Mechanical Repairs",
    icon: FaWrench,
    description: "Complete mechanical repair services",
  },
  {
    title: "AC & Electrical Repairs",
    icon: FaCarBattery,
    description: "Electrical system and AC service",
  },
  {
    title: "Wheel Alignment & Balancing",
    icon: FaAlignCenter,
    description: "Precision wheel services",
  },
];

const statsData = [
  {
    label: "Total Services",
    value: "2,340",
    change: "+5%",
    icon: FaWrench,
  },
  {
    label: "Active Bookings",
    value: "15",
    change: "+10%",
    icon: FaCalendarAlt,
  },
  {
    label: "Customer Rating",
    value: "4.8",
    change: "+2%",
    icon: FaUserCog,
  },
];

const recentServices = [
  {
    id: 1,
    service: "Oil Change",
    date: "2024-03-15",
    status: "Completed",
    cost: "$45.99",
    vehicle: "Toyota Camry",
  },
  {
    id: 2,
    service: "Brake Inspection",
    date: "2024-03-14",
    status: "In Progress",
    cost: "$89.99",
    vehicle: "Honda Civic",
  },
  // Add more entries as needed
];

const SidebarContent = ({ onClose }: { onClose?: () => void }) => {
  // const router = useRouter();
  const logoSize = useBreakpointValue({ base: 25, sm: 35 });

  return (
    <VStack spacing={8} align="stretch" color="gray.50">
      <Flex justify="space-between" align="center">
        <Box>
          <Link href="/">
            <Image src={logo} alt="Autoland Logo" height={logoSize} />
          </Link>
        </Box>
        {onClose && (
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
            variant="ghost"
            color="white"
            icon={<FaTimes />}
            aria-label="Close menu"
          />
        )}
      </Flex>

      <VStack align="stretch" spacing={2}>
        <SidebarItem icon={FaHome} label="Dashboard" active />
        <SidebarItem icon={FaCalendarAlt} label="Appointments" />
        <SidebarItem icon={FaHistory} label="Service History" />
        <SidebarItem icon={FaCreditCard} label="Payments" />
        <SidebarItem icon={FaBell} label="Notifications" />
        <SidebarItem icon={FaCarSide} label="Car Management" />
        <SidebarItem icon={FaNetworkWired} label="Plans" />
      </VStack>

      <VStack align="stretch" spacing={2} mt="auto">
        <SidebarItem icon={FaUserCog} label="Settings" />
        <SidebarItem icon={FaQuestionCircle} label="Help & Support" />
        <SidebarItem icon={FaSignOutAlt} label="Logout" />
      </VStack>
    </VStack>
  );
};

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex>
      {/* Desktop Sidebar */}
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <MainContent>
        <Container maxW="container.2xl" py={8} px={{ base: 4, lg: 12 }}>
          {/* Mobile Header with Menu Button */}
          <Flex
            mb={8}
            justify="space-between"
            align="center"
            display={{ base: "flex", lg: "none" }}
          >
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={onOpen}
              variant="ghost"
              color="white"
              colorScheme="blue"
            />
            <Link href="/">
              <Image src={logo} alt="Autoland Logo" height={25} />
            </Link>
            <Box width="40px" /> {/* Spacer for alignment */}
          </Flex>

          {/* Welcome Section */}
          <Flex justify="space-between" align="center" mb={8}>
            <Box>
              <Heading size="lg" mb={2}>
                Welcome back, Vincent
              </Heading>
              <Text color="gray.400">
                Track your service requests and manage your vehicles
              </Text>
            </Box>
            <HStack spacing={4}>
              <IconButton
                aria-label="notifications"
                icon={<FaBell />}
                variant="ghost"
                color="white"
                colorScheme="blue"
              />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="options"
                  icon={<FaEllipsisH />}
                  variant="ghost"
                  color="white"
                  colorScheme="blue"
                />
                <MenuList bg="#1a1f37">
                  <MenuItem bg="#1a1f37">Profile Settings</MenuItem>
                  <MenuItem bg="#1a1f37">Help Center</MenuItem>
                  <MenuItem bg="#1a1f37">Logout</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
            {statsData.map((stat) => (
              <GlassCard key={stat.label}>
                <CardBody>
                  <Flex justify="space-between" align="center">
                    <Stat>
                      <StatLabel color="gray.400">{stat.label}</StatLabel>
                      <StatNumber fontSize="xl">{stat.value}</StatNumber>
                      <StatHelpText color="green.400">
                        {stat.change} vs. last month
                      </StatHelpText>
                    </Stat>
                    <Icon as={stat.icon} w={8} h={8} color="blue.400" />
                  </Flex>
                </CardBody>
              </GlassCard>
            ))}
          </SimpleGrid>

          {/* Recent Services */}
          <GlassCard mb={8}>
            <CardBody>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="sm">Recent Services</Heading>
                <Button variant="ghost" colorScheme="blue" size="sm">
                  View All
                </Button>
              </Flex>
              <VStack spacing={4} align="stretch">
                {recentServices.map((service) => (
                  <Flex
                    key={service.id}
                    justify="space-between"
                    align="center"
                    p={3}
                    borderRadius="md"
                    bg="rgba(255, 255, 255, 0.05)"
                    _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold">{service.service}</Text>
                      <Text fontSize="sm" color="gray.400">
                        {service.vehicle}
                      </Text>
                    </VStack>
                    <HStack spacing={4}>
                      <Text fontSize="sm" color="gray.400">
                        {service.date}
                      </Text>
                      <Text
                        fontSize="sm"
                        color={
                          service.status === "Completed"
                            ? "green.400"
                            : "yellow.400"
                        }
                      >
                        {service.status}
                      </Text>
                      <Text fontSize="sm" color="blue.400">
                        {service.cost}
                      </Text>
                    </HStack>
                  </Flex>
                ))}
              </VStack>
            </CardBody>
          </GlassCard>

          {/* Service Cards Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {serviceCards.map((service, index) => (
              <GlassCard
                key={service.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: `${index * 0.1}` }}
              >
                <CardBody>
                  <Flex
                    align="center"
                    flexDirection={{ base: "column", md: "row" }}
                    mb={4}
                  >
                    <Icon as={service.icon} w={8} h={8} color="white" />
                    <Text
                      color="white"
                      textAlign={{ base: "left", md: "center" }}
                      fontWeight="bold"
                      ml={{ base: 0, md: 3 }}
                      mt={{ base: 3, md: 0 }}
                    >
                      {service.title}
                    </Text>
                  </Flex>
                  <Text color="whiteAlpha.800" fontSize="sm">
                    {service.description}
                  </Text>
                </CardBody>
              </GlassCard>
            ))}
          </SimpleGrid>
        </Container>
      </MainContent>
    </Flex>
  );
}

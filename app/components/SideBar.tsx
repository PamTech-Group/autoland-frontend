"use client";

import {
  Box,
  VStack,
  HStack,
  Icon,
  Text,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaCreditCard,
  FaBell,
  FaUserCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { FaCarSide, FaNetworkWired } from "react-icons/fa6";
import styled from "@emotion/styled";
import logo from "@/app/assets/logo.webp";
import { ComponentType } from "react";

const SidebarContainer = styled(Box)`
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
    position: relative;
  }
`;

interface SidebarItemProps {
  icon: ComponentType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon,
  label,
  active = false,
  onClick,
}: SidebarItemProps) => (
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
    onClick={onClick}
  >
    <Icon as={icon} />
    <Text fontWeight="medium">{label}</Text>
  </HStack>
);

interface SidebarContentProps {
  onClose?: () => void;
  currentPath?: string;
}

const SidebarContent = ({
  onClose,
  currentPath = "/",
}: SidebarContentProps) => {
  const logoSize = useBreakpointValue({ base: 25, sm: 35 });

  const mainMenuItems = [
    { icon: FaHome, label: "Dashboard", path: "/dashboard" },
    { icon: FaCalendarAlt, label: "Appointments", path: "/appointments" },
    { icon: FaHistory, label: "Service History", path: "/service-history" },
    { icon: FaCreditCard, label: "Payments", path: "/payments" },
    { icon: FaCarSide, label: "Car Management", path: "/car-management" },
    { icon: FaCarSide, label: "Road Side Services", path: "/roadside" },
    { icon: FaNetworkWired, label: "Plans", path: "/plans" },
  ];

  const bottomMenuItems = [
    { icon: FaBell, label: "Notifications", path: "/notifications" },
    { icon: FaUserCog, label: "Settings", path: "/settings" },
    { icon: FaQuestionCircle, label: "Help & Support", path: "/support" },
    { icon: FaSignOutAlt, label: "Logout", path: "/logout" },
  ];

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
        {mainMenuItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            active={currentPath === item.path}
          />
        ))}
      </VStack>

      <Box width="100%" height="1px" bg="gray.500" />

      <VStack align="stretch" spacing={2} mt="auto">
        {bottomMenuItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            active={currentPath === item.path}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default function Sidebar({ onClose, currentPath }: SidebarContentProps) {
  return (
    <SidebarContainer>
      <SidebarContent onClose={onClose} currentPath={currentPath} />
    </SidebarContainer>
  );
}

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
import { FaCarRear, FaCarSide, FaNetworkWired } from "react-icons/fa6";
import styled from "@emotion/styled";
import logo from "@/app/assets/logo.webp";
import { ComponentType } from "react";
import { usePathname, useRouter } from "next/navigation";

const SidebarContainer = styled(Box)`
  background: #1a1f37;
  min-height: 100vh;
  overflow: scroll;
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
  path: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon,
  label,
  path,
  active = false,
  onClick,
}: SidebarItemProps) => (
  <Link href={path} style={{ textDecoration: "none" }} onClick={onClick}>
    <HStack
      cursor="pointer"
      p={3}
      borderRadius="md"
      bg={active ? "rgba(255, 255, 255, 0.1)" : "transparent"}
      _hover={{
        bg: "rgba(255, 255, 255, 0.1)",
      }}
      color="white"
      transition="all 0.3s ease">
      <Icon as={icon} />
      <Text fontWeight="medium">{label}</Text>
    </HStack>
  </Link>
);

interface SidebarContentProps {
  onClose?: () => void;
}

const SidebarContent = ({ onClose }: SidebarContentProps) => {
  const logoSize = useBreakpointValue({ base: 25, sm: 35 });
  const pathname = usePathname();
  const router = useRouter();

  const mainMenuItems = [
    { icon: FaHome, label: "Dashboard", path: "/dashboard" },
    {
      icon: FaCarSide,
      label: "Car Management",
      path: "/dashboard/car-management",
    },
    {
      icon: FaCarRear,
      label: "Booking Service",
      path: "/dashboard/booking-service",
    },
    {
      icon: FaHistory,
      label: "Service History",
      path: "/dashboard/service-history",
    },
    {
      icon: FaCalendarAlt,
      label: "Appointments",
      path: "/dashboard/appointments",
    },
    { icon: FaCreditCard, label: "Accounts", path: "/dashboard/payments" },
    { icon: FaNetworkWired, label: "Plans", path: "/dashboard/plans" },
    {
      icon: FaCarSide,
      label: "Road Side Services",
      path: "/dashboard/roadside",
    },
  ];

  const bottomMenuItems = [
    {
      icon: FaBell,
      label: "Notifications",
      path: "/dashboard/notification",
    },
    { icon: FaUserCog, label: "Settings", path: "/dashboard/profile" },
    {
      icon: FaQuestionCircle,
      label: "Help & Support",
      path: "/dashboard/support",
    },
  ];

  const handleLogout = () => {
    // Clear any stored tokens/session data
    localStorage.removeItem("autoland_token");
    // Redirect to login page
    router.push("/login");
  };

  return (
    <VStack spacing={8} align="stretch" color="gray.50">
      <Flex justify="space-between" align="center">
        <Box>
          <Link href="/dashboard">
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
            path={item.path}
            active={pathname === item.path}
            onClick={onClose}
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
            path={item.path}
            active={pathname === item.path}
            onClick={onClose}
          />
        ))}
        <HStack
          cursor="pointer"
          p={3}
          borderRadius="md"
          _hover={{
            bg: "rgba(255, 255, 255, 0.1)",
          }}
          color="white"
          transition="all 0.3s ease"
          onClick={() => {
            handleLogout();
            onClose?.();
          }}>
          <Icon as={FaSignOutAlt} />
          <Text fontWeight="medium">Logout</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default function Sidebar({ onClose }: SidebarContentProps) {
  return (
    <SidebarContainer>
      <SidebarContent onClose={onClose} />
    </SidebarContainer>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import {
  FaWrench,
  FaCalendarAlt,
  FaUserCog,
  FaBell,
  FaEllipsisH,
  FaBars,
} from "react-icons/fa";
import styled from "@emotion/styled";
import logo from "../assets/logo.webp";

// Import components
import Sidebar from "../components/SideBar";
import ServiceCards from "../components/ServiceCards";
import ServiceHistory from "../components/ServiceHistory";
import StatsGrid from "../components/StatsGrid";

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

// Data
const statsData = [
  {
    label: "Total Services",
    value: "0",
    change: "+0%",
    icon: FaWrench,
  },
  {
    label: "Ongoing Repairs",
    value: "0",
    change: "+0%",
    icon: FaCalendarAlt,
  },
  {
    label: "Completed Services",
    value: "0",
    change: "+0%",
    icon: FaUserCog,
  },
];

const serviceHistory = [
  {
    id: 1,
    service: "Oil Change",
    date: "2024-03-15",
    status: "Completed",
    cost: "$45.99",
    vehicle: "Toyota Camry XE 2014",
  },
  {
    id: 2,
    service: "Brake Inspection",
    date: "2024-03-14",
    status: "In Progress",
    cost: "$89.99",
    vehicle: "Honda Civic LX 2018",
  },
];

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      {/* Desktop Sidebar */}
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
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
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <MainContent>
        <Container maxW="container.2xl" py={8} px={{ base: 4, lg: 12 }}>
          {/* Mobile Header */}
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
            <Box width="40px" />
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
          <StatsGrid stats={statsData} />

          {/* Service History */}
          <ServiceHistory services={serviceHistory} showViewAll={true} />

          {/* Service Cards */}
          <ServiceCards />
        </Container>
      </MainContent>
    </Flex>
  );
}

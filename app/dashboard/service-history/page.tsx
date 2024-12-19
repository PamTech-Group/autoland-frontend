"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { FaHistory } from "react-icons/fa";
import Sidebar from "@/app/components/SideBar";
import ServiceHistory from "@/app/components/ServiceHistory";
import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa6";

import { ServiceRecord } from "@/app/utils/serviceRecords";

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

const services: ServiceRecord[] = [
  {
    id: 1,
    service: "Routine Maintenance",
    date: "2023-08-15",
    status: "Completed",
    cost: "$350.00",
    vehicle: "Toyota Camry 2020",
    demurrage: "$0",
    details: {
      "Oil Change": {
        description: "Full synthetic oil change with filter replacement",
        cost: "$75.00",
      },
      "Wheel Alignment": {
        description: "4-wheel alignment and suspension check",
        cost: "$125.00",
      },
      "Brake Inspection": {
        description: "Front and rear brake pad and rotor inspection",
        cost: "$150.00",
      },
    },
  },
  {
    id: 2,
    service: "Quick Fix",
    date: "2023-08-15",
    status: "Completed",
    cost: "$350.00",
    vehicle: "Toyota Corolla 2019",
    demurrage: "$0",
    details: {
      "Tire Change": {
        description: "Full Tire replacement",
        cost: "$75.00",
      },
      "Wheel Alignment": {
        description: "4-wheel alignment and suspension check",
        cost: "$125.00",
      },
      "Brake Inspection": {
        description: "Front and rear brake pad and rotor inspection",
        cost: "$150.00",
      },
    },
  },
  {
    id: 3,
    service: "Routine Maintenance",
    date: "2023-08-15",
    status: "Completed",
    cost: "$350.00",
    vehicle: "Toyota Camry 2020",
    demurrage: "$0",
    details: {
      "Oil Change": {
        description: "Full synthetic oil change with filter replacement",
        cost: "$75.00",
      },
      "Wheel Alignment": {
        description: "4-wheel alignment and suspension check",
        cost: "$125.00",
      },
      "Brake Inspection": {
        description: "Front and rear brake pad and rotor inspection",
        cost: "$150.00",
      },
    },
  },
  {
    id: 4,
    service: "Routine Maintenance",
    date: "2023-08-15",
    status: "Completed",
    cost: "$350.00",
    vehicle: "Toyota Camry 2020",
    demurrage: "$0",
    details: {
      "Oil Change": {
        description: "Full synthetic oil change with filter replacement",
        cost: "$75.00",
      },
      "Wheel Alignment": {
        description: "4-wheel alignment and suspension check",
        cost: "$125.00",
      },
      "Brake Inspection": {
        description: "Front and rear brake pad and rotor inspection",
        cost: "$150.00",
      },
    },
  },
  {
    id: 5,
    service: "Routine Maintenance",
    date: "2023-08-15",
    status: "Completed",
    cost: "$350.00",
    vehicle: "Toyota Camry 2020",
    demurrage: "$0",
    details: {
      "Oil Change": {
        description: "Full synthetic oil change with filter replacement",
        cost: "$75.00",
      },
      "Wheel Alignment": {
        description: "4-wheel alignment and suspension check",
        cost: "$125.00",
      },
      "Brake Inspection": {
        description: "Front and rear brake pad and rotor inspection",
        cost: "$150.00",
      },
    },
  },
];

export default function ServiceHistoryPage() {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  return (
    <Flex>
      {/* DEsktop SideBar */}
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        autoFocus={false}
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
        returnFocusOnClose={false}
        onOverlayClick={onDrawerClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <Sidebar onClose={onDrawerOpen} />
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <MainContent>
        {/* Mobile Header */}
        <Container maxW="container.2xl" py={8} px={{ base: 4, lg: 12 }}>
          <Flex
            mb={8}
            justify="space-between"
            align="center"
            display={{ base: "flex", lg: "none" }}
          >
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={onDrawerOpen}
              variant="ghost"
              color="white"
            />
          </Flex>
          <Heading size="sm" mb={4}>
            <Flex alignItems="center" gap={2}>
              <FaHistory /> Service History
            </Flex>
          </Heading>
          <Text color="gray.400" mb={8} width={{ base: "100%", lg: "70%" }}>
            Here you can find a detailed history of all the services performed
            on your vehicle. This includes information about the service type,
            date, status, cost, and technician notes.
          </Text>

          <ServiceHistory services={services} showViewAll={false} />
        </Container>
      </MainContent>
    </Flex>
  );
}

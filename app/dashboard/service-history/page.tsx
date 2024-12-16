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
} from "@chakra-ui/react";
import { FaHistory } from "react-icons/fa";
import Sidebar from "@/app/components/SideBar";
import ServiceHistory from "@/app/components/ServiceHistory";
import styled from "@emotion/styled";

const GlassCard = styled(Box)`
  background: rgba(26, 31, 55, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
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
const serviceHistoryData = [
  {
    id: 1,
    service: "Oil Change",
    date: "2024-03-15",
    status: "Completed",
    cost: "$45.99",
    vehicle: "Toyota Camry XE 2014",
    technician: "John Doe",
    notes: "Changed oil and filter.",
  },
  {
    id: 2,
    service: "Brake Inspection",
    date: "2024-03-14",
    status: "In Progress",
    cost: "$89.99",
    vehicle: "Honda Civic LX 2018",
    technician: "Jane Smith",
    notes: "Checked brake pads and rotors.",
  },
  {
    id: 3,
    service: "Tire Rotation",
    date: "2024-03-10",
    status: "Completed",
    cost: "$30.00",
    vehicle: "Ford Focus 2019",
    technician: "Emily Johnson",
    notes: "Rotated tires and checked pressure.",
  },
  {
    id: 2,
    service: "Brake Inspection",
    date: "2024-03-14",
    status: "In Progress",
    cost: "$89.99",
    vehicle: "Honda Civic LX 2018",
    technician: "Jane Smith",
    notes: "Checked brake pads and rotors.",
  },
  {
    id: 2,
    service: "Brake Inspection",
    date: "2024-03-14",
    status: "In Progress",
    cost: "$89.99",
    vehicle: "Honda Civic LX 2018",
    technician: "Jane Smith",
    notes: "Checked brake pads and rotors.",
  },
  {
    id: 2,
    service: "Brake Inspection",
    date: "2024-03-14",
    status: "In Progress",
    cost: "$89.99",
    vehicle: "Honda Civic LX 2018",
    technician: "Jane Smith",
    notes: "Checked brake pads and rotors.",
  },
  // Add more service history records as needed
];

export default function ServiceHistoryPage() {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Flex>
      {/* DEsktop SideBar */}
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
        size="full">
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <MainContent>
        <Container maxW="container.2xl" py={8} px={{ base: 4, lg: 12 }}>
          <Heading size="md" mb={4}>
            <Flex alignItems="center" gap={2}>
              <FaHistory /> Service History
            </Flex>
          </Heading>
          <Text color="gray.400" mb={8} width="80vw">
            Here you can find a detailed history of all the services performed
            on your vehicle. This includes information about the service type,
            date, status, cost, and technician notes.
          </Text>

          <GlassCard>
            <ServiceHistory services={serviceHistoryData} showViewAll={false} />
          </GlassCard>
        </Container>
      </MainContent>
    </Flex>
  );
}

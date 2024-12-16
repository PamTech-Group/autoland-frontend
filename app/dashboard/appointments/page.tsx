"use client";

import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Select,
  Button,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Sidebar from "@/app/components/SideBar";

const GlassCard = styled(Box)`
  background: linear-gradient(
    135deg,
    rgba(36, 39, 59, 0.8),
    rgba(28, 31, 48, 0.95)
  );
  border-radius: 15px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  padding: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  }
`;

const InputField = styled(Input)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-size: 16px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border: 1px solid #0070f3;
    box-shadow: 0 0 10px rgba(0, 112, 243, 0.8);
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

export default function AppointmentPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const handleBooking = () => {
    toast({
      title: "Appointment Booked Successfully",
      description: "We have received your appointment details.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex>
      {/* Sidebar */}
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

      {/* Main Content */}
      <MainContent>
        <Container maxW="container.2xl" py={8} px={{ base: 4, lg: 12 }}>
          <VStack spacing={6} textAlign="center" mb={8}>
            <Heading size="lg" color="white">
              Book an Appointment
            </Heading>
            <Text color="gray.400" maxW="3xl" fontSize="lg">
              Schedule your appointment with ease and manage your bookings
              effortlessly.
            </Text>
          </VStack>

          {/* Appointment Form */}
          <GlassCard>
            <Heading size="md" mb={6} color="white" textAlign="center">
              Appointment Details
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <InputField placeholder="Car Make" />
              <InputField placeholder="Car Model" />
              <Select
                placeholder="Year"
                bg="rgba(255,255,255,0.1)"
                color="white"
                borderRadius="10px">
                {Array.from({ length: 16 }, (_, i) => 2010 + i).map((year) => (
                  <option
                    key={year}
                    value={year}
                    style={{ background: "#333", color: "white" }}>
                    {year}
                  </option>
                ))}
              </Select>
              <InputField placeholder="Engine Type" />
              <InputField placeholder="City" />
              <Select
                placeholder="Workshop Centre"
                bg="rgba(255,255,255,0.1)"
                color="white"
                borderRadius="10px">
                <option
                  value="Owerri"
                  style={{ background: "#333", color: "white" }}>
                  Owerri
                </option>
                <option
                  value="Lagos"
                  style={{ background: "#333", color: "white" }}>
                  Lagos
                </option>
                <option
                  value="Abuja"
                  style={{ background: "#333", color: "white" }}>
                  Abuja
                </option>
              </Select>
              <InputField placeholder="Full Name" />
              <InputField placeholder="Phone Number" />
              <InputField placeholder="Email" />
              <InputField placeholder="Report an issue with your car" />
            </SimpleGrid>
            <Flex width="full" justifyContent="center">
              <Button
                mt={8}
                colorScheme="blue"
                onClick={handleBooking}
                width="fit-content"
                size="sm"
                borderRadius="30px">
                Book Appointment
              </Button>
            </Flex>
          </GlassCard>

          {/* Past & Future Appointments */}
          <Tabs variant="soft-rounded" colorScheme="blue" mt={12}>
            <TabList justifyContent="center">
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Upcoming</Tab>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Past</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing={4} align="stretch">
                  <GlassCard>
                    <Text fontWeight="bold">Oil Change Service</Text>
                    <Text fontSize="sm" color="gray.300">
                      Date: 2024-06-20 | Location: Lagos Workshop
                    </Text>
                  </GlassCard>
                  <GlassCard>
                    <Text fontWeight="bold">Brake Inspection</Text>
                    <Text fontSize="sm" color="gray.300">
                      Date: 2024-06-25 | Location: Abuja Workshop
                    </Text>
                  </GlassCard>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack spacing={4} align="stretch">
                  <GlassCard>
                    <Text fontWeight="bold">Tire Replacement</Text>
                    <Text fontSize="sm" color="gray.300">
                      Date: 2024-05-15 | Location: Owerri Workshop
                    </Text>
                  </GlassCard>
                  <GlassCard>
                    <Text fontWeight="bold">Battery Check</Text>
                    <Text fontSize="sm" color="gray.300">
                      Date: 2024-05-01 | Location: Lagos Workshop
                    </Text>
                  </GlassCard>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </MainContent>
    </Flex>
  );
}
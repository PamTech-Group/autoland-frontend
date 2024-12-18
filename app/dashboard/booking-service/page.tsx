/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Grid,
  VStack,
  Icon,
  IconButton,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  Button,
  Input,
} from "@chakra-ui/react";
import { FaCar, FaWrench, FaTools, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Sidebar from "@/app/components/SideBar";
import { Image, Link } from "@chakra-ui/next-js";
import { FaBars } from "react-icons/fa6";
import logo from "@/app/assets/logo.webp";
import { useState } from "react";

// Services Data
const services = [
  {
    id: 1,
    title: "Routine Maintenance",
    description: "Regular maintenance to keep your car in top-notch condition.",
    icon: FaCar,
    gradient: ["#4A90E2", "#6A11CB"],
  },
  {
    id: 2,
    title: "Total Car Care",
    description:
      "Comprehensive care, including cleaning, servicing, and detailing.",
    icon: FaTools,
    gradient: ["#11998e", "#38ef7d"],
  },
  {
    id: 3,
    title: "Diagnosis",
    description:
      "Accurate vehicle diagnostics to identify and resolve issues quickly.",
    icon: FaCog,
    gradient: ["#FF6B6B", "#4ECDC4"],
  },
  {
    id: 4,
    title: "Quick Fix",
    description:
      "Rapid solutions for minor repairs to get you back on the road.",
    icon: FaWrench,
    gradient: ["#8E2DE2", "#4A00E0"],
  },
];

// Animated card component
const ServiceCard: React.FC<{ service: (typeof services)[number] }> = ({
  service,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Box
        bg={`linear-gradient(135deg, ${service.gradient[0]}, ${service.gradient[1]})`}
        borderRadius="2xl"
        boxShadow="xl"
        p={4}
        textAlign="center"
        color="white"
        position="relative"
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-10px)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        }}
      >
        {/* Subtle background pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.1}
          backgroundImage="radial-gradient(rgba(255,255,255,0.1) 20%, transparent 20%)"
          backgroundSize="20px 20px"
        />

        <Flex
          justify="center"
          align="center"
          w="14"
          h="14"
          bg="whiteAlpha.300"
          borderRadius="full"
          mx="auto"
          mb={4}
        >
          <Icon as={service.icon} boxSize={8} />
        </Flex>

        <VStack spacing={3}>
          <Heading size="sm" fontWeight="bold">
            {service.title}
          </Heading>
          <Text fontSize="sm" opacity={0.9}>
            {service.description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default function BookingServicePage() {
  const [selectedCars, setSelectedCars] = useState<string[]>([]); //+
  const [selectedServices, setSelectedServices] = useState<string[]>([]); //+
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); //+
  //+
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
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
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Form submission logic
    console.log({
      cars: selectedCars,
      services: selectedServices,
      date: selectedDate,
    });
  };

  const userCars = [
    { id: "car1", name: "Toyota Camry 2020", license: "ABC 123" },
    { id: "car2", name: "Honda Civic 2019", license: "XYZ 456" },
    { id: "car3", name: "Tesla Model 3", license: "EV 789" },
    { id: "car3", name: "Tesla Model 3", license: "EV 789" },
  ];
  return (
    <Flex>
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
          <Sidebar onClose={onDrawerClose} />
        </DrawerContent>
      </Drawer>

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
              onClick={onDrawerOpen}
              variant="ghost"
              color="white"
            />
            <Link href="/">
              <Image
                src={logo.src}
                alt="Autoland Logo"
                height={25}
                width={55}
              />
            </Link>
            <Box width="40px" />
          </Flex>
          <Flex flexDir="column" gap={10} mb={6}>
            <Heading
              as="h1"
              size="sm"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.200, purple.200)"
              bgClip="text"
            >
              Our Premium Services
            </Heading>
            <Text maxW="2xl" color="gray.100" fontSize="lg">
              {`Experience top-tier automotive services tailored to enhance your
              vehicle's performance, safety, and aesthetics.`}
            </Text>
          </Flex>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </Grid>
          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <VStack spacing={10} align="stretch" mt={8} p={{ base: 0, lg: 6 }}>
              <Heading size="sm" color="white">
                Book a Service
              </Heading>
              {/* Car Selection */}
              <GlassCard>
                <FormControl>
                  <FormLabel fontWeight={700} mb={6} color="gray.50">
                    Select Your Car
                  </FormLabel>
                  <CheckboxGroup
                    colorScheme="purple"
                    value={selectedCars}
                    onChange={(value: string[]) => setSelectedCars(value)}
                  >
                    <Grid
                      templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                      }}
                      gap={4}
                    >
                      {userCars.map((car) => (
                        <Checkbox
                          key={car.id}
                          value={car.id}
                          borderColor="blue.500"
                        >
                          <Flex flexDir="column">
                            <Text fontWeight="medium">{car.name}</Text>
                            <Text fontSize="sm" color="gray.500">
                              {car.license}
                            </Text>
                          </Flex>
                        </Checkbox>
                      ))}
                    </Grid>
                  </CheckboxGroup>
                </FormControl>

                {/* Service Selection */}
                <FormControl>
                  <FormLabel fontWeight={700} my={10} color="gray.50">
                    Select Services
                  </FormLabel>
                  <CheckboxGroup
                    colorScheme="purple"
                    value={selectedServices}
                    onChange={(value: string[]) => setSelectedServices(value)}
                  >
                    <Grid
                      templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                      }}
                      gap={4}
                    >
                      {services.map((service) => (
                        <Checkbox
                          key={service.id}
                          value={service.id}
                          borderColor="blue.500"
                        >
                          <Flex flexDir="column">
                            <Text fontWeight="medium">{service.title}</Text>
                            <Text fontSize="sm" color="gray.500">
                              {service.description}
                            </Text>
                          </Flex>
                        </Checkbox>
                      ))}
                    </Grid>
                  </CheckboxGroup>
                </FormControl>

                {/* Date Selection */}
                <FormControl mt={6}>
                  <FormLabel fontWeight="bold" color="gray.300">
                    Select Date
                  </FormLabel>
                  <Box
                    borderWidth={1}
                    borderRadius="md"
                    p={2}
                    borderColor="blue.500"
                    width="fit-content"
                  >
                    <Input type="date" width="fit-content" />
                  </Box>
                </FormControl>
                {/* Submit Button */}

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="sm"
                  padding={5}
                  width="fit-content"
                  mt={10}
                >
                  Book Service
                </Button>
              </GlassCard>
            </VStack>
          </form>
        </Container>
      </MainContent>
      {/* Custom Styles for Date Picker */}
      <style jsx global>{`
        .custom-datepicker {
          width: 100%;
          padding: 8px;
          border: 1px solid #cbd5e0;
          border-radius: 0.375rem;
          background-color: transparent;
        }
        .custom-datepicker:focus {
          outline: none;
          border-color: #6b46c1;
        }
      `}</style>
    </Flex>
  );
}

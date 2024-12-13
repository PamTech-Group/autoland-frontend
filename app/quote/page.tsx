/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Input,
  Select,
  Button,
  VStack,
  FormControl,
  FormLabel,
  SimpleGrid,
  Checkbox,
  Icon,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTools, FaCarSide, FaClock, FaShieldAlt } from "react-icons/fa";
import NavWhite from "../components/NavWhite";
import Footer from "../components/Footer";
import axios from "axios";

const MotionBox = motion(Box as any);
interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  carBrand: string;
  carModel: string;
  year: string;
  mileage: string;
  services: string[];
}

const serviceOptions = [
  { id: "engine", label: "Engine Repair/Service" },
  { id: "transmission", label: "Transmission Service" },
  { id: "brakes", label: "Brake System" },
  { id: "suspension", label: "Suspension & Steering" },
  { id: "electrical", label: "Electrical Systems" },
  { id: "ac", label: "AC Service/Repair" },
  { id: "diagnostic", label: "Computer Diagnostics" },
  { id: "oil", label: "Oil Change Service" },
  { id: "tire", label: "Tire Service" },
  { id: "body", label: "Body Work & Painting" },
];

const features = [
  {
    icon: FaTools,
    title: "Expert Diagnostics",
    description: "Professional assessment of your vehicle's condition",
  },
  {
    icon: FaCarSide,
    title: "All Car Brands",
    description: "Specialized service for all makes and models",
  },
  {
    icon: FaClock,
    title: "Quick Response",
    description: "Get your quote within 24 hours",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Guarantee",
    description: "Premium service with warranty coverage",
  },
];

export default function QuotePage() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    carBrand: "",
    carModel: "",
    year: "",
    mileage: "",
    services: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // You can replace this URL with your actual API endpoint
      const response = await axios.post("/api/quote", formData);

      toast({
        title: "Quote Submitted Successfully",
        description: "We'll get back to you with a detailed quote soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        carBrand: "",
        carModel: "",
        year: "",
        mileage: "",
        services: [],
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      console.error("Error submitting quote:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  return (
    <Box bg="backgroundWhite" color="white">
      <NavWhite />

      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        bg="primaryBlue"
        color="white"
        py={20}
      >
        <Container maxW="container.xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={10}
            alignItems="center"
          >
            <MotionBox
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Heading size="xl" mb={6}>
                Get an Instant Quote for Your Car Service
              </Heading>
              <Text fontSize="lg" opacity={0.9}>
                Professional auto repair services tailored to your needs. Get
                transparent pricing and expert service from our certified
                technicians.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {features.map((feature, index) => (
                  <VStack
                    key={index}
                    bg="rgba(255,255,255,0.1)"
                    p={6}
                    borderRadius="xl"
                    align="start"
                    spacing={4}
                  >
                    <Icon as={feature.icon} boxSize={6} />
                    <Text fontWeight="bold">{feature.title}</Text>
                    <Text fontSize="sm" opacity={0.8}>
                      {feature.description}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </MotionBox>

      {/* Quote Form Section */}
      <Container maxW="container.xl" py={20}>
        <MotionBox
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          bg="secondaryBlue"
          shadow="xl"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
        >
          <VStack spacing={8} align="stretch">
            <Heading size="lg" color="white">
              Vehicle Information
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <FormControl>
                <FormLabel>Car Brand</FormLabel>
                <Input
                  name="carBrand"
                  value={formData.carBrand}
                  onChange={handleInputChange}
                  size="md"
                  color="gray.700"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: "buttonOrange" }}
                  _focus={{ borderColor: "buttonOrange", boxShadow: "none" }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Car Model</FormLabel>
                <Input
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  size="md"
                  color="gray.700"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: "buttonOrange" }}
                  _focus={{ borderColor: "buttonOrange", boxShadow: "none" }}
                />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <FormControl>
                <FormLabel>Year</FormLabel>
                <Select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  size="md"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: "buttonOrange" }}
                  _focus={{ borderColor: "buttonOrange", boxShadow: "none" }}
                >
                  {Array.from({ length: 15 }, (_, i) => 2024 - i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Current Mileage</FormLabel>
                <Input
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleInputChange}
                  size="md"
                  color="gray.700"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: "buttonOrange" }}
                  _focus={{ borderColor: "buttonOrange", boxShadow: "none" }}
                  placeholder="e.g., 50,000 km"
                />
              </FormControl>
            </SimpleGrid>

            <Divider my={4} />

            <Heading size="lg" color="white">
              Required Services
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {serviceOptions.map((service) => (
                <Checkbox
                  key={service.id}
                  size="md"
                  colorScheme="orange"
                  spacing={3}
                  value={service.id}
                  isChecked={formData.services.includes(service.id)}
                  onChange={handleServiceChange}
                >
                  {service.label}
                </Checkbox>
              ))}
            </SimpleGrid>

            <Divider my={4} />

            <Heading size="lg" color="white">
              Contact Information
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  size="md"
                  color="gray.700"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: "buttonOrange" }}
                  _focus={{ borderColor: "buttonOrange", boxShadow: "none" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  size="md"
                  color="gray.700"
                  bg="gray.50"
                  borderColor="gray.200"
                  _hover={{ borderColor: "buttonOrange" }}
                  _focus={{ borderColor: "buttonOrange", boxShadow: "none" }}
                />
              </FormControl>
            </SimpleGrid>

            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                size="md"
                color="gray.700"
                bg="gray.50"
                borderColor="gray.200"
                _hover={{ borderColor: "buttonOrange" }}
                _focus={{ borderColor: "buttonOrange", boxShadow: "none" }}
              />
            </FormControl>
            <Flex width="100%" justifyContent="center" mt={12}>
              {" "}
              <Button
                size="md"
                width="fit-content"
                bg="buttonOrange"
                borderRadius="30px"
                color="white"
                _hover={{ bg: "primaryBlue" }}
                _active={{ bg: "primaryBlue" }}
                px={12}
                py={7}
                isLoading={loading}
                onClick={handleSubmit}
              >
                Get Your Quote
              </Button>
            </Flex>
          </VStack>
        </MotionBox>
      </Container>

      <Footer />
    </Box>
  );
}

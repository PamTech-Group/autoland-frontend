/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Flex,
  useToast,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Sidebar from "@/app/components/SideBar";
import { FaBars } from "react-icons/fa6";
import { Image, Link } from "@chakra-ui/next-js";
import logo from "@/app/assets/logo.webp";

const GlassCard = styled(Box)`
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
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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

const packages = [
  {
    name: "SILVER PACKAGE",
    benefits: "Japanese Vehicle (Semi Synthetic Oil) 6litrs - 5litrs",
  },
  {
    name: "GOLD PACKAGE",
    benefits: "Japanese Vehicle (Full Synthetic Oil) 5litrs",
  },
  {
    name: "DIAMOND PACKAGE",
    benefits: "Japanese Vehicle (Full Synthetic Oil) 6litrs - 8litrs",
  },
  {
    name: "PREMIUM PACKAGE",
    benefits: "Range Rovers & Benz (Full Synthetic Oil) 6litrs - 8litrs",
  },
];

export default function PlansPage() {
  const userSubscribed = false; // Simulate subscription state
  const userPlan = "GOLD PACKAGE"; // Simulated user plan
  const toast = useToast();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const handleSubscribe = () => {
    toast({
      title: "Subscription Successful",
      description: "Welcome to the AutoClub!",
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
      {/* Main Content */}
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
          <Flex flexDir="column" gap={6} mb={8}>
            <Heading size="sm" color="white">
              VIP AutoClub Membership
            </Heading>
            <Text color="gray.400" maxW="3xl" fontSize="xs">
              {userSubscribed
                ? "Here are the details of your current subscription."
                : "Subscribe to one of our AutoClub packages and enjoy exclusive benefits."}
            </Text>
          </Flex>{" "}
          {/* Display User Subscription */}
          {userSubscribed ? (
            <GlassCard>
              <Heading size="md" mb={4} color="white">
                Your Current Plan: {userPlan}
              </Heading>
              <Text color="gray.300">
                Benefits:{" "}
                {packages.find((pkg) => pkg.name === userPlan)?.benefits}
              </Text>
              {userPlan !== packages[3].name && (
                <Button colorScheme="blue" mt={4} onClick={handleSubscribe}>
                  Upgrade to Premium Package
                </Button>
              )}
            </GlassCard>
          ) : (
            <>
              {/* AutoClub Benefits */}
              <GlassCard mb={8}>
                <Heading size="sm" mb={4} color="white">
                  Benefits of AutoClub
                </Heading>
                <VStack spacing={2} align="start">
                  <Text color="gray.300">✅ Express Lube Service</Text>
                  <Text color="gray.300">
                    ✅ Comprehensive Vehicle Scanning
                  </Text>
                  <Text color="gray.300">✅ Discounted Fuel Rates</Text>
                  <Text color="gray.300">✅ Valet Pick-up & Delivery</Text>
                  <Text color="gray.300">✅ Service Reminders</Text>
                </VStack>
              </GlassCard>

              {/* Subscription Packages */}
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {packages.map((pkg) => (
                  <GlassCard key={pkg.name} textAlign="center">
                    <Heading size="xs" mb={2} color="white">
                      {pkg.name}
                    </Heading>
                    <Text color="gray.300" mb={4}>
                      {pkg.benefits}
                    </Text>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      px={6}
                      borderRadius="30px"
                      onClick={handleSubscribe}>
                      Subscribe
                    </Button>
                  </GlassCard>
                ))}
              </SimpleGrid>

              {/* Subscription Form */}
              <GlassCard mt={8}>
                <Heading size="sm" mb={4} color="white">
                  Sign Up for AutoClub
                </Heading>
                <VStack spacing={4} align="stretch">
                  <Input
                    placeholder="Enter your Email"
                    type="email"
                    bg="gray.700"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                  />
                  <Select
                    placeholder="Select a Package"
                    bg="gray.700"
                    color="white">
                    {packages.map((pkg) => (
                      <option
                        key={pkg.name}
                        value={pkg.name}
                        style={{ color: "white", background: "#111322" }}>
                        {pkg.name}
                      </option>
                    ))}
                  </Select>
                  <Button
                    width="fit-content"
                    colorScheme="blue"
                    onClick={handleSubscribe}>
                    Submit
                  </Button>
                </VStack>
              </GlassCard>
            </>
          )}
        </Container>
      </MainContent>
    </Flex>
  );
}

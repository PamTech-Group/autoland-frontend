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
  SimpleGrid,
  Textarea,
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

export default function PaymentPage() {
  const toast = useToast();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const handleUpload = () => {
    toast({
      title: "Receipt Uploaded Successfully",
      description: "Your receipt is pending verification.",
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
        size="xs"
      >
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
          <Flex flexDir="column" gap={6} width="full" mb={8}>
            <Heading size="sm" color="white">
              Payment Page
            </Heading>
            <Text color="gray.400" maxW="3xl" fontSize="sm">
              Complete your payment via bank transfer, attach a description and
              amount, and upload your transaction receipt for verification.
            </Text>
          </Flex>

          {/* Payment Details */}
          <GlassCard>
            <Heading size="sm" mb={4} color="white">
              Bank Transfer Details
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Box>
                <Text color="gray.300">Bank Name:</Text>
                <Text fontWeight="bold" color="white">
                  ABC Bank
                </Text>
              </Box>
              <Box>
                <Text color="gray.300">Account Name:</Text>
                <Text fontWeight="bold" color="white">
                  Pamtech Autoland
                </Text>
              </Box>
              <Box>
                <Text color="gray.300">Account Number:</Text>
                <Text fontWeight="bold" color="white">
                  1234567890
                </Text>
              </Box>
              <Box>
                <Text color="gray.300">Branch:</Text>
                <Select
                  placeholder="Select Branch"
                  bg="gray.700"
                  size="sm"
                  color="white"
                >
                  <option style={{ color: "white", background: "#111322" }}>
                    Owerri
                  </option>
                  <option style={{ color: "white", background: "#111322" }}>
                    Port Harcourt
                  </option>
                </Select>
              </Box>
            </SimpleGrid>
          </GlassCard>

          {/* Receipt Upload Section */}
          <GlassCard mt={8}>
            <Heading size="sm" mb={4} color="white">
              Upload Payment Receipt
            </Heading>
            <VStack spacing={4} align="stretch">
              <Textarea
                placeholder="Enter payment description (e.g., purpose of payment)"
                bg="gray.700"
                color="white"
                _placeholder={{ color: "gray.400" }}
              />
              <Input
                placeholder="Enter Payment Amount"
                type="number"
                bg="gray.700"
                color="white"
              />
              <Input
                type="file"
                accept="image/*,application/pdf"
                placeholder="Upload Receipt"
                bg="gray.700"
                color="white"
              />
              <Button colorScheme="blue" onClick={handleUpload} width="full">
                Upload Receipt
              </Button>
              <Text fontSize="sm" color="gray.400">
                Your uploaded receipt will be pending until verified by an
                administrator.
              </Text>
            </VStack>
          </GlassCard>
        </Container>
      </MainContent>
    </Flex>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Flex,
  Avatar,
  IconButton,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Heading,
  SimpleGrid,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaBars, FaCamera, FaEdit } from "react-icons/fa";
import { Image, Link } from "@chakra-ui/next-js";
import logo from "@/app/assets/logo.webp";
import Sidebar from "@/app/components/SideBar";
import { useRef, useState } from "react";

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
    rgba(36, 39, 59, 0.7),
    rgba(28, 31, 48, 0.9)
  );
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
`;

export default function ProfilePage() {
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  // Sample user data - replace with actual data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+234 801 234 5678",
    address: "123 Lagos Street, Victoria Island",
    occupation: "Business Owner",
    preferredCar: "Toyota Camry",
    joinedDate: "January 2024",
    profileImage: "/default-avatar.png",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle image upload logic here
      toast({
        title: "Profile picture updated",
        status: "success",
        duration: 3000,
      });
    }
  };

  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>

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

          {/* Profile Header */}
          <VStack spacing={8} align="stretch">
            <GlassCard>
              <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
                gap={6}>
                <HStack spacing={6}>
                  <Box position="relative">
                    <Avatar
                      size="2xl"
                      name={userData.name}
                      src={userData.profileImage}
                    />
                    <IconButton
                      aria-label="Upload picture"
                      icon={<FaCamera />}
                      size="sm"
                      colorScheme="blue"
                      rounded="full"
                      position="absolute"
                      bottom={0}
                      right={0}
                      onClick={() => fileInputRef.current?.click()}
                    />
                    <Input
                      type="file"
                      hidden
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Heading size="lg">{userData.name}</Heading>
                    <Text color="gray.400">
                      Member since {userData.joinedDate}
                    </Text>
                  </VStack>
                </HStack>
                <Button
                  leftIcon={<FaEdit />}
                  colorScheme="blue"
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </Flex>
            </GlassCard>

            {/* Profile Details */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {/* Personal Information */}
              <GlassCard>
                <VStack align="stretch" spacing={4}>
                  <Heading size="md" mb={4}>
                    Personal Information
                  </Heading>
                  <FormControl>
                    <FormLabel color="gray.400">Full Name</FormLabel>
                    <Input
                      value={userData.name}
                      isReadOnly={!isEditing}
                      bg={isEditing ? "whiteAlpha.100" : "transparent"}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.400">Email</FormLabel>
                    <Input
                      value={userData.email}
                      isReadOnly={!isEditing}
                      bg={isEditing ? "whiteAlpha.100" : "transparent"}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.400">Phone Number</FormLabel>
                    <Input
                      value={userData.phone}
                      isReadOnly={!isEditing}
                      bg={isEditing ? "whiteAlpha.100" : "transparent"}
                    />
                  </FormControl>
                </VStack>
              </GlassCard>

              {/* Additional Information */}
              <GlassCard>
                <VStack align="stretch" spacing={4}>
                  <Heading size="md" mb={4}>
                    Additional Information
                  </Heading>
                  <FormControl>
                    <FormLabel color="gray.400">Address</FormLabel>
                    <Input
                      value={userData.address}
                      isReadOnly={!isEditing}
                      bg={isEditing ? "whiteAlpha.100" : "transparent"}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.400">Occupation</FormLabel>
                    <Input
                      value={userData.occupation}
                      isReadOnly={!isEditing}
                      bg={isEditing ? "whiteAlpha.100" : "transparent"}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.400">Preferred Car</FormLabel>
                    <Input
                      value={userData.preferredCar}
                      isReadOnly={!isEditing}
                      bg={isEditing ? "whiteAlpha.100" : "transparent"}
                    />
                  </FormControl>
                </VStack>
              </GlassCard>
            </SimpleGrid>
          </VStack>
        </Container>
      </MainContent>
    </Flex>
  );
}

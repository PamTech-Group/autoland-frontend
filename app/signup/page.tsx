/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styled from "@emotion/styled";
import axios from "axios";

// Styled components for animated background
const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    #00204f,
    #0d2b57,
    #2a4365,
    #2c5282,
    #00204f
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  z-index: 0;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const GlassMorphicCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 3rem;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const MotionBox = motion.div;
interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export default function SignupPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const toast = useToast();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (!formData.fullName || !formData.email || !formData.password) {
      toast({
        title: "Missing Details",
        description: "Please fill in all fields",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "YOUR_API_ENDPOINT/signup",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast({
          title: "Account created successfully",
          description: "Welcome to our platform!",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });

        // Add a slight delay before redirecting (optional)

        router.push("/dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.response?.data?.message || "Please try again",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Flex
      minH="100vh"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <AnimatedBackground />

      <GlassMorphicCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <MotionBox
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Text
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            color="white"
            mb={8}
            textShadow="0 0 10px rgba(255,255,255,0.3)"
          >
            Welcome Back
          </Text>
        </MotionBox>

        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl>
              <MotionBox
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FormLabel>Fullname</FormLabel>

                <Input
                  name="fullname"
                  type="text"
                  placeholder="Fullname"
                  size="lg"
                  bg="rgba(255,255,255,0.1)"
                  border="1px solid rgba(255,255,255,0.2)"
                  color="white"
                  _placeholder={{ color: "rgba(255,255,255,0.7)" }}
                  _hover={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    bg: "rgba(255,255,255,0.15)",
                  }}
                  _focus={{
                    border: "1px solid rgba(255,255,255,0.6)",
                    bg: "rgba(255,255,255,0.15)",
                    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                  }}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </MotionBox>
            </FormControl>
            <FormControl>
              <MotionBox
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FormLabel>Email</FormLabel>

                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  size="lg"
                  bg="rgba(255,255,255,0.1)"
                  border="1px solid rgba(255,255,255,0.2)"
                  color="white"
                  _placeholder={{ color: "rgba(255,255,255,0.7)" }}
                  _hover={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    bg: "rgba(255,255,255,0.15)",
                  }}
                  _focus={{
                    border: "1px solid rgba(255,255,255,0.6)",
                    bg: "rgba(255,255,255,0.15)",
                    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                  }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </MotionBox>
            </FormControl>
            <FormControl>
              <MotionBox
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FormLabel>Phone Number</FormLabel>

                <Input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  size="lg"
                  bg="rgba(255,255,255,0.1)"
                  border="1px solid rgba(255,255,255,0.2)"
                  color="white"
                  _placeholder={{ color: "rgba(255,255,255,0.7)" }}
                  _hover={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    bg: "rgba(255,255,255,0.15)",
                  }}
                  _focus={{
                    border: "1px solid rgba(255,255,255,0.6)",
                    bg: "rgba(255,255,255,0.15)",
                    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                  }}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </MotionBox>
            </FormControl>

            <FormControl>
              <MotionBox
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  size="lg"
                  bg="rgba(255,255,255,0.1)"
                  border="1px solid rgba(255,255,255,0.2)"
                  color="white"
                  _placeholder={{ color: "rgba(255,255,255,0.7)" }}
                  _hover={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    bg: "rgba(255,255,255,0.15)",
                  }}
                  _focus={{
                    border: "1px solid rgba(255,255,255,0.6)",
                    bg: "rgba(255,255,255,0.15)",
                    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                  }}
                  value={formData.password}
                  onChange={handleChange}
                />
              </MotionBox>
            </FormControl>
            <FormControl>
              <MotionBox
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  size="lg"
                  bg="rgba(255,255,255,0.1)"
                  border="1px solid rgba(255,255,255,0.2)"
                  color="white"
                  _placeholder={{ color: "rgba(255,255,255,0.7)" }}
                  _hover={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    bg: "rgba(255,255,255,0.15)",
                  }}
                  _focus={{
                    border: "1px solid rgba(255,255,255,0.6)",
                    bg: "rgba(255,255,255,0.15)",
                    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                  }}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </MotionBox>
            </FormControl>
            <MotionBox
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ width: "100%", textAlign: "center" }}
            >
              <Button
                isLoading={loading}
                w="fit-content"
                borderRadius="20px"
                size="lg"
                bg="rgba(255,255,255,0.15)"
                color="white"
                border="1px solid rgba(255,255,255,0.2)"
                _hover={{
                  bg: "rgba(255,255,255,0.25)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                transition="all 0.3s ease"
                type="submit"
                backdropFilter="blur(10px)"
              >
                Sign up
              </Button>
            </MotionBox>
          </VStack>
        </form>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: "1.5rem" }}
        >
          <Text textAlign="center" color="rgba(255,255,255,0.8)" fontSize="sm">
            {` Already have an account? `}
            <Text
              as="a"
              href="/login"
              color="white"
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
              transition="all 0.3s ease"
            >
              Log in
            </Text>
          </Text>
        </MotionBox>
      </GlassMorphicCard>
    </Flex>
  );
}

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
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
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

interface SignupResponse {
  message: string;
  token?: string;
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
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    phoneNumber?: string;
  }>({});
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    // if (errors[name as keyof typeof errors]) {
    //   setErrors({ ...errors, [name]: undefined });
    // }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post<SignupResponse>(
        "https://autoland-admin-backend.onrender.com/api/auth/signup",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
        }
      );

      if ((response.data.message = "User registered successfully.")) {
        toast({
          title: "Success",
          description: "Account created successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });

        router.push("/login");
      }
    } catch (error) {
      let errorMessage = "Registration failed";

      if (axios.isAxiosError(error) && error.response) {
        errorMessage = (error.response.data as SignupResponse).message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
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
            fontSize="md"
            fontWeight="bold"
            textAlign="center"
            color="white"
            mb={8}
            textShadow="0 0 10px rgba(255,255,255,0.3)"
          >
            Create Account
          </Text>
        </MotionBox>

        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl isInvalid={!!errors.fullName}>
              <MotionBox
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FormLabel fontSize="sm">Full Name</FormLabel>
                <Input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  size="sm"
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
                  disabled={loading}
                />
                <FormErrorMessage>{errors.fullName}</FormErrorMessage>
              </MotionBox>
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <MotionBox
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FormLabel fontSize="sm">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  size="sm"
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
                  disabled={loading}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </MotionBox>
            </FormControl>

            <FormControl isInvalid={!!errors.phoneNumber}>
              <MotionBox
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FormLabel fontSize="sm">Phone Number</FormLabel>
                <Input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  size="sm"
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
                  disabled={loading}
                />
                <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
              </MotionBox>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <MotionBox
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <FormLabel fontSize="sm">Password</FormLabel>
                <InputGroup size="sm">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    size="sm"
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
                    disabled={loading}
                  />
                  <InputRightElement>
                    <IconButton
                      variant="ghost"
                      size="sm"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      icon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      onClick={() => setShowPassword(!showPassword)}
                      color="white"
                      _hover={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </MotionBox>
            </FormControl>

            <FormControl isInvalid={!!errors.confirmPassword}>
              <MotionBox
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <FormLabel fontSize="sm">Confirm Password</FormLabel>
                <InputGroup size="sm">
                  <Input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    size="sm"
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
                    disabled={loading}
                  />
                  <InputRightElement>
                    <IconButton
                      variant="ghost"
                      size="sm"
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                      icon={
                        showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />
                      }
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      color="white"
                      _hover={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
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
                loadingText="Creating Account..."
                w="fit-content"
                borderRadius="20px"
                size="sm"
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
                Sign Up
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
          <Text textAlign="center" color="rgba(255,255,255,0.8)" fontSize="xs">
            Already have an account?{" "}
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

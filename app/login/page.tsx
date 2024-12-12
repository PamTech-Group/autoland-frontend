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
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: "This is a demo login page",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    router.push("/dashboard");
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
                <FormLabel>Email</FormLabel>

                <Input
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                Log In
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
            {` Don't have an account? `}
            <Text
              as="a"
              href="/signup"
              color="white"
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
              transition="all 0.3s ease"
            >
              Sign Up
            </Text>
          </Text>
        </MotionBox>
      </GlassMorphicCard>
    </Flex>
  );
}

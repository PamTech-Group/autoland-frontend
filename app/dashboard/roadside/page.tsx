"use client";

import {
  Box,
  Container,
  VStack,
  Text,
  Flex,
  IconButton,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Heading,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaCar, FaTools, FaWrench } from "react-icons/fa";
import { Image, Link } from "@chakra-ui/next-js";
import logo from "@/app/assets/logo.webp";
import Sidebar from "@/app/components/SideBar";
import { useEffect, useState } from "react";

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

const GlassCard = styled(motion.div)`
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

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: rgba(66, 13, 211, 0.86);
`;

const CountdownBox = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  min-width: 40px;
  text-align: center;
`;

export default function RoadsidePage() {
  const toast = useToast();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "We'll notify you when we launch.",
      status: "success",
      duration: 3000,
    });
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
        <Container
          maxW="container.xl"
          py={8}
          px={{ base: 4, lg: 12 }}
          position="relative"
          overflow="scroll">
          <AnimatePresence>
            {[...Array(5)].map((_, i) => (
              <FloatingIcon
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                exit={{ y: 20, opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  position: "absolute",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}>
                {i % 2 === 0 ? (
                  <FaCar size={30} />
                ) : i % 3 === 0 ? (
                  <FaTools size={30} />
                ) : (
                  <FaWrench size={30} />
                )}
              </FloatingIcon>
            ))}
          </AnimatePresence>
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
          <VStack spacing={12} align="center" position="relative" zIndex={1}>
            <GlassCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <VStack spacing={6} textAlign="center" maxW="600px">
                <Heading
                  size="md"
                  bgGradient="linear(to-r, blue.400, purple.400)"
                  bgClip="text">
                  Roadside Assistance
                </Heading>
                <Text fontSize="sm" color="gray.400">
                  Your reliable partner on the road, coming soon!
                </Text>

                <Flex gap={4} py={8} px={4} wrap="nowrap">
                  <CountdownBox>
                    <Text
                      fontSize={{ base: "md", lg: "2xl" }}
                      fontWeight="bold">
                      {countdown.days}
                    </Text>
                    <Text color="gray.400">Days</Text>
                  </CountdownBox>
                  <CountdownBox>
                    <Text
                      fontSize={{ base: "md", lg: "2xl" }}
                      fontWeight="bold">
                      {countdown.hours}
                    </Text>
                    <Text color="gray.400">Hours</Text>
                  </CountdownBox>
                  <CountdownBox>
                    <Text
                      fontSize={{ base: "md", lg: "2xl" }}
                      fontWeight="bold">
                      {countdown.minutes}
                    </Text>
                    <Text color="gray.400">Minutes</Text>
                  </CountdownBox>
                  <CountdownBox>
                    <Text
                      fontSize={{ base: "md", lg: "2xl" }}
                      fontWeight="bold">
                      {countdown.seconds}
                    </Text>
                    <Text color="gray.400">Seconds</Text>
                  </CountdownBox>
                </Flex>

                <Box as="form" onSubmit={handleSubscribe} width="full">
                  <Flex wrap="wrap" gap={2}>
                    <Input
                      placeholder="Enter your email"
                      bg="whiteAlpha.100"
                      border="none"
                      _placeholder={{ color: "gray.500" }}
                    />
                    <Button
                      size="sm"
                      colorScheme="blue"
                      type="submit"
                      px={8}
                      position="relative"
                      overflow="hidden"
                      _after={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                        transform: "translateX(-100%)",
                        animation: "shine 3s infinite",
                      }}>
                      Notify Me
                    </Button>
                  </Flex>
                </Box>
              </VStack>
            </GlassCard>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}>
              <FaCar size={120} color="rgba(66, 153, 225, 0.6)" />
            </motion.div>
          </VStack>
        </Container>
      </MainContent>
    </Flex>
  );
}

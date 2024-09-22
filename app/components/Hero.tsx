"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Image from "next/image";
import heroImage from "../assets/heroImage.webp";
import Nav from "./Nav";
function Hero() {
  return (
    <>
      <Box color="whiteText" height="110vh" width="100vw">
        <Flex
          flexDirection="column"
          zIndex={1}
          height="90%"
          bg="primaryBlue"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          clipPath={{
            base: "none",
            md: "polygon(100% 0%, 0% 0%, 0% 100%, 4% 98%, 8% 96%, 12% 94%, 16% 92%, 20% 90%, 24% 89%, 28% 88%, 32% 87%, 36% 86%, 40% 85%, 44% 85%, 48% 85%, 52% 85%, 56% 86%, 60% 87%, 64% 88%, 68% 90%, 72% 92%, 76% 94%, 80% 96%, 84% 98%, 88% 99%, 92% 100%, 96% 100%, 100% 100%)",
          }}
          position="relative"
        >
          <Nav />
          <Flex
            padding={{
              base: "0.5rem 0.5rem",
              sm: "0.75rem 2rem",
              md: "1rem 4rem",
              lg: "1rem 4rem",
            }}
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left side content */}
            <VStack
              align="flex-start"
              spacing={6}
              width="55%"
              // mb={{ base: 8, lg: 0 }}
            >
              <Heading as="h1" size="2xl">
                Car Repair & Servicing Made Easy
              </Heading>
              <Text fontSize="xl">
                A fair price in seconds, mechanics you can trust, day service at
                your door
              </Text>
              <Box w="full">
                <Text color="red.500" mb={2}>
                  Buying a Used Car?
                </Text>
                <Flex gap="1rem">
                  <Input
                    placeholder="Enter Car VIN"
                    // bg="white"
                    color="white"
                    borderRadius="12rem"
                  />
                  <Button
                    borderRadius="12rem"
                    bgColor="white"
                    padding="1rem"
                    fontSize="sm"
                    fontWeight={400}
                    color="black"
                  >
                    Search VIN
                  </Button>
                </Flex>
              </Box>
              <HStack spacing={8}>
                <VStack align="flex-start">
                  <Text>1000+ Google Reviews</Text>
                  <HStack>
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="gray.300" />
                    <Text>4.5</Text>
                  </HStack>
                </VStack>
                <VStack align="flex-start">
                  <Text>1300+ Customer Reviews</Text>
                  <HStack>
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="gray.300" />
                    <Text>4.5</Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
            {/* Right side image and icons */}
            <Box>
              <Image src={heroImage} alt="Mechanic with tools" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;

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
  Hide,
  Show,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Image from "next/image";
import heroImage from "../assets/heroImage.webp";
import Nav from "./Nav";
function Hero() {
  return (
    <Box color="whiteText" height={{ base: "fit-content", xl: "100vh" }}>
      <Flex
        flexDirection="column"
        zIndex={1}
        height="90%"
        bg="primaryBlue"
        direction={{ base: "column", xl: "row" }}
        alignItems="center"
        // clipPath={{
        //   base: "none",
        //   xl: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 90%, 10% 80%, 20% 75%, 30% 70%, 40% 65%, 50% 60%, 60% 65%, 70% 70%, 80% 75%, 90% 80%, 100% 90%, 100% 100%)",
        // }}
        position="relative"
      >
        <Box display={{base:'none',xl:'flex', dxl:'none'}} >
          <svg
            viewBox="0 0 1440 320"
            style={{
              position: "absolute",
              bottom: "-15%",
              left: 0,
              width: "100%",
              height: "auto",
              zIndex: "-10",
            }}
          >
            <path
              fill="white"
              d="M0,128L30,138.7C60,149,120,171,180,170.7C240,171,300,149,360,144C420,139,480,149,540,160C600,171,660,181,720,170.7C780,160,840,128,900,117.3C960,107,1020,117,1080,128C1140,139,1200,149,1260,160C1320,171,1380,181,1410,186.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
            ></path>
          </svg>
        </Box>
        <Box display={{base:'none',xl:'none', dxl:'flex'}}>
          <svg
            viewBox="0 0 1440 320"
            style={{
              position: "absolute",
              bottom: "-23%",
              left: 0,
              width: "100%",
              height: "auto",
              zIndex: "-10",
            }}
          >
            <path
              fill="white"
              d="M0,128L30,138.7C60,149,120,171,180,170.7C240,171,300,149,360,144C420,139,480,149,540,160C600,171,660,181,720,170.7C780,160,840,128,900,117.3C960,107,1020,117,1080,128C1140,139,1200,149,1260,160C1320,171,1380,181,1410,186.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
            ></path>
          </svg>
        </Box>
        <Nav />
        <Flex
          zIndex={10}
          flexDirection={{ base: "column", xl: "row" }}
          padding={{
            base: "0.5rem 0.5rem",
            sm: "0.75rem 2rem",
            md: "1rem 4rem",
            lg: "1rem 4rem",
          }}
          height="75%"
          width="100%"
          alignItems="center"
          justifyContent="space-around"
        >
          {/* Left side content */}
          <VStack
            align="flex-start"
            spacing={6}
            width={{ base: "100%", xl: "55%" }}
            // mb={{ base: 8, lg: 0 }}
          >
            <Heading as="h1" size={{ base: "md", md: "lg", xl: "2xl" }}>
              Car Repair & Servicing Made Easy
            </Heading>
            <Text fontSize={{ base: "sm", md: "md", xl: "xl" }}>
              A fair price in seconds, mechanics you can trust, day service at
              your door
            </Text>
            <Flex w="full" flexDir="column" gap=".5rem">
              <Text color="white" mb={2}>
                Buying a Used Car?
              </Text>
              <Flex gap="1rem" alignItems="center">
                <Input
                  placeholder="4Y1SL65848Z411439"
                  _placeholder={{ color: "#a3a3a3" }}
                  // bg="white"
                  color="white"
                  padding="1.5rem 2.5rem"
                  borderRadius="12rem"
                  borderColor="backgroundWhite"
                  focusBorderColor="white"
                />
                <Button
                  borderRadius="12rem"
                  bgColor="white"
                  padding="1rem 2.5rem"
                  fontSize="sm"
                  fontWeight={400}
                  color="black"
                  _hover={{
                    bgColor: "gray.300",
                  }}
                >
                  Search VIN
                </Button>
              </Flex>
            </Flex>
            <Hide below="lg">
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
            </Hide>
          </VStack>
          {/* Right side image and icons */}
          <Box mt={{ base: "1rem", lg: "none" }}>
            <Image src={heroImage} alt="Mechanic with tools" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Hero;

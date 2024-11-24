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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  IconButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Image from "next/image";
import heroImage from "../assets/heroImage.webp";
import heroImageSmall from "../assets/heroImageSmall.webp";

import modalImage from "../assets/modalImage.webp";
import Nav from "./Nav";
import { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import axios from "axios";

interface Engine {
  configurationCylinder: string;
  manufacturerEngineCode: string;
}

interface Transmission {
  name: string;
  transmissionType: string;
}

interface VehicleData {
  make: string;
  model: string;
  year: number;
  engine: Engine;
  transmission: Transmission;
  driveWheels: string;
  vehicleType: string;
}
function Hero() {
  const [vincode, setVincode] = useState("");
  const [loading, setLoading] = useState(false);
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async () => {
    if (!vincode) return;

    setLoading(true);
    setVehicleData(null);
    try {
      const response = await axios.get(
        `https://autoland-admin-backend.onrender.com/api/check/vin/${vincode}`
      );
      setVehicleData(response.data); // Update to use response.data
      setIsModalOpen(true);
      console.log(response.data); // Update to log response.data
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      color="whiteText"
      height={{ base: "fit-content", xl: "120vh", dxl: "100vh" }}
    >
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
        {/* <Box display={{ base: "none", xl: "flex", dxl: "none" }}>
          <svg
            viewBox="0 0 1440 320"
            style={{
              position: "absolute",
              bottom: "-19%",
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
        <Box display={{ base: "none", myxl: "none", dxl: "flex" }}>
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
        <Box display={{ base: "none", myxl: "flex", dxl: "none" }}>
          <svg
            viewBox="0 0 1440 320"
            style={{
              position: "absolute",
              bottom: "-30%",
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
        </Box> */}
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
          height="70%"
          width="100%"
          alignItems="center"
          justifyContent="space-around"
        >
          {/* Left side content */}
          <VStack
            align="flex-start"
            spacing={6}
            mt={{ base: "2rem", myxl: "3rem" }}
            width={{ base: "100%", xl: "55%" }}
            // mb={{ base: 8, lg: 0 }}
          >
            <Heading
              as="h1"
              size={{ base: "sm", md: "lg", xl: "xl", dxl: "2xl" }}
            >
              Car Repair & Servicing <br /> Made Easy
            </Heading>
            <Text fontSize={{ base: "xs", md: "md", dxl: "xl" }}>
              Get the best price, reliable mechanics you can trust, <br /> and
              extra care that your car deserves
            </Text>
            <Flex w="full" flexDir="column" gap=".5rem">
              <Text color="white" mb={2}>
                Buying a Used Car?
              </Text>
              <Flex gap="1rem" alignItems="center">
                <FormControl isRequired>
                  <Input
                    placeholder="4Y1SL65848Z411439"
                    _placeholder={{ color: "#a3a3a3" }}
                    // bg="white"
                    color="white"
                    padding="1.5rem 2.5rem"
                    borderRadius="12rem"
                    borderColor="backgroundWhite"
                    focusBorderColor="white"
                    value={vincode}
                    onChange={(e) => setVincode(e.target.value)}
                  />
                </FormControl>
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
                  isLoading={loading}
                  onClick={handleSearch}
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
          <Box
            display={{ base: "none", dxl: "block" }}
            mt={{ base: "1rem", xl: "2rem" }}
          >
            <Image src={heroImage} alt="Mechanic with tools" />
          </Box>
          <Box
            display={{ base: "block", dxl: "none" }}
            mx="auto"
            mt={{ base: "1rem", xl: "2rem" }}
          >
            <Image src={heroImageSmall} alt="Mechanic with tools" />
          </Box>
        </Flex>
      </Flex>

      <Flex
        zIndex={5000}
        gap={3}
        position="fixed"
        bottom={5}
        right={2}
        flexDirection="column"
      >
        <IconButton
          as="a"
          href="tel:+2348115004000"
          borderRadius="50%"
          boxShadow="md"
          colorScheme="blackAlpha"
          aria-label="Call Us"
          size="lg"
          icon={<FaPhone size="1.5rem" color="#60D669" />}
        />
        <IconButton
          as="a"
          href="https://wa.me/+2348115004000"
          borderRadius="50%"
          boxShadow="md"
          colorScheme="blackAlpha"
          aria-label="contact Us"
          size="lg"
          icon={<FaWhatsapp size="1.5rem" color="#60D669" />}
        />
      </Flex>

      {/* Modal for displaying vehicle data */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent bgColor="backgroundWhite" color="text">
          <ModalHeader m="0 auto">
            <Image src={modalImage} alt="vehicle details" />
            <Flex flexDirection="column">
              <Text
                textTransform="uppercase"
                textAlign="center"
                my=".7rem"
                color="secondaryBlue"
                fontWeight={600}
                fontSize="lg"
              >
                {vehicleData?.year} {vehicleData?.make} {vehicleData?.model}
              </Text>
              <Text textAlign="center" fontWeight={500} fontSize="sm">
                {vincode}
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {vehicleData ? (
              <VStack spacing={4} align="flex-start">
                <Text fontWeight={600}>Engine:</Text>
                <Text borderRadius="md" p={4} width="full" bgColor="#F8F8F8">
                  {vehicleData?.engine?.configurationCylinder} (
                  {vehicleData?.engine?.manufacturerEngineCode})
                </Text>
                <Text fontWeight={600}>Make:</Text>
                <Text borderRadius="md" p={4} width="full" bgColor="#F8F8F8">
                  {" "}
                  {vehicleData?.make}
                </Text>
                <Text fontWeight={600}>Model:</Text>
                <Text borderRadius="md" p={4} width="full" bgColor="#F8F8F8">
                  {" "}
                  {vehicleData?.model}
                </Text>
                <Text fontWeight={600}>Year:</Text>
                <Text borderRadius="md" p={4} width="full" bgColor="#F8F8F8">
                  {" "}
                  {vehicleData?.year}
                </Text>
                <Text fontWeight={600}>Transmission:</Text>
                <Text borderRadius="md" p={4} width="full" bgColor="#F8F8F8">
                  {vehicleData?.transmission?.name} (
                  {vehicleData?.transmission?.transmissionType})
                </Text>
                <Text fontWeight={600}>Drive Wheels:</Text>
                <Text borderRadius="md" p={4} width="full" bgColor="#F8F8F8">
                  {vehicleData?.driveWheels}
                </Text>
                <Text fontWeight={600}> Vehicle Type:</Text>
                <Text borderRadius="md" p={4} width="full" bgColor="#F8F8F8">
                  {vehicleData?.vehicleType}
                </Text>
              </VStack>
            ) : (
              <Text>No data found for this VIN.</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="primaryBlue"
              color="white"
              colorScheme="blue"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Hero;

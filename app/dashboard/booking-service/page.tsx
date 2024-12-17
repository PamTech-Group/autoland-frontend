/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VStack,
  Flex,
  Icon,
  useDisclosure,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import {
  FaCar,
  FaWrench,
  FaTools,
  FaCog,
  FaBatteryFull,
  FaAlignCenter,
} from "react-icons/fa";
import Sidebar from "@/app/components/SideBar";
import { motion } from "framer-motion"; // Animation library
import service1 from "../../assets/wedo1.webp";
import service2 from "../../assets/wedo2.webp";

import service3 from "../../assets/wedo3.webp";

import service4 from "../../assets/wedo4.webp";

import service5 from "../../assets/wedo5.webp";
import service6 from "../../assets/wedo6.webp";

import styled from "@emotion/styled";

// Styled GlassCard with modern effects
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
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

const MotionBox = motion(GlassCard as any);

const servicesData = [
  {
    title: "Computerised Auto Repair & Services",
    description:
      "At AutoLand, we specialize in computerized auto repair and services for precise diagnostics. Our advanced technology quickly identifies issues, enhancing your vehicle's performance and safety. Trust our skilled technicians to ensure your car is in expert hands, from diagnosis to final repair.",
    icon: FaCog,
    image: service1,
  },
  {
    title: "AC / Electrical Repairs",
    description:
      "At AutoLand, we take a detail-oriented approach to AC and electrical repairs, ensuring reliable vehicle function. Our services enhance comfort, improve safety, and boost efficiency. Using the latest technology and best practices, we deliver precise repairs. Trust our expertise to keep your car's systems in expert hands, from diagnosis to repair.",
    icon: FaBatteryFull,
    image: service2,
  },
  {
    title: "Mechanical Repair",
    description: `We focus on customer-centered mechanical repair services to keep your vehicle running smoothly. Our skilled technicians diagnose and resolve issues efficiently, enhancing performance and safety. Using advanced tools and techniques, we deliver reliable repairs every time. Trust our expertise to handle your car’s mechanical needs with precision and care.`,
    icon: FaWrench,
    image: service3,
  },
  {
    title: "Body Shop / Vehicle Upgrade",
    description: `Our state-of-the-art customer-centered body shop services for top-quality care and upgrades. Our solutions enhance aesthetics, improve functionality, and restore your vehicle. Using cutting-edge techniques and industry best practices, we ensure a flawless finish.`,
    icon: FaTools,
    image: service4,
  },
  {
    title: "Wheel Alignment & Balancing",
    description: `At AutoLand, we specialize in precision wheel alignment and balancing to ensure a smooth and safe ride. Our services enhance handling, extend tire life, and improve fuel efficiency. Trust us for accurate adjustments, ensuring your wheels are perfectly aligned every time.`,
    icon: FaAlignCenter,
    image: service5,
  },
  {
    title: "Maintenance & Lube Check",
    description:
      "Regular maintenance and lube checks are essential for your vehicle's longevity. Our skilled technicians perform thorough inspections and ensure that all fluids are topped up and components are in optimal condition. Trust us to keep your vehicle running smoothly.",
    icon: FaCar,
    image: service6,
  },
];

export default function BookingService() {
  const { isOpen: isDrawerOpen, onClose: onDrawerClose } = useDisclosure();

  return (
    <Flex>
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
        <Container maxW="container.2xl" py={8} px={{ base: 4, lg: 12 }}>
          {/* Header Section */}
          <Flex flexDir="column" gap={4} mb={8}>
            <Heading size="sm" color="white">
              Our Premium Services
            </Heading>
            <Text color="gray.400" maxW="3xl" fontSize="xs">
              {`Experience top-tier automotive services tailored to enhance your
            vehicle's performance, safety, and aesthetics.`}
            </Text>
          </Flex>

          {/* Service Cards */}
          <SimpleGrid
            placeItems="center"
            columns={{ base: 1, md: 2, xl: 3 }}
            spacing={8}
          >
            {servicesData.map((service, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Flex direction="column" h="100%">
                  {/* Service Image */}
                  <Box
                    h="250px"
                    w="100%"
                    bg="gray.800"
                    borderTopRadius="15px"
                    overflow="hidden"
                  >
                    <Image
                      src={service.image.src}
                      alt={service.title}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </Box>

                  {/* Service Content */}
                  <VStack
                    spacing={4}
                    p={6}
                    align="start"
                    bg="rgba(26, 31, 55, 0.9)"
                    borderBottomRadius="15px"
                    h="100%"
                  >
                    <Flex align="center" gap={3}>
                      <Icon as={service.icon} w={8} h={8} color="blue.400" />
                      <Heading size="sm" color="white">
                        {service.title}
                      </Heading>
                    </Flex>
                    <Text color="gray.400" fontSize="sm" lineHeight="1.6">
                      {service.description}
                    </Text>
                    <Button
                      mt="auto"
                      colorScheme="blue"
                      size="sm"
                      onClick={() => alert(`Getting ${service.title} service`)}
                    >
                      Learn More
                    </Button>
                  </VStack>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </MainContent>
    </Flex>
  );
}

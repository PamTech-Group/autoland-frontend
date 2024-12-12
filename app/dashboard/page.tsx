/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  SimpleGrid,
  Icon,
  Flex,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaTools,
  FaWrench,
  FaCog,
  FaCarBattery,
  FaAlignCenter,
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaCreditCard,
  FaBell,
  FaUserCog,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import styled from "@emotion/styled";
import { FaCarSide, FaNetworkWired } from "react-icons/fa6";

const MotionBox = motion(Box as any);
const MotionCard = motion(Card as any);

const Sidebar = styled(Box)`
  background: white;
  height: 100vh;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 1rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;
const GradientBackground = styled(Box)`
  background: linear-gradient(135deg, #00204f 0%, #001529 100%);
  min-height: 100vh;
  margin-left: 250px;
  width: 100%;
`;

const GlassCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;
// const MainContent = styled(Box)`
//   margin-left: 250px;
//   padding: 2rem;
//   min-height: 100vh;
// `;

const SidebarItem = ({ icon, label }: { icon: any; label: string }) => (
  <HStack
    cursor="pointer"
    p={3}
    borderRadius="md"
    _hover={{
      bg: "#00204f",
      color: "white",
    }}
    color="#00204f"
    transition="all 0.3s ease"
  >
    <Icon as={icon} />
    <Text fontWeight="medium">{label}</Text>
  </HStack>
);

const serviceCards = [
  {
    title: "Computerised Auto Diagnosis",
    icon: FaCog,
    description: "Advanced diagnostic scanning and troubleshooting",
  },
  {
    title: "Maintenance & Lube Check",
    icon: FaTools,
    description: "Regular maintenance and fluid checks",
  },
  {
    title: "Body Shop & Upgrade",
    icon: FaCar,
    description: "Body repairs and vehicle upgrades",
  },
  {
    title: "Mechanical Repairs",
    icon: FaWrench,
    description: "Complete mechanical repair services",
  },
  {
    title: "AC & Electrical Repairs",
    icon: FaCarBattery,
    description: "Electrical system and AC service",
  },
  {
    title: "Wheel Alignment & Balancing",
    icon: FaAlignCenter,
    description: "Precision wheel services",
  },
];

const SpecialistSection = () => (
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
    {["Repairs", "Services", "Bodywork"].map((type) => (
      <MotionCard
        key={type}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        bg="white"
        shadow="sm"
      >
        <CardBody>
          <Flex align="center" justify="center" direction="column">
            <Icon as={FaCar} w={8} h={8} mb={2} color="#00204f" />
            <Text fontWeight="bold" color="#00204f">
              {type}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Car Model Specialist
            </Text>
          </Flex>
        </CardBody>
      </MotionCard>
    ))}
  </SimpleGrid>
);

export default function Dashboard() {
  return (
    <Flex>
      <Sidebar>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="md" color="#00204f" mb={4}>
              Autoland
            </Heading>
          </Box>

          <VStack align="stretch" spacing={2}>
            <SidebarItem icon={FaHome} label="Dashboard" />
            <SidebarItem icon={FaCalendarAlt} label="Appointments" />
            <SidebarItem icon={FaHistory} label="Service History" />
            <SidebarItem icon={FaCreditCard} label="Payments" />
            <SidebarItem icon={FaBell} label="Notifications" />
            <SidebarItem icon={FaCarSide} label="Car Management" />
            <SidebarItem icon={FaNetworkWired} label="Plans" />
          </VStack>

          <VStack align="stretch" spacing={2}>
            <SidebarItem icon={FaUserCog} label="Settings" />
            <SidebarItem icon={FaQuestionCircle} label="Help & Support" />
            <SidebarItem icon={FaSignOutAlt} label="Logout" />
          </VStack>
        </VStack>
      </Sidebar>

      {/* <MainContent>
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            mb={8}
          >
            <Heading color="#00204f" mb={2}>
              Hello Vincent,
            </Heading>
            <Text color="gray.600">
              What would you like to fix on your car today?
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            mb={12}
          >
            <Card p={6} mb={8} bg="white" shadow="sm">
              <Flex justify="space-between" align="center">
                <Text color="#00204f" fontSize="lg">
                  Schedule Maintenance or Repair at your Convenience
                </Text>
                <Button
                  bg="#00204f"
                  color="white"
                  size="lg"
                  rightIcon={<Icon as={FaWrench} />}
                  as="a"
                  href="/booking"
                  _hover={{
                    bg: "#001529",
                  }}
                >
                  Book Appointment
                </Button>
              </Flex>
            </Card>

            <Heading size="md" color="#00204f" mb={4}>
              Technician Specialist
            </Heading>
            <SpecialistSection />

            <Heading size="md" color="#00204f" mb={4}>
              Car Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {serviceCards.map((service, index) => (
                <MotionCard
                  key={service.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  bg="white"
                  shadow="sm"
                >
                  <CardBody>
                    <Flex align="center" mb={4}>
                      <Icon as={service.icon} w={8} h={8} color="#00204f" />
                      <Text color="#00204f" fontWeight="bold" ml={3}>
                        {service.title}
                      </Text>
                    </Flex>
                    <Text color="gray.600" fontSize="sm">
                      {service.description}
                    </Text>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </MotionBox>
        </Container>
      </MainContent> */}
      <GradientBackground>
        <Container maxW="container.2xl" py={8} px={12}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            mb={8}
          >
            <Heading color="white" mb={2}>
              Hello Vincent,
            </Heading>
            <Text color="whiteAlpha.900">
              What would you like to fix on your car today?
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            mb={12}
          >
            <GlassCard p={6} mb={8}>
              <Flex justify="space-between" align="center">
                <Text color="white" fontSize="lg">
                  Schedule Maintenance or Repair at your Convenience
                </Text>
                <Button
                  colorScheme="blue"
                  size="sm"
                  rightIcon={<Icon as={FaWrench} />}
                  as="a"
                  href="/booking"
                >
                  Book Appointment
                </Button>
              </Flex>
            </GlassCard>

            <Heading size="md" color="white" mb={4}>
              Car Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {serviceCards.map((service, index) => (
                <MotionCard
                  key={service.title}
                  as={GlassCard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardBody>
                    <Flex align="center" mb={4}>
                      <Icon as={service.icon} w={8} h={8} color="white" />
                      <Text color="white" fontWeight="bold" ml={3}>
                        {service.title}
                      </Text>
                    </Flex>
                    <Text color="whiteAlpha.800" fontSize="sm">
                      {service.description}
                    </Text>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
            <Heading size="md" color="white" my={6} mb={4}>
              Technician Specialist
            </Heading>
            <SpecialistSection />
          </MotionBox>
        </Container>
      </GradientBackground>
    </Flex>
  );
}

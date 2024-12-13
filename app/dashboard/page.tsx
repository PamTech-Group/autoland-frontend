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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { motion } from "framer-motion";
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
  FaEllipsisH,
} from "react-icons/fa";
import styled from "@emotion/styled";
import { FaCarSide, FaNetworkWired } from "react-icons/fa6";
import { Image, Link } from "@chakra-ui/next-js";
import logo from "../assets/logo.webp";
// const MotionBox = motion(Box as any);
// const MotionCard = motion(Card as any);

const Sidebar = styled(Box)`
  background: #1a1f37;
  height: 100vh;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 1rem;
`;

const MainContent = styled(Box)`
  background: #111322;
  min-height: 100vh;
  margin-left: 250px;
  width: calc(100% - 250px);
  color: white;
`;

const GlassCard = styled(Card)`
  background: rgba(26, 31, 55, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) => (
  <HStack
    cursor="pointer"
    p={3}
    borderRadius="md"
    bg={active ? "rgba(255, 255, 255, 0.1)" : "transparent"}
    _hover={{
      bg: "rgba(255, 255, 255, 0.1)",
    }}
    color="white"
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

const statsData = [
  {
    label: "Total Services",
    value: "2,340",
    change: "+5%",
    icon: FaWrench,
  },
  {
    label: "Active Bookings",
    value: "15",
    change: "+10%",
    icon: FaCalendarAlt,
  },
  {
    label: "Customer Rating",
    value: "4.8",
    change: "+2%",
    icon: FaUserCog,
  },
];

export default function Dashboard() {
  const logoSize = useBreakpointValue({ base: 25, sm: 35 });

  return (
    <Flex>
      <Sidebar>
        <VStack spacing={8} align="stretch">
          <Box>
            <Link href="/">
              <Image src={logo} alt="Pamtech Logo" height={logoSize} />
            </Link>
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

      <MainContent>
        <Container maxW="container.2xl" py={8} px={12}>
          <Flex justify="space-between" align="center" mb={8}>
            <Box>
              <Heading size="lg" mb={2}>
                Welcome back, Vincent
              </Heading>
              <Text color="gray.400">
                Track your service requests and manage your vehicles
              </Text>
            </Box>
            <HStack spacing={4}>
              <IconButton
                aria-label="notifications"
                icon={<FaBell />}
                variant="ghost"
                color="white"
              />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="options"
                  icon={<FaEllipsisH />}
                  variant="ghost"
                  color="white"
                />
                <MenuList bg="#1a1f37">
                  <MenuItem>Profile Settings</MenuItem>
                  <MenuItem>Help Center</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
            {statsData.map((stat) => (
              <GlassCard key={stat.label}>
                <CardBody>
                  <Flex justify="space-between" align="center">
                    <Stat>
                      <StatLabel color="gray.400">{stat.label}</StatLabel>
                      <StatNumber fontSize="2xl">{stat.value}</StatNumber>
                      <StatHelpText color="green.400">
                        {stat.change} vs. last month
                      </StatHelpText>
                    </Stat>
                    <Icon as={stat.icon} w={8} h={8} color="blue.400" />
                  </Flex>
                </CardBody>
              </GlassCard>
            ))}
          </SimpleGrid>

          <GlassCard mb={8}>
            <CardBody>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="md">Recent Services</Heading>
                <Button variant="ghost" colorScheme="blue" size="sm">
                  View All
                </Button>
              </Flex>
              {/* Add recent services list here */}
            </CardBody>
          </GlassCard>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {serviceCards.map((service, index) => (
              <GlassCard
                key={service.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: `${index * 0.1}` }}
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
              </GlassCard>
            ))}
          </SimpleGrid>
        </Container>
      </MainContent>
    </Flex>
  );
}

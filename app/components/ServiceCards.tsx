"use client";

import { SimpleGrid, Card, CardBody, Icon, Text, Flex } from "@chakra-ui/react";
import {
  FaCar,
  FaTools,
  FaWrench,
  FaCog,
  FaCarBattery,
  FaAlignCenter,
} from "react-icons/fa";
import styled from "@emotion/styled";

const GlassCard = styled(Card)`
  background: rgba(26, 31, 55, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

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

export default function ServiceCards() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
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
            <Flex
              align="center"
              flexDirection={{ base: "column", md: "row" }}
              mb={4}
            >
              <Icon as={service.icon} w={8} h={8} color="white" />
              <Text
                color="white"
                textAlign={{ base: "left", md: "center" }}
                fontWeight="bold"
                ml={{ base: 0, md: 3 }}
                mt={{ base: 3, md: 0 }}
              >
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
  );
}

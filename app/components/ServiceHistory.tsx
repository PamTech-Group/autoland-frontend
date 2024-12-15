"use client";

import {
  Card,
  CardBody,
  Flex,
  Heading,
  Button,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
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

interface ServiceRecord {
  id: number;
  service: string;
  date: string;
  status: string;
  cost: string;
  vehicle: string;
}

interface ServiceHistoryProps {
  services: ServiceRecord[];
  onViewAll?: () => void;
}

export default function ServiceHistory({
  services,
  onViewAll,
}: ServiceHistoryProps) {
  return (
    <GlassCard mb={8}>
      <CardBody>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading size="sm">Services History</Heading>
          <Button
            variant="ghost"
            colorScheme="blue"
            size="sm"
            onClick={onViewAll}
          >
            View All
          </Button>
        </Flex>
        <VStack spacing={4} align="stretch">
          {services.map((service) => (
            <Flex
              key={service.id}
              justify="space-between"
              align="center"
              p={3}
              borderRadius="md"
              bg="rgba(255, 255, 255, 0.05)"
              _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
            >
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold">{service.service}</Text>
                <Text fontSize="sm" color="gray.400">
                  {service.vehicle}
                </Text>
              </VStack>
              <HStack spacing={4}>
                <Text fontSize="sm" color="gray.400">
                  {service.date}
                </Text>
                <Text
                  fontSize="sm"
                  color={
                    service.status === "Completed" ? "green.400" : "yellow.400"
                  }
                >
                  {service.status}
                </Text>
                <Text fontSize="sm" color="blue.400">
                  {service.cost}
                </Text>
              </HStack>
            </Flex>
          ))}
        </VStack>
      </CardBody>
    </GlassCard>
  );
}

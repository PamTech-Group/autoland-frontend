"use client";

import {
  Card,
  CardBody,
  Flex,
  Heading,
  Button,
  VStack,
  Text,
  Grid,
  Box,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

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
  showViewAll?: boolean;
}

const ScrollContainer = styled(Box)`
  width: 100%;
  overflow-x: auto;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 6px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
`;

const TableContainer = styled(Box)`
  min-width: 800px; // Minimum width to prevent squishing
`;

const TableHeader = styled(Grid)`
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5rem;
`;

const ServiceRow = styled(Grid)`
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  gap: 1rem;
  padding: 1rem;
  border-radius: md;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const HeaderText = styled(Text)`
  color: gray.400;
  font-size: sm;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export default function ServiceHistory({
  services,
  showViewAll,
}: ServiceHistoryProps) {
  const router = useRouter();
  return (
    <GlassCard mb={8}>
      <CardBody>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading size="sm">Services History</Heading>
          {showViewAll && (
            <Button
              variant="ghost"
              colorScheme="blue"
              size="sm"
              onClick={() => router.push("/dashboard/service-history")}
            >
              View All
            </Button>
          )}
        </Flex>

        <ScrollContainer>
          <TableContainer>
            <VStack spacing={2} align="stretch">
              <TableHeader>
                <HeaderText>Service Type</HeaderText>
                <HeaderText>Date</HeaderText>
                <HeaderText>Status</HeaderText>
                <HeaderText>Cost</HeaderText>
                <HeaderText>Vehicle</HeaderText>
              </TableHeader>

              {services.map((service) => (
                <ServiceRow key={service.id}>
                  <Text fontWeight="bold">{service.service}</Text>
                  <Text fontSize="sm" color="gray.400">
                    {service.date}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={
                      service.status === "Completed"
                        ? "green.400"
                        : "yellow.400"
                    }
                  >
                    {service.status}
                  </Text>
                  <Text fontSize="sm" color="blue.400">
                    {service.cost}
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    {service.vehicle}
                  </Text>
                </ServiceRow>
              ))}
            </VStack>
          </TableContainer>
        </ScrollContainer>
      </CardBody>
    </GlassCard>
  );
}

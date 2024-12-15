"use client";

import {
  SimpleGrid,
  Card,
  CardBody,
  Flex,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ComponentType } from "react";

const GlassCard = styled(Card)`
  background: rgba(26, 31, 55, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

interface StatData {
  label: string;
  value: string;
  change: string;
  icon: ComponentType;
}

interface StatsGridProps {
  stats: StatData[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
      {stats.map((stat) => (
        <GlassCard key={stat.label}>
          <CardBody>
            <Flex justify="space-between" align="center">
              <Stat>
                <StatLabel color="gray.400">{stat.label}</StatLabel>
                <StatNumber fontSize="xl">{stat.value}</StatNumber>
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
  );
}

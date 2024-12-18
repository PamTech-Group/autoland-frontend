/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Tag,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon, CalendarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FaCar, FaNairaSign, FaWrench } from "react-icons/fa6";
import { useRouter } from "next/navigation";

// Service Record Interface
interface ServiceRecord {
  id: number;
  service: string;
  date: string;
  status: string;
  cost: string;
  vehicle: string;
  demurrage: string;
  details?: {
    [key: string]: {
      description: string;
      cost: string;
    };
  };
}

// Styled Components
const GlassCard = styled(Card)`
  background: rgba(26, 31, 55, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ScrollContainer = styled(Box)`
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
`;

const TableContainer = styled(Box)`
  min-width: 800px;
`;

const TableHeader = styled(Grid)`
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr 1fr;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5rem;
`;

const ServiceRow = styled(Grid)`
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr 1fr;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// Sample Services Data

interface ServiceHistoryProps {
  services: ServiceRecord[];
  showViewAll?: boolean;
}
export default function ServiceHistoryWithModal({
  services,
  showViewAll,
}: ServiceHistoryProps) {
  const [selectedService, setSelectedService] = useState<ServiceRecord | null>(
    null
  );
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleServiceClick = (service: ServiceRecord) => {
    setSelectedService(service);
    onOpen();
  };

  const getStatusIcon = (status: string) => {
    return status === "Completed" ? (
      <CheckCircleIcon color="green.500" />
    ) : (
      <WarningIcon color="yellow.500" />
    );
  };

  const MotionModalContent = motion(ModalContent as any);

  return (
    <>
      <GlassCard mb={8}>
        <CardBody>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="xs">Services History</Heading>
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
                  {[
                    "Service Type",
                    "Vehicle",
                    "Date",
                    "Cost",
                    "Status",
                    "Demurrage",
                  ].map((header) => (
                    <Text
                      key={header}
                      color="gray.400"
                      fontSize="0.8rem"
                      fontWeight="500"
                      textTransform="uppercase"
                    >
                      {header}
                    </Text>
                  ))}
                </TableHeader>

                {services.map((service) => (
                  <ServiceRow
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                  >
                    <Text fontWeight="bold">{service.service}</Text>
                    <Text color="gray.400">{service.vehicle}</Text>
                    <Text color="gray.400">{service.date}</Text>
                    <Text color="blue.400">{service.cost}</Text>
                    <Flex align="center" gap={2}>
                      {getStatusIcon(service.status)}
                      <Text
                        color={
                          service.status === "Completed"
                            ? "green.400"
                            : "yellow.400"
                        }
                      >
                        {service.status}
                      </Text>
                    </Flex>
                    <Text color="blue.400">{service.demurrage}</Text>
                  </ServiceRow>
                ))}
              </VStack>
            </TableContainer>
          </ScrollContainer>
        </CardBody>
      </GlassCard>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <MotionModalContent
          bg="rgba(26, 31, 55, 0.9)"
          color="white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {selectedService && (
            <>
              <ModalHeader>
                <Flex align="center" gap={3}>
                  <FaWrench />
                  <Text>{selectedService.service}</Text>
                </Flex>
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <VStack spacing={4} align="stretch">
                  {/* Service Overview */}
                  <Flex justify="space-between">
                    <Flex align="center" gap={2}>
                      <FaCar />
                      <Text fontWeight="bold">{selectedService.vehicle}</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <CalendarIcon />
                      <Text>{selectedService.date}</Text>
                    </Flex>
                  </Flex>

                  <Divider borderColor="whiteAlpha.300" />

                  {/* Detailed Service Breakdown */}
                  {selectedService.details &&
                    Object.entries(selectedService.details).map(
                      ([service, detail]) => (
                        <Flex
                          key={service}
                          justify="space-between"
                          align="center"
                          bg="whiteAlpha.100"
                          p={3}
                          borderRadius="md"
                        >
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="bold">{service}</Text>
                            <Text fontSize="sm" color="whiteAlpha.700">
                              {detail.description}
                            </Text>
                          </VStack>
                          <Tag colorScheme="blue" size="lg">
                            {detail.cost}
                          </Tag>
                        </Flex>
                      )
                    )}

                  {/* Total Cost */}
                  <Flex justify="end" align="center" gap={2} mt={4}>
                    <FaNairaSign />
                    <Text fontSize="xl" fontWeight="bold" color="green.400">
                      Total: {selectedService.cost}
                    </Text>
                  </Flex>
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" colorScheme="whiteAlpha">
                  Print Invoice
                </Button>
              </ModalFooter>
            </>
          )}
        </MotionModalContent>
      </Modal>
    </>
  );
}

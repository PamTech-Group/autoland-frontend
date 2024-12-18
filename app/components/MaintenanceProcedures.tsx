import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Card,
  CardBody,
  Icon,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  WarningIcon,
  InfoIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

// Maintenance procedures data (same as your original list)
const maintenanceProcedures = [
  {
    id: "m3",
    type: "Oil Change & Filter",
    dueDate: "3,000 miles",
    status: "Upcoming",
  },
  {
    id: "m4",
    type: "Wiper Blades (check)",
    dueDate: "3,000 miles",
    status: "Upcoming",
  },
  {
    id: "m5",
    type: "Tire Rotation",
    dueDate: "6,000 miles",
    status: "Upcoming",
  },
  {
    id: "m6",
    type: "Front + Rear Disc Brakes",
    dueDate: "12,000 miles",
    status: "Upcoming",
  },
  {
    id: "m7",
    type: "Rear Drum Adjustment",
    dueDate: "12,000 miles",
    status: "Upcoming",
  },
  {
    id: "m8",
    type: "Charging System Battery",
    dueDate: "12,000 miles",
    status: "Upcoming",
  },
  {
    id: "m9",
    type: "PVC Value (check)",
    dueDate: "12,000 miles",
    status: "Upcoming",
  },
  {
    id: "m10",
    type: "Fuel Filter",
    dueDate: "15,000 miles",
    status: "Upcoming",
  },
  {
    id: "m11",
    type: "Air Filter (check)",
    dueDate: "15,000 miles",
    status: "Upcoming",
  },
  {
    id: "m12",
    type: "Cabin Air Filter",
    dueDate: "15,000 miles",
    status: "Upcoming",
  },
  {
    id: "m13",
    type: "Wheel Alignment",
    dueDate: "25,000 miles",
    status: "Upcoming",
  },
  {
    id: "m14",
    type: "Air Conditioning Test",
    dueDate: "25,000 miles",
    status: "Upcoming",
  },
  {
    id: "m15",
    type: "Fuel Injection Service",
    dueDate: "25,000 miles",
    status: "Upcoming",
  },
  {
    id: "m16",
    type: "Transmission Service",
    dueDate: "30,000 miles",
    status: "Upcoming",
  },
  {
    id: "m17",
    type: "Cooling System Flush",
    dueDate: "30,000 miles",
    status: "Upcoming",
  },
  {
    id: "m18",
    type: "Brake Fluid Flush",
    dueDate: "30,000 miles",
    status: "Upcoming",
  },
  {
    id: "m19",
    type: "Axles/Rear Service",
    dueDate: "40,000 miles",
    status: "Upcoming",
  },
  {
    id: "m20",
    type: "Power Steering Flush",
    dueDate: "50,000 miles",
    status: "Upcoming",
  },
  {
    id: "m21",
    type: "Tune-Up",
    dueDate: "50,000/70,000 miles",
    status: "Upcoming",
  },
  {
    id: "m22",
    type: "Belt + Hoses (check)",
    dueDate: "75,000 miles",
    status: "Upcoming",
  },
  {
    id: "m23",
    type: "Timing Belt",
    dueDate: "60,000/100,000 miles",
    status: "Upcoming",
  },
];

const MaintenanceProceduresList: React.FC = () => {
  const [expandedProcedures, setExpandedProcedures] = useState<string[]>([]);

  // Group procedures by miles
  const groupedProcedures = maintenanceProcedures.reduce((acc, procedure) => {
    if (!acc[procedure.dueDate]) {
      acc[procedure.dueDate] = [];
    }
    acc[procedure.dueDate].push(procedure);
    return acc;
  }, {} as Record<string, typeof maintenanceProcedures>);

  // Background and hover colors
  const cardBg = useColorModeValue("gray.50", "rgba(26, 31, 55, 0.7)");

  const toggleProcedureExpand = (dueDate: string) => {
    setExpandedProcedures((prev) =>
      prev.includes(dueDate)
        ? prev.filter((date) => date !== dueDate)
        : [...prev, dueDate]
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircleIcon color="green.500" />;
      case "Upcoming":
        return <WarningIcon color="yellow.500" />;
      default:
        return <InfoIcon color="blue.500" />;
    }
  };

  return (
    <Card
      bg={cardBg}
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
    >
      <CardBody>
        <VStack align="stretch" spacing={6}>
          <Heading size="sm" color="inherit">
            Maintenance Procedures
          </Heading>

          {Object.entries(groupedProcedures)
            .sort((a, b) => {
              // Sort by numeric part of the miles
              const getMiles = (dueDate: string) =>
                parseInt(dueDate.split(",")[0].replace(/\D/g, ""), 10);
              return getMiles(a[0]) - getMiles(b[0]);
            })
            .map(([dueDate, procedures]) => (
              <Box key={dueDate}>
                <Flex
                  onClick={() => toggleProcedureExpand(dueDate)}
                  cursor="pointer"
                  bg="whiteAlpha.100"
                  p={3}
                  borderRadius="md"
                  alignItems="center"
                  justifyContent="space-between"
                  _hover={{
                    bg: "whiteAlpha.200",
                  }}
                >
                  <Flex alignItems="center">
                    <Text fontWeight="bold" mr={3}>
                      {dueDate} Miles
                    </Text>
                    <Tooltip
                      label={`${procedures.length} procedures at this interval`}
                    >
                      <Box
                        bg="whiteAlpha.300"
                        px={2}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        {procedures.length}
                      </Box>
                    </Tooltip>
                  </Flex>
                  <Icon
                    as={
                      expandedProcedures.includes(dueDate)
                        ? ChevronUpIcon
                        : ChevronDownIcon
                    }
                  />
                </Flex>

                {expandedProcedures.includes(dueDate) && (
                  <VStack
                    spacing={2}
                    mt={2}
                    bg="whiteAlpha.50"
                    p={3}
                    borderRadius="md"
                  >
                    {procedures.map((procedure) => (
                      <Flex
                        key={procedure.id}
                        w="full"
                        justify="space-between"
                        align="center"
                        p={2}
                        bg="whiteAlpha.100"
                        borderRadius="md"
                      >
                        <Flex alignItems="center">
                          {getStatusIcon(procedure.status)}
                          <Text ml={3} color="inherit">
                            {procedure.type}
                          </Text>
                        </Flex>
                      </Flex>
                    ))}
                  </VStack>
                )}
              </Box>
            ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default MaintenanceProceduresList;

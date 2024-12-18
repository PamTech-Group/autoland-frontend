import {
  VStack,
  Flex,
  HStack,
  Heading,
  Badge,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaCar, FaCog, FaEdit } from "react-icons/fa";
import MaintenanceScheduleCard from "./MaintenanceScheduleCard";
interface MaintenanceSchedule {
  id: string;
  type: string;
  dueDate: string;
  status: "Upcoming" | "Overdue" | "Completed";
}
interface CarDetails {
  id: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  vinNumber: string;
  plateNumber: string;
  lastService: string;
  status: "Active" | "In Service" | "Inactive";
  mileage: string;
  fuelType: string;
  transmission: string;
  engineSize: string;
  insuranceExpiry: string;
  maintenanceSchedule: MaintenanceSchedule[];
}

const CarDetailsCard = ({
  car,
  onEdit,
}: {
  car: CarDetails;
  onEdit: (car: CarDetails) => void;
}) => (
  <VStack spacing={6} align="stretch" width="100%">
    <Flex justify="space-between" align="center">
      <HStack>
        <FaCar />
        <Heading size="md" color="white">
          {car.brand} {car.model}
        </Heading>
      </HStack>
      <Badge
        colorScheme={
          car.status === "Active"
            ? "green"
            : car.status === "In Service"
            ? "yellow"
            : "red"
        }
        px={3}
        py={1}
        borderRadius="full"
      >
        {car.status}
      </Badge>
    </Flex>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      <Text color="gray.400">Year: {car.year}</Text>
      <Text color="gray.400">Color: {car.color}</Text>
      <Text color="gray.400">VIN Number: {car.vinNumber}</Text>
      <Text color="gray.400">Plate Number: {car.plateNumber}</Text>
      <Text color="gray.400">Last Service: {car.lastService}</Text>
    </SimpleGrid>
    <MaintenanceScheduleCard schedules={car.maintenanceSchedule} />
    <Flex justify="space-between">
      <Button
        leftIcon={<FaCog />}
        variant="outline"
        colorScheme="blue"
        size="sm"
      >
        View Service History
      </Button>
      <Button
        leftIcon={<FaEdit />}
        variant="solid"
        colorScheme="blue"
        size="sm"
        onClick={() => onEdit(car)}
      >
        Edit Details
      </Button>
    </Flex>
  </VStack>
);

export default CarDetailsCard;

/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  HStack,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
  Badge,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import { FaPlus, FaCar, FaCog, FaEdit, FaBars } from "react-icons/fa";
import styled from "@emotion/styled";
import Sidebar from "@/app/components/SideBar";
import { Image, Link } from "@chakra-ui/next-js";
import logo from "@/app/assets/logo.webp";
import { useState } from "react";

const GlassCard = styled(Card)`
  background: rgba(26, 31, 55, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
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

const GlassModal = styled(ModalContent)`
  background: rgba(26, 31, 55, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

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

// Enhanced sample data
const sampleCars: CarDetails[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Camry",
    year: "2020",
    color: "Silver",
    vinNumber: "1HGCM82633A123456",
    plateNumber: "ABC-123",
    lastService: "2024-02-15",
    status: "Active",
    mileage: "45,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engineSize: "2.5L",
    insuranceExpiry: "2024-12-31",
    maintenanceSchedule: [
      {
        id: "m1",
        type: "Oil Change",
        dueDate: "2024-04-15",
        status: "Upcoming",
      },
      {
        id: "m2",
        type: "Brake Inspection",
        dueDate: "2024-03-01",
        status: "Overdue",
      },
    ],
  },
];

const MaintenanceScheduleCard = ({
  schedules,
}: {
  schedules: MaintenanceSchedule[];
}) => (
  <GlassCard>
    <CardBody>
      <VStack align="stretch" spacing={4}>
        <Heading size="sm" color="white">
          Maintenance Schedule
        </Heading>
        {schedules.map((schedule) => (
          <Flex
            key={schedule.id}
            justify="space-between"
            align="center"
            p={3}
            bg="rgba(255, 255, 255, 0.05)"
            borderRadius="md"
          >
            <VStack align="start" spacing={1}>
              <Text color="white">{schedule.type}</Text>
              <Text fontSize="sm" color="gray.400">
                Due: {schedule.dueDate}
              </Text>
            </VStack>
            <Badge
              colorScheme={
                schedule.status === "Completed"
                  ? "green"
                  : schedule.status === "Overdue"
                  ? "red"
                  : "yellow"
              }
            >
              {schedule.status}
            </Badge>
          </Flex>
        ))}
      </VStack>
    </CardBody>
  </GlassCard>
);

const CarDetailsCard = ({
  car,
  onEdit,
}: {
  car: CarDetails;
  onEdit: (car: CarDetails) => void;
}) => (
  <VStack spacing={6} align="stretch" width="100%">
    <GlassCard>
      <CardBody>
        <VStack align="stretch" spacing={4}>
          <Flex justify="space-between" align="center">
            <HStack>
              <Icon as={FaCar} w={6} h={6} color="blue.400" />
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
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Year</Text>
              <Text color="white">{car.year}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Color</Text>
              <Text color="white">{car.color}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">VIN Number</Text>
              <Text color="white">{car.vinNumber}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Plate Number</Text>
              <Text color="white">{car.plateNumber}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Last Service</Text>
              <Text color="white">{car.lastService}</Text>
            </VStack>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Mileage</Text>
              <Text color="white">{car.mileage}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Fuel Type</Text>
              <Text color="white">{car.fuelType}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Transmission</Text>
              <Text color="white">{car.transmission}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Engine Size</Text>
              <Text color="white">{car.engineSize}</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text color="gray.400">Insurance Expiry</Text>
              <Text color="white">{car.insuranceExpiry}</Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </CardBody>
    </GlassCard>

    <MaintenanceScheduleCard schedules={car.maintenanceSchedule} />

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      <Button
        leftIcon={<FaCog />}
        variant="outline"
        colorScheme="blue"
        size="sm"
        onClick={() => {
          /* Add service history navigation */
        }}
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
    </SimpleGrid>
  </VStack>
);

const AddCarModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Omit<CarDetails, "id" | "maintenanceSchedule">) => void;
  initialData?: CarDetails;
}) => {
  const [formData, setFormData] = useState<Partial<CarDetails>>(
    initialData || {
      brand: "",
      model: "",
      year: "",
      color: "",
      vinNumber: "",
      plateNumber: "",
      mileage: "",
      fuelType: "",
      transmission: "",
      engineSize: "",
      insuranceExpiry: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as Omit<CarDetails, "id" | "maintenanceSchedule">);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
      <GlassModal>
        <ModalHeader color="white">
          {initialData ? "Edit Vehicle" : "Add New Vehicle"}
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl isRequired>
                <FormLabel color="gray.300">Brand</FormLabel>
                <Select
                  name="brand"
                  placeholder="Select brand"
                  value={formData.brand}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                >
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="ford">Ford</option>
                  {/* Add more options */}
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Model</FormLabel>
                <Input
                  name="model"
                  placeholder="Enter model"
                  value={formData.model}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Year</FormLabel>
                <Input
                  name="year"
                  type="number"
                  placeholder="Enter year"
                  value={formData.year}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Color</FormLabel>
                <Input
                  name="color"
                  placeholder="Enter color"
                  value={formData.color}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">VIN Number</FormLabel>
                <Input
                  name="vinNumber"
                  placeholder="Enter VIN number"
                  value={formData.vinNumber}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Plate Number</FormLabel>
                <Input
                  name="plateNumber"
                  placeholder="Enter plate number"
                  value={formData.plateNumber}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">Mileage</FormLabel>
                <Input
                  name="mileage"
                  placeholder="Enter mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">Fuel Type</FormLabel>
                <Input
                  name="fuelType"
                  placeholder="Enter fuel type"
                  value={formData.fuelType}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">Transmission</FormLabel>
                <Input
                  name="transmission"
                  placeholder="Enter transmission type"
                  value={formData.transmission}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">Engine Size</FormLabel>
                <Input
                  name="engineSize"
                  placeholder="Enter engine size"
                  value={formData.engineSize}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">Insurance Expiry</FormLabel>
                <Input
                  name="insuranceExpiry"
                  type="date"
                  value={formData.insuranceExpiry}
                  onChange={handleChange}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="white"
                  _hover={{
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  }}
                />
              </FormControl>
            </SimpleGrid>

            <HStack justify="flex-end" mt={8}>
              <Button variant="ghost" color="white" onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">
                Save Vehicle
              </Button>
            </HStack>
          </form>
        </ModalBody>
      </GlassModal>
    </Modal>
  );
};

export default function CarManagement() {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const [cars, setCars] = useState<CarDetails[]>(sampleCars);
  const [editingCar, setEditingCar] = useState<CarDetails | null>(null);

  const handleSaveVehicle = (
    data: Omit<CarDetails, "id" | "maintenanceSchedule">
  ) => {
    if (editingCar) {
      // Update existing car
      setCars((prev) =>
        prev.map((car) =>
          car.id === editingCar.id
            ? { ...car, ...data, maintenanceSchedule: car.maintenanceSchedule }
            : car
        )
      );
    } else {
      // Add new car
      const newCar: CarDetails = {
        ...data,
        id: Date.now().toString(),
        status: "Active",
        lastService: new Date().toISOString().split("T")[0],
        maintenanceSchedule: [],
      };
      setCars((prev) => [...prev, newCar]);
    }
    setEditingCar(null);
  };

  const handleEditCar = (car: CarDetails) => {
    setEditingCar(car);
    onModalOpen();
  };

  return (
    <Flex>
      {/* Desktop Sidebar */}
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
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <Sidebar onClose={onDrawerClose} />
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <MainContent>
        <Container maxW="container.2xl" py={8} px={{ base: 4, lg: 12 }}>
          {/* Mobile Header */}
          <Flex
            mb={8}
            justify="space-between"
            align="center"
            display={{ base: "flex", lg: "none" }}
          >
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={onDrawerOpen}
              variant="ghost"
              color="white"
            />
            <Link href="/">
              <Image src={logo} alt="Autoland Logo" height={25} />
            </Link>
            <Box width="40px" />
          </Flex>

          <Flex justify="space-between" align="center" mb={8}>
            <Box>
              <Heading size="md" mb={2}>
                Car Management
              </Heading>
              <Text color="gray.400">
                Manage your cars and track their service history
              </Text>
            </Box>
            <Button
              leftIcon={<FaPlus />}
              colorScheme="blue"
              onClick={onModalOpen}
              size="sm"
            >
              Add Car
            </Button>
          </Flex>

          {cars.length === 0 ? (
            <GlassCard>
              <CardBody>
                <VStack py={10} spacing={4}>
                  <Icon as={FaCar} w={12} h={12} color="gray.500" />
                  <Text color="gray.400" textAlign="center">
                    No Cars added yet. Add your first Car to get started.
                  </Text>
                  <Button
                    leftIcon={<FaPlus />}
                    colorScheme="blue"
                    onClick={onModalOpen}
                  >
                    Add Car
                  </Button>
                </VStack>
              </CardBody>
            </GlassCard>
          ) : (
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
              {cars.map((car) => (
                <CarDetailsCard key={car.id} car={car} onEdit={handleEditCar} />
              ))}
            </SimpleGrid>
          )}
        </Container>

        <AddCarModal
          isOpen={isModalOpen}
          onClose={onModalClose}
          onSave={handleSaveVehicle}
          initialData={editingCar ?? undefined}
        />
      </MainContent>
    </Flex>
  );
}

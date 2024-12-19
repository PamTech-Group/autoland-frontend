/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Flex,
  useToast,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Sidebar from "@/app/components/SideBar";
import { FaBars } from "react-icons/fa6";
import { Image, Link } from "@chakra-ui/next-js";
import logo from "@/app/assets/logo.webp";
import { useRouter } from "next/navigation";

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

const GlassCard = styled(Box)`
  background: linear-gradient(
    135deg,
    rgba(36, 39, 59, 0.7),
    rgba(28, 31, 48, 0.9)
  );
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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

export default function PaymentPage() {
  const router = useRouter();
  const toast = useToast();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  // Sample data - replace with actual data
  const pendingPayments = [
    {
      id: 1,
      service: "Engine Maintenance",
      amount: 150000,
      dueDate: "2024-03-15",
      status: "pending",
    },
    {
      id: 2,
      service: "Oil Change",
      amount: 25000,
      dueDate: "2024-03-20",
      status: "pending",
    },
  ];

  const completedPayments = [
    {
      id: 3,
      service: "Brake Repair",
      amount: 75000,
      paidDate: "2024-02-15",
      status: "completed",
    },
    {
      id: 4,
      service: "Tire Replacement",
      amount: 120000,
      paidDate: "2024-02-01",
      status: "completed",
    },
  ];

  const totalDebt = pendingPayments.reduce(
    (acc, payment) => acc + payment.amount,
    0
  );

  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>

      <Drawer
        autoFocus={false}
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
        returnFocusOnClose={false}
        onOverlayClick={onDrawerClose}
        size="xs">
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <Sidebar onClose={onDrawerClose} />
        </DrawerContent>
      </Drawer>

      <MainContent>
        <Container maxW="container.xl" py={8} px={{ base: 4, lg: 12 }}>
          {/* Mobile Header */}
          <Flex
            mb={8}
            justify="space-between"
            align="center"
            display={{ base: "flex", lg: "none" }}>
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={onDrawerOpen}
              variant="ghost"
              color="white"
            />
          </Flex>

          {/* Page Header */}
          <Flex flexDir="column" gap={6} width="full" mb={8}>
            <Heading size="sm">Accounts </Heading>
            <Text color="gray.400" fontSize="sm">
              Manage your payments and view transaction history
            </Text>
          </Flex>

          {/* Stats Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={8}>
            <GlassCard>
              <StatGroup>
                <Stat>
                  <StatLabel color="gray.400">Total Outstanding</StatLabel>
                  <StatNumber color="red.400">
                    ₦{totalDebt.toLocaleString()}
                  </StatNumber>
                </Stat>
              </StatGroup>
            </GlassCard>
          </SimpleGrid>

          {/* Payments Tabs */}
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList mb={4}>
              <Tab
                color="blue.400"
                _selected={{ color: "white", bg: "blue.500" }}>
                Pending
              </Tab>
              <Tab
                color="blue.400"
                _selected={{ color: "white", bg: "blue.500" }}>
                Verified
              </Tab>
            </TabList>

            <TabPanels>
              {/* Pending Payments Panel */}
              <TabPanel p={0}>
                <GlassCard>
                  <ScrollContainer>
                    <TableContainer>
                      <Table variant="simple" colorScheme="whiteAlpha">
                        <Thead>
                          <Tr>
                            <Th color="gray.400">Service</Th>
                            <Th color="gray.400">Amount</Th>
                            <Th color="gray.400">Due Date</Th>
                            <Th color="gray.400">Status</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {pendingPayments.map((payment) => (
                            <Tr
                              key={payment.id}
                              cursor="pointer"
                              _hover={{ bg: "whiteAlpha.100" }}
                              onClick={() =>
                                router.push("/dashboard/payments/payment")
                              }>
                              <Td>{payment.service}</Td>
                              <Td>₦{payment.amount.toLocaleString()}</Td>
                              <Td>{payment.dueDate}</Td>
                              <Td>
                                <Badge colorScheme="yellow">Pending</Badge>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </ScrollContainer>
                </GlassCard>
              </TabPanel>

              {/* Payment History Panel */}
              <TabPanel p={0}>
                <GlassCard>
                  <Table variant="simple" colorScheme="whiteAlpha">
                    <Thead>
                      <Tr>
                        <Th color="gray.400">Service</Th>
                        <Th color="gray.400">Amount</Th>
                        <Th color="gray.400">Paid Date</Th>
                        <Th color="gray.400">Status</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {completedPayments.map((payment) => (
                        <Tr key={payment.id}>
                          <Td>{payment.service}</Td>
                          <Td>₦{payment.amount.toLocaleString()}</Td>
                          <Td>{payment.paidDate}</Td>
                          <Td>
                            <Badge colorScheme="green">Completed</Badge>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </GlassCard>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </MainContent>
    </Flex>
  );
}

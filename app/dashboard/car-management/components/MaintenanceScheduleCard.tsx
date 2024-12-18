import { Box, VStack, Heading, Flex, Text, Badge } from "@chakra-ui/react";

interface MaintenanceSchedule {
  id: string;
  type: string;
  dueDate: string;
  status: "Upcoming" | "Overdue" | "Completed";
}

const MaintenanceScheduleCard = ({
  schedules,
}: {
  schedules: MaintenanceSchedule[];
}) => (
  <Box>
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
  </Box>
);

export default MaintenanceScheduleCard;

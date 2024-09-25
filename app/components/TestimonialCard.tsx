'use client'
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, testimonial, rating }) => {
  return (
    <Box
      border="1px solid"
      
      borderRadius="md"
      padding="1rem"
      bgColor="#FAF9F6"
      boxShadow="md"
      maxWidth="600px"
      margin="auto"
    >
      <Heading fontSize="md" color='text' fontWeight="600" mb="0.5rem">
        {name}
      </Heading>
      <Text mb="1rem" color='text'>{testimonial}</Text>
      <Flex alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < rating ? "orange.400" : "gray.300"}
            />
          ))}
        <Text color='text' ml="0.5rem">{rating}</Text>
      </Flex>

    </Box>
  );
};

export default TestimonialCard;
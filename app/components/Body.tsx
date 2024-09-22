import {
  Box,
  Button,
  Flex,
  Grid,

  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCar, FaComments, FaUsers } from "react-icons/fa6";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";
import service5 from "../assets/service5.webp";
import service6 from "../assets/service6.webp";
import toyota from "../assets/toyota.webp";
import mazda from "../assets/mazda.webp";
import lexus from "../assets/lexus.webp";
import acura from "../assets/acura.webp";
import subaru from "../assets/subaru.webp";
import nissan from "../assets/subaru.webp";
import suzuki from "../assets/subaru.webp";
import isuzu from "../assets/subaru.webp";
import mitsubishi from "../assets/subaru.webp";
import Image from "next/image";

function Body() {
  const services = [
    { image: service1, title: "Computerised Auto Diagnosis" },
    { image: service2, title: "Maintenance / Lube Check" },
    { image: service3, title: "AC/ Electrical Repairs" },
    { image: service4, title: "Mechanical Repairs" },
    { image: service5, title: "Body Shop / V-Upgrade and Conversion" },
    { image: service6, title: "Wheel alignment / Balancing" },
  ];
  const carBrands = [
    { image: toyota, name: "Toyota" },
    { image: mazda, name: "Mazda" },
    { image: lexus, name: "Lexus" },
    { image: acura, name: "Acura" },
    { image: subaru, name: "Subaru" },
    { image: nissan, name: "Nissan" },
    { image: suzuki, name: "Suzuki" },
    { image: isuzu, name: "Isuzu" },
    { image: mitsubishi, name: "Mitsubishi" },
  ];
  return (
    <Box
      color="text"
      padding={{
        base: "0.5rem 0.5rem",
        sm: "0.75rem 2rem",
        md: "1rem 4rem",
        lg: "1rem 4rem",
      }}
    >
      <Flex
        justifyContent="center"
        gap="2rem"
        alignItems="center"
        p={4}
        mt="-8rem"
      >
        <Flex alignItems="center" gap={2}>
          <Icon as={FaUsers} boxSize={8} mb={2} />
          <Text fontWeight={400}>Qualified Professionals</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon as={FaCar} boxSize={8} mb={2} />
          <Text fontWeight={400}>Auto Club Membership</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon as={FaComments} boxSize={8} mb={2} />
          <Text fontWeight={400}>Talk to Our Expert</Text>
        </Flex>
      </Flex>
      {/* OUR SERVICES */}
      <Box p={8}>
        <Heading as="h2" size="sm" mb={6} color="primaryBlue">
          Our Services
        </Heading>
        <SimpleGrid flexWrap="wrap" columns={3} gap={6}>
          {services.map((service, index) => (
            <Box
              key={index}
              bg="white"
              width="fit-content"
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              height='100%'
            >
              <Box  height='85%'>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={350}
                  height={100}
                />
              </Box>
              <VStack height='15%' p={4} align="start">
                <Text fontWeight="bold">{service.title}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box>
      <VStack spacing={8} align="stretch">
        <Heading as="h2" size="sm" textAlign="center" color="text">
          Car Make We Service
        </Heading>
        
        <Flex justifyContent="center" mb={6}>
          <Button colorScheme="blue" mr={2}>JAPANESE</Button>
          <Button variant="ghost" mr={2}>AMERICAN</Button>
          <Button variant="ghost">GERMAN</Button>
        </Flex>
        
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {carBrands.map((brand, index) => (
            <Image 
              key={index} 
              src={brand.image} 
              alt={brand.name} 
              objectFit="contain" 
              height={30}
            />
          ))}
        </Grid>
      </VStack>
    </Box>
    </Box>
  );
}
export default Body;

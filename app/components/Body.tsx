import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Progress,
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
import choose_us from "../assets/choose_us.webp";
import partner1 from "../assets/partner1.webp";
import partner2 from "../assets/partner2.webp";
import partner3 from "../assets/partner3.webp";
import partner4 from "../assets/partner4.webp";
import partner5 from "../assets/partner5.webp";
import partner6 from "../assets/partner6.webp";
import Image from "next/image";
//import { FaToolbox } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import YouTube from "react-youtube";

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
  // const partners =[
  //   { image: partner1, name: "partner1" },
  //   { image: partner2, name: "partner2" },
  //   { image: partner3, name: "partner3" },
  //   { image: partner4, name: "partner4" },
  //   { image: partner5, name: "partner5" },
  //   { image: partner6, name: "partner6" },

  // ]
  const testimonials = [
    "vXKotssNyIA", 
    "riMLis8Ga7U",
    "G9yit6oJink",
    
  ];
  const carTips = [
    "vXKotssNyIA", 
    "riMLis8Ga7U",
    "G9yit6oJink",
    
  ];
  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Box
      color="text"
      padding={{
        base: "0.5rem 0.5rem",
        sm: "0.75rem 2rem",
        md: "1rem 4rem",
        lg: "1rem 4rem",
      }}
      m="0 auto"
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
              height="100%"
            >
              <Box height="85%">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={350}
                  height={100}
                />
              </Box>
              <VStack height="15%" p={4} align="start">
                <Text fontWeight="bold">{service.title}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      {/** Car MAKE WE SERVICE */}
      <Box>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="sm" textAlign="left" color="primaryBlue">
            Car Make We Service
          </Heading>

          <Flex justifyContent="center" mb={6}>
            <Button colorScheme="blue" mr={2}>
              JAPANESE
            </Button>
            <Button variant="ghost" mr={2}>
              AMERICAN
            </Button>
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
      {/* WHY CHOOSE US */}
      <Box>
        <Heading as="h2" size="sm" textAlign="left" color="primaryBlue">
          Why Choose Us
        </Heading>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <SimpleGrid columns={2} textColor="text">
              <Flex alignItems="center" gap={5}>
                <Icon
                  bgColor="primaryBlue"
                  color="white"
                  as={MdSettings}
                  padding=".5rem"
                  borderRadius="md"
                  boxSize={12}
                  mb={2}
                />
                <Text>Efficiency & Speed</Text>
              </Flex>
              <Flex alignItems="center" gap={5}>
                <Icon
                  bgColor="primaryBlue"
                  color="white"
                  as={MdSettings}
                  padding=".5rem"
                  borderRadius="md"
                  boxSize={12}
                  mb={2}
                />
                <Text>Professional & Creative Staff</Text>
              </Flex>
              <Flex alignItems="center" gap={5}>
                <Icon
                  bgColor="primaryBlue"
                  color="white"
                  as={MdSettings}
                  padding=".5rem"
                  borderRadius="md"
                  boxSize={12}
                  mb={2}
                />
                <Text>Support</Text>
              </Flex>
              <Flex alignItems="center" gap={5}>
                <Icon
                  bgColor="primaryBlue"
                  color="white"
                  as={MdSettings}
                  padding=".5rem"
                  borderRadius="md"
                  boxSize={12}
                  mb={2}
                />
                <Text>Warrantee & Guarantee</Text>
              </Flex>
            </SimpleGrid>
            <Box>
              <Flex justifyContent="space-between">
                <Text>Client Satisfaction</Text>
                <Text>90%</Text>
              </Flex>
              <Progress bgColor="#eee" size="sm" value={90} />
            </Box>
          </Box>
          <Box>
            <Image src={choose_us} alt="why choose us jpeg" height={350} />
          </Box>
        </Flex>
      </Box>
      {/** OUR PARTNERS */}
      <Box mb='3rem'>
        <Heading
          as="h2"
          size="sm"
          textAlign="center"
          color="primaryBlue"
          my={10}
        >
          Our Partners & Clients
        </Heading>
        <Flex justifyContent="center" gap="2.5rem">
          <Image
            src={partner1}
            alt="partner1"
            style={{ height: "35px", objectFit: "cover" }}
          />
          <Image
            src={partner2}
            alt="partner2"
            style={{ height: "35px", objectFit: "cover" }}
          />
          <Image
            src={partner3}
            alt="partner3"
            style={{ height: "35px",  objectFit: "contain" }}
          />
          <Image
            src={partner4}
            alt="partner4"
            style={{ height: "35px", objectFit: "cover" }}
          />
          <Image
            src={partner5}
            alt="partner5"
            style={{ height: "35px", objectFit: "cover" }}
          />
          <Image
            src={partner6}
            alt="partner6"
            style={{ height: "35px", objectFit: "cover" }}
          />
        </Flex>
      </Box>
        {/* VIDEO SECTION */}
        <Box>
        <Heading as="h2" size="sm" textAlign="left" color="primaryBlue" my={10}>
          Our Customers Love Us
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {testimonials.map((videoId, index) => (
            <YouTube key={index} videoId={videoId} opts={opts} />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h2" size="sm" textAlign="left" color="primaryBlue" my={10}>
          Car Tip & Advice
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {carTips.map((videoId, index) => (
            <YouTube key={index} videoId={videoId} opts={opts} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
export default Body;

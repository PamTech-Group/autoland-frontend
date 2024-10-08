import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Progress,
  SimpleGrid,
  Skeleton,
  Text,
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
import nissan from "../assets/nissan.webp";
import suzuki from "../assets/suzuki.webp";
import isuzu from "../assets/isuzu.webp";
import ford from "../assets/ford.webp";
import dodge from "../assets/dodge.webp"
import chevrolet from "../assets/chevrolet.webp"
import jeep from "../assets/jeep.webp"
import audi from "../assets/audi.webp"
import benz from "../assets/benz.webp"
import bmw from "../assets/bmw.webp"
import mitsubishi from "../assets/mitsubishi.webp";
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
import theme from "../theme";
import { useState } from "react";

function Body() {
  const [loadingTestimonials, setLoadingTestimonials] = useState(true); 
  const [loadingCarTips, setLoadingCarTips] = useState(true); 
  const [selectedCountry, setSelectedCountry] = useState('japanese');

  const handleTestimonialsReady = () => {
    setLoadingTestimonials(false); // Set loading to false when testimonials are ready
  };

  const handleCarTipsReady = () => {
    setLoadingCarTips(false); // Set loading to false when car tips are ready
  };

  type CountryKey = 'japanese' | 'american' | 'german';

  const services = [
    { image: service1, title: "Computerised Auto Diagnosis" },
    { image: service2, title: "Maintenance / Lube Check" },
    { image: service3, title: "AC/ Electrical Repairs" },
    { image: service4, title: "Mechanical Repairs" },
    { image: service5, title: "Body Shop and Conversion" },
    { image: service6, title: "Wheel alignment / Balancing" },
  ];
  const carBrands = {
    japanese: [
      { image: toyota, name: "Toyota" },
      { image: mazda, name: "Mazda" },
      { image: lexus, name: "Lexus" },
      { image: acura, name: "Acura" },
      { image: subaru, name: "Subaru" },
      { image: nissan, name: "Nissan" },
      { image: suzuki, name: "Suzuki" },
      { image: isuzu, name: "Isuzu" },
      { image: mitsubishi, name: "Mitsubishi" },
    ],
    american: [
      { image: ford, name: "Ford" },
      { image: dodge, name: "Dodge" },
      { image: chevrolet, name: "Chevrolet" },
      { image: jeep, name: "Jeep" },
    ],
    german: [
      { image: audi, name: "Audi" },
      { image: benz, name: "Mercedes-Benz" },
      { image: bmw, name: "BMW" },
    ],
  };

  // ]
  const testimonials = [
    "vXKotssNyIA", 
    "riMLis8Ga7U",
    "G9yit6oJink",
    
  ];
  const carTips = [
    "R04Ik_0HhX4", 
    "0g7KNhlep_o",
    "UZ3r4ejxkwA",
    
  ];
  const opts = {
    height: "250",
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Flex 
    // maxWidth
    zIndex={50}
    flexDirection='column' 
      color="text"
      padding={{
        base: "0.5rem 0.5rem",
        sm: "0.75rem 2rem",
        md: "1rem 4rem",
        lg: "1rem 6rem",
        dxl: "1rem 8rem",
      }}
    justifyContent='center'
    >
       <Flex
       zIndex={50}
        justifyContent="center"
        fontSize={{base:'xs', md:'sm'}}
        gap={{ base: "1rem", md: "2rem" }}
        alignItems={{base:"left", lg: 'center'}}
        flexWrap='wrap'
        p={2}
        m={{ base: "0 auto 0 auto", xl: "-2rem auto 0 auto ", dxl: "-1rem auto 0 auto ", }}
      >
        <Flex alignItems="center" gap={2}>
          <Icon as={FaUsers} boxSize={{base:5, md:8}} mb={2} />
          <Text fontWeight={400}  >Qualified Professionals</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon as={FaCar}   boxSize={{base:5, md:8}} mb={2} />
          <Text fontWeight={400}>Auto Club Membership</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon as={FaComments}   boxSize={{base:5, md:8}} mb={2} />
          <Text fontWeight={400}>Talk to Our Expert</Text>
        </Flex>
      </Flex>
      {/* OUR SERVICES */}
      <Box my={theme.vmargin} mx='auto'>
        <Heading zIndex={200000} textAlign='left' as="h2" size="md" mt={{
          base: 12,
          md: 6
        }} mb={{
          base: 9,
          md: 6
        }} color="primaryBlue">
          Our Services
        </Heading>
        <SimpleGrid placeItems='center'  columns={{ base: 1, md: 2, myxl: 3 }} gap={6} rowGap={12}>
          {services.map((service, index) => (
            <Flex
            as='a'
            href="/services"
            flexDirection='column'
              key={index}
              bg="white"
              width="fit-content"
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              maxHeight="27rem"
            >
              <Box  width='100%'>
                <Image
                  src={service.image}
                  alt={service.title}
                  style={{objectFit:'cover', width:'100%'}}
                />
              </Box>
              <Flex flexGrow={1} p={4} align="start" py='2rem'>
                <Text fontWeight={600} fontSize='sm'>{service.title}</Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
      {/** Car MAKE WE SERVICE */}
      <Box my={theme.vmargin} borderRadius='lg' bgColor='#F0F8FF' padding={{ base: '3rem 1rem', lg: '4rem 2rem', xl: '6rem 3rem' }} mx='auto' width='100%' maxWidth='80.25em'>
        <Box>
          <Heading as="h2" size="md" mb='2.5rem' textAlign="left" color="primaryBlue">
            Car Make We Service
          </Heading>

          <Flex p={{ base: '0.5rem 1rem', md: '1rem 2rem' }}      margin='0 auto' 
            width={{ base: '100%', md: 'min-content' }} 
            justifyContent="center" 
            mb={6} 
            gap={{base: '1rem%', lg: '2rem'}}
            bgColor='rgba(0, 32, 79, 0.05)'
            flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Button 
            size={{base: 'sm', xl:'md'}}
              color={selectedCountry === 'japanese' ? 'white' : 'text'} 
              onClick={() => setSelectedCountry('japanese')}
              bgColor={selectedCountry === 'japanese' ? 'primaryBlue' : 'transparent'}
              _active={{ bgColor: 'primaryBlue', color: 'white' }}
              _hover={{ bgColor: 'primaryBlue', color: 'white' }}

              _focus={{color: 'white'}}
            >
              JAPANESE
            </Button>
            <Button 
              color={selectedCountry === 'american' ? 'white' : 'text'} 
              onClick={() => setSelectedCountry('american')}
              bgColor={selectedCountry === 'american' ? 'primaryBlue' : 'transparent'}
              _hover={{ bgColor: 'primaryBlue', color: 'white' }}
            >
              AMERICAN
            </Button>
            <Button 
              color={selectedCountry === 'german' ? 'white' : 'text'} 
              onClick={() => setSelectedCountry('german')}
              bgColor={selectedCountry === 'german' ? 'primaryBlue' : 'transparent'}
              _hover={{ bgColor: 'primaryBlue', color: 'white' }}
             
            >
              GERMAN
            </Button>
          </Flex>

          <Grid mt='2rem' templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}  gap={6} placeItems='center' justifyContent='center'>
          {carBrands[selectedCountry as CountryKey].map((brand, index) => (
              <Image
                key={index}
                src={brand.image}
                alt={brand.name}
                height={60} width={70}
              />
            ))}
          </Grid>
        </Box>
      </Box>
      {/* WHY CHOOSE US */}
      <Box my={theme.vmargin} mx='auto' width='100%' maxWidth='80.25em' >
        <Heading as="h2" size="md" textAlign="left" mt={{
          base: 0,
          md: 6
        }} mb={{
          base: 9,
          md: 6
        }}  color="primaryBlue">
          Why Choose Us
        </Heading>
        <Flex flexDirection={{ base: "column", lg: "row" }} gap={{ base: "2rem", lg: "0" }} justifyContent="space-between" alignItems="center">
          <Box>
            <SimpleGrid  columns={{ base: 1, md: 2 }} rowGap={8} textColor="text">
              <Flex alignItems="center" gap={2}>
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
              <Flex alignItems="center" gap={2}>
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
              <Flex alignItems="center" gap={2}>
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
              <Flex alignItems="center" gap={2}>
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
            <Box mt='2rem'>
              <Flex justifyContent="space-between" mb='1rem'>
                <Text>Client Satisfaction</Text>
                <Text>90%</Text>
              </Flex>
              <Progress  bgColor="#eee" size="sm" value={90} />
            </Box>
          </Box>
          <Box>
            <Image src={choose_us} alt="why choose us jpeg" height={350} />
          </Box>
        </Flex>
      </Box>
      {/** OUR PARTNERS */}
      <Box my={theme.vmargin}>
        <Heading
          as="h2"
          size="md"
          textAlign="center"
          color="primaryBlue"
          mt={{
            base: 12,
            md: 10
          }} mb={{
            base: 12,
            md: 10
          }}
        >
          Our Partners & Clients
        </Heading>
        <Flex justifyContent="center" gap="2.5rem"   flexWrap="wrap"
          alignItems="center">
          <Image
            src={partner1}
            alt="partner1"
            style={{ height: "35px", objectFit: "contain" }}
          />
          <Image
            src={partner2}
            alt="partner2"
            style={{ height: "35px", objectFit: "contain" }}
          />
          <Image
            src={partner3}
            alt="partner3"
            style={{ height: "35px",  objectFit: "contain" }}
          />
          <Image
            src={partner4}
            alt="partner4"
            style={{ height: "35px", objectFit: "contain" }}
          />
          <Image
            src={partner5}
            alt="partner5"
            style={{ height: "35px", objectFit: "contain" }}
          />
          <Image
            src={partner6}
            alt="partner6"
            style={{ height: "35px", objectFit: "contain" }}
          />
        </Flex>
      </Box>
        {/* VIDEO SECTION */}
        <Box m='0 auto'>
        <Heading as="h2" size="md" textAlign="left" color="primaryBlue" my={10}>
        Customers love us
        </Heading>
        <SimpleGrid  columns={{ base: 1, md: 2, xl: 3 }} spacing={10} justifyContent='center'>
          {loadingTestimonials && (
            <Skeleton height="250px" width="100%" />
          )}
          {testimonials.map((videoId, index) => (
            <YouTube key={index} videoId={videoId} opts={opts} onReady={handleTestimonialsReady} />
          ))}
          </SimpleGrid>
      </Box>

      <Box m='0 auto'>
        <Heading as="h2" size="md" textAlign="left" color="primaryBlue" my={10}>
          Car Tips & Advice
        </Heading>
        <SimpleGrid placeItems='center' columns={{ base: 1, md: 2, xl: 3 }} spacing={10} justifyContent='center'>
          {loadingCarTips && (
            <Skeleton height="250px" width="100%" />
          )}
          {carTips.map((videoId, index) => (
            <YouTube key={index} videoId={videoId} opts={opts} onReady={handleCarTipsReady} />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
export default Body;

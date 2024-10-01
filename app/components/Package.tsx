import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  VStack,

  Icon,
} from '@chakra-ui/react'
import { FaCar,  } from 'react-icons/fa';

interface PackageCardProps {
  title: string;
  description: string;
  buttonText: string;
}
const PackageCard = ({ title, description, buttonText }: PackageCardProps) => (
  <Box
    bg="primaryBlue"
    p={6}
    borderRadius="lg"
    width={{ base: "full", md: "300px" }}
    flexShrink={0}
  >
    <VStack align="start" spacing={4}>
      <Heading size="xs" color="white">
        {title}
      </Heading>
      <Text color="whiteAlpha.800" fontSize="sm">
        {description}
      </Text>
      <Flex justify="space-between" width="full" align="center">
        <Button  bgColor='buttonOrange' color='white' colorScheme="red" fontSize='sm' fontWeight={400} size="sm" >
          {buttonText} 

        </Button>
        <Icon as={FaCar} color="white" boxSize={6} />
      </Flex>
    </VStack>
  </Box>
);

const PackagesSection = () => {



  return (
    <Box bg="#F0F8FF" py={16}>
      <Box  mx="auto" px={4} >
        <VStack spacing={8} align="center" mb={12} color='text'>
          <Heading textAlign="center" size="sm">
            Become one of the millions of AutoClub members and subscribe for unlimited car maintenance.
          </Heading>
          {/* <Text fontSize="xl" fontWeight="bold">
            100+ Chidomere and hundred of customers are subscriber
          </Text> */}
          <Box w="full" h={1} bg="red.500" maxW="600px" />
          <Text fontSize="lg" fontWeight="semibold">
            Choose Plan
          </Text>
        </VStack>

    
      
          <Flex
          flexDirection={{base: 'column', md:'row'}}
          alignItems='center'
          flexWrap='wrap'
         justifyContent='center'
         gap='1rem' py={4}
          >
         
              <PackageCard
                title="SILVER PACKAGE"
                description="Japanese Vehicle (Semi Synthetic Oil) 6litrs - 5litrs"
                buttonText="Join Now"
              />
              <PackageCard
                title="GOLD PACKAGE"
                description="Japanese Vehicle (Full Synthetic Oil) 5litrs"
                buttonText="Join Now"
              />
              <PackageCard
                title="DIAMOND PACKAGE"
                description="Japanese Vehicle (Full Synthetic Oil) 6litrs - 8litrs"
                buttonText="Join Now"
              />
              <PackageCard
                title="PREMIUM PACKAGE"
                description="Range Rovers & Benz (Full Synthetic Oil) 6litrs - 8litrs"
                buttonText="Join Now"
              />
           
          </Flex>

     
      </Box>
    </Box>
  );
};
export default PackagesSection
// SectionComponent.js
import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Grid,
  GridItem,
  VStack,
  Hide,
} from "@chakra-ui/react";
import theme from "../theme";
import Image, { StaticImageData } from "next/image";

interface SectionComponentOneProps {
  title: string;
  description: string;
  imageSrc2: StaticImageData;
  isReverse: boolean;
}

const SectionComponentOne: React.FC<SectionComponentOneProps> = ({
  title,
  description,
  imageSrc2,
  isReverse,
}) => {
  return (
    <VStack align="center">
     
       <Grid
       templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
       gap={{ base: "2rem", md: "2rem", lg: "2rem" }}
       my="2rem"
       placeItems="center"
       width="100%"
     >
       <Hide below="lg">
         <GridItem height="100%" colSpan={1} order={isReverse ? 5 : 1}>
           <Flex gap="1rem" alignItems="start" height="100%">
             <Box
               bgColor="primaryBlue"
               height="40px"
               width="30px"
               borderRadius="45%"
             />
             <Box height="100%" width="5px" bgColor="black" />
           </Flex>
         </GridItem>
       </Hide>

       <GridItem colSpan={{ base: 1, md: 1, lg: 2 }} height="100%" order={isReverse ? 2 : 2}>
         <Flex
           flexDirection="column"
           justifyContent="space-evenly"
           height="100%"
           alignItems={{ base: "left", md: "flex-start" }}
           textAlign={{ base: "left", md: "left" }}
         >
           <Heading color="secondaryBlue" fontSize="lg" fontWeight={500} mb={4}>
             {title}
           </Heading>
           <Text color="text" fontSize="md" mb={4}>
             {description}
           </Text>
           <Button
             as="a"
             width="fit-content"
             href="/booking"
             fontSize="sm"
             padding={theme.buttonPadding}
             bgColor="buttonOrange"
             _hover={{
               bgColor: "#961615",
             }}
             _active={{
               bgColor: "#bf1e1d",
             }}
           >
             Book an Appointment
           </Button>
         </Flex>
       </GridItem>

       <GridItem colSpan={{ base: 1, md: 1, lg: 2 }} order={isReverse ? 1 : 3}>
         <Box width="100%">
           <Image
             style={{
               height: "auto",
               width: "100%",
               borderRadius: "lg",
               boxShadow: "lg",
             }}
             src={imageSrc2}
             alt={title}
           />
         </Box>
       </GridItem>
     </Grid>
      

    
    </VStack>
  );
};

export default SectionComponentOne;

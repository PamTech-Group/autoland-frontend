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
      {isReverse ? (
        <Grid templateColumns="repeat(5, 1fr)" placeItems="center">
          <GridItem colSpan={2}>
            <Box>
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

          <GridItem colSpan={2} height="100%">
            <Flex
              flexDirection="column"
              justifyContent="space-evenly"
              height="100%"
            >
              <Heading color="secondaryBlue" fontSize="lg" fontWeight={500}>
                {" "}
                {title}
              </Heading>
              <Text color="text" fontSize="md">
                {description}
              </Text>
              <Button
                as="a"
                width="fit-content"
                href="/socials"
                fontSize="sm" // Responsive font size
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
          <GridItem height="100%" colSpan={1}>
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
        </Grid>
      ) : (
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap="2rem"
          my="2rem"
          placeItems="center"
        >
          <GridItem height="100%" colSpan={1}>
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
          <GridItem colSpan={2} height="100%">
            <Flex
              flexDirection="column"
              justifyContent="space-evenly"
              height="100%"
            >
              <Heading color="secondaryBlue" fontSize="lg" fontWeight={500}>
                {" "}
                {title}
              </Heading>
              <Text color="text" fontSize="md" >
                {description}
              </Text>
              <Button
                as="a"
                width="fit-content"
                href="/socials"
                fontSize="sm" // Responsive font size
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
          <GridItem colSpan={2}>
            <Box>
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
      )}
    </VStack>
  );
};

export default SectionComponentOne;

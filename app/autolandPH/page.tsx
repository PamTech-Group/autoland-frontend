"use client";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import bgImage from "../assets/autoclubBg.webp";
import { Image } from "@chakra-ui/next-js";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import grid5 from "../assets/grid5.png";

function AutolandPH() {
  return (
    <Box backgroundColor="backgroundWhite">
      <Box color="whiteText" height={{ base: "fit-content", xl: "100vh" }}>
        <Flex
          flexDirection="column"
          zIndex={1}
          height="100%"
          bgImage={bgImage.src}
          bgRepeat="no-repeat"
          bgSize="cover"
          direction={{ base: "column", xl: "row" }}
          alignItems="center"
          position="relative"
        >
          <Nav />
          <Flex
            flexDirection={{ base: "column", xl: "row" }}
            padding={{
              base: "0.5rem 0.5rem",
              sm: "0.75rem 2rem",
              md: "1rem 4rem",
              lg: "1rem 6rem",
            }}
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent="space-around"
          >
            {/* Left side content */}
            <VStack
              align="center"
              spacing={10}
              width={{ base: "100%", xl: "45%" }}
              textAlign="center"
              // mb={{ base: 8, lg: 0 }}
            >
              <Heading as="h1" size={{ base: "md", md: "lg", dxl: "2xl" }}>
                Welcome to Pamtech Autoland <br /> Port-Harcourt Workshop
              </Heading>
              <Text fontWeight="600" fontSize={{ base: "md", xl: "lg" }}>
                Get your car back to peak performance with expert care!
              </Text>
              <Text fontSize={{ base: "md", xl: "lg" }}>
                {` At our Automobile Repair Workshop, we don’t just repair, we
                restore, fine-tune, and optimize your vehicle to keep you safely
                on the road.`}
              </Text>
            </VStack>
          </Flex>
        </Flex>
        <Flex
          zIndex={5000}
          gap={3}
          position="fixed"
          bottom={5}
          right={2}
          flexDirection="column"
        >
          <IconButton
            as="a"
            href="tel:+2348115004000"
            borderRadius="50%"
            boxShadow="md"
            colorScheme="blackAlpha"
            aria-label="Call Us"
            size="lg"
            icon={<FaPhone size="1.5rem" color="#60D669" />}
          />
          <IconButton
            as="a"
            href="https://wa.me/+2348115004000"
            borderRadius="50%"
            boxShadow="md"
            colorScheme="blackAlpha"
            aria-label="contact Us"
            size="lg"
            icon={<FaWhatsapp size="1.5rem" color="#60D669" />}
          />
        </Flex>
      </Box>

      <Box>
        <Heading>Our Facility</Heading>
        <Text>
          Need a reliable car repair workshop? Our Lagos facility offers expert{" "}
          <br /> service, top tools, and a seamless repair experience.
        </Text>
      </Box>
      {/* GRID SECTION */}
      <Box padding={{ base: "2rem 1rem", md: "3rem 8rem" }}>
        <Grid
          templateColumns={{
            lg: "repeat(4, 1fr)",
          }}
          templateRows="repeat(3,1fr)"
        >
          <GridItem colSpan={3} rowSpan={1}>
            <Image src={grid1} alt="Entrance View" borderRadius="md" />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Image src={grid2} alt="Reception View" borderRadius="md" />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Image src={grid3} alt="Workshop View" borderRadius="md" />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Image src={grid4} alt="Workshop View" borderRadius="md" />
          </GridItem>
          <GridItem colSpan={2} rowSpan={1}>
            <Image src={grid5} alt="Workshop View" borderRadius="md" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default AutolandPH;

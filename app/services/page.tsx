"use client";
import { Box, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import servicesHero from "../assets/servicesHero.webp";
import quote from "../assets/services_quotes.webp";
import wedo1 from "../assets/wedo1.webp";
import wedo2 from "../assets/wedo2.webp";
import { Image } from "@chakra-ui/next-js";

import NavWhite from "../components/NavWhite";
import SectionComponent from "../components/SectionComponent";
import Footer from "../components/Footer";
import theme from "../theme";

function Services() {
  return (
    <Box bgColor='backgroundWhite'>
      <NavWhite />
      <Box
        padding={{
          base: "0.5rem 0.5rem",
          sm: "0.75rem 2rem",
          md: "1rem 4rem",
          lg: "1rem 4rem",
        }}
       
      >
        <Box>
          <Flex flexDirection='column' gap='1rem' my={theme.vmargin}>

          <Heading color="secondaryBlue" fontWeight={700} fontSize="lg">
            Our Service
          </Heading>
          <Text
            color="text"
            fontWeight={600}
            fontSize="xl"
            width="50%"
          >
            Your vehicle deserves top-notch care, and at AutoLand, we deliver
            just that.
          </Text>
          </Flex>
          <Flex justify="center" position="relative">
            <Box>
              <Image
                flexGrow={1}
                src={servicesHero}
                alt="service technicians"
                style={{ height: "auto", width: "auto" }}
              />
            </Box>
            <Box
              bgColor="primaryBlue"
              color="white"
              p={4}
              borderRadius="xl"
              maxW="470px"
              maxH="450px"
              position="absolute"
              top="12%"
              left="20%"
              zIndex={2}
            >
              <Image
                src={quote}
                alt="quote"
                style={{ height: "auto", width: "auto" }}
              />
              <Text padding="2rem 2.5rem" fontSize="lg">
                {`Whether it's regular maintenance or significant repairs, we    
                approach every task with attention to detail 
                and dedication.`}
              </Text>
            </Box>
          </Flex>
        </Box>

        {/** WHAT WE DO */}
        <Box my={theme.vmargin}>
          <VStack align="left">
            <Heading color="secondaryBlue" fontWeight={700} fontSize="xl">
              What we do{" "}
            </Heading>
            <Text color="text" fontSize="md" width="50%">
              Your vehicle deserves top-notch care, and at AutoLand, we deliver
              just that. Our skilled technicians focus on your safety by
              providing high-quality services customized for your car.
            </Text>
          </VStack>
        </Box>
        
        <Flex flexDirection='column' gap='4rem' my='3rem'>
 
          <SectionComponent
            title="Computerised Auto Repair & Services"
            description="At AutoLand, we specialize in computerized auto repair and services for precise diagnostics. Our advanced technology quickly identifies issues, enhancing your vehicle's        
             performance and safety. Trust our skilled technicians to ensure your car is in expert hands, from diagnosis to final repair."
            imageSrc2={wedo1} // Update with your image path
            isReverse={false}
          />

          <SectionComponent
            title="AC / Electrical Repairs"
            description="At AutoLand, we take a detail-oriented approach to AC and electrical repairs, ensuring reliable vehicle function. Our services enhance comfort, improve safety, and boost 
             efficiency. Using the latest technology and best practices, we deliver precise repairs. Trust our expertise to keep your car's systems in expert hands, from diagnosis to repair."
            imageSrc2={wedo2} 
             isReverse={true} 
          />
           <SectionComponent
            title="AC / Electrical Repairs"
            description="At AutoLand, we take a detail-oriented approach to AC and electrical repairs, ensuring reliable vehicle function. Our services enhance comfort, improve safety, and boost 
             efficiency. Using the latest technology and best practices, we deliver precise repairs. Trust our expertise to keep your car's systems in expert hands, from diagnosis to repair."
            imageSrc2={wedo2} 
             isReverse={false} 
          />
           <SectionComponent
            title="AC / Electrical Repairs"
            description="At AutoLand, we take a detail-oriented approach to AC and electrical repairs, ensuring reliable vehicle function. Our services enhance comfort, improve safety, and boost 
             efficiency. Using the latest technology and best practices, we deliver precise repairs. Trust our expertise to keep your car's systems in expert hands, from diagnosis to repair."
            imageSrc2={wedo2} 
             isReverse={true} 
          />
           <SectionComponent
            title="AC / Electrical Repairs"
            description="At AutoLand, we take a detail-oriented approach to AC and electrical repairs, ensuring reliable vehicle function. Our services enhance comfort, improve safety, and boost 
             efficiency. Using the latest technology and best practices, we deliver precise repairs. Trust our expertise to keep your car's systems in expert hands, from diagnosis to repair."
            imageSrc2={wedo2} 
             isReverse={false} 
          />
           <SectionComponent
            title="AC / Electrical Repairs"
            description="At AutoLand, we take a detail-oriented approach to AC and electrical repairs, ensuring reliable vehicle function. Our services enhance comfort, improve safety, and boost 
             efficiency. Using the latest technology and best practices, we deliver precise repairs. Trust our expertise to keep your car's systems in expert hands, from diagnosis to repair."
            imageSrc2={wedo2} 
             isReverse={true} 
          />
        </Flex>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Services;

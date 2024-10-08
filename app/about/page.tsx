"use client";
import { Box, Flex,  Heading, IconButton, SimpleGrid, Text,  } from "@chakra-ui/react";
import NavWhite from "../components/NavWhite";
import { Image } from "@chakra-ui/next-js";
import about_hero from "../assets/about_hero.webp";
import TestimonialCard from "../components/TestimonialCard";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong, FaPhone, FaWhatsapp } from "react-icons/fa6";
import Footer from "../components/Footer";
import theme from "../theme";
const testimonials = [
    {
      name: "Mr. Obiora",
      testimonial: "My car broke down at 10:15 AM on my way to an 11:00 AM appointment. I remembered PamTech Autoland and booked a repair online. In less than an hour, my car was fixed, and I made it on time. Thanks, PamTech, for saving the day!",
      rating: 4.8,
    },
    {
      name: "Mr. Adebayo",
      testimonial: "I had car trouble on my way to a business presentation, and I thought I'd never make it. I remembered PamTech Autoland and quickly booked a repair through their app. In no time, the team was on-site, and my car was back on the road. Thanks to PamTech Autoland, I arrived just in time. Truly a lifesaver!",
      rating: 4.9,
    },
    {
      name: "Mrs. Chinyere",
      testimonial: "My car started acting up during a busy day, and I had no time to waste. I booked a repair through PamTech Autoland's app, and within minutes, they sent help. My car was fixed so quickly, I barely missed a beat in my schedule. PamTech Autoland really made things stress-free!",
      rating: 4.9,
    },
  ];
function About() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
  return (
    <Box bgColor="backgroundWhite" >
      <NavWhite />
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
      <Flex
    
      flexDirection='column'
      padding={{
        base: "0.5rem 0.5rem",
        sm: "0.75rem 2rem",
        md: "1rem 4rem",
        lg: "1rem 6rem",
        myxl: "1rem 8rem",
      }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} 
          spacing={{ base: 8, lg: 16 }}  placeItems='center'    my={theme.vmargin} >
          <Box width='fit-content' maxWidth='500px' mx="auto">
            <Image src={about_hero} alt="about us" />
          </Box>
          <Flex flexDir="column" gap={4} textAlign="left">
            <Heading fontSize="md" fontWeight={600} color="secondaryBlue">
              Who We Are
            </Heading>
            <Heading fontWeight={700} color="secondaryBlue">
              About Autoland
            </Heading>
            <Text width={{base:'100%', lg:'80%' }} color="text">
              Pamtech Autoland is your top choice for quality auto parts,
              maintenance, and repairs. We care for your car to keep it safe and
              in great shape, using the latest technology for all your
              automotive needs
            </Text>
          </Flex>
        </SimpleGrid>
        <Box my={theme.vmargin}  px={{ base: 4, md: 8 }}
          py={{base:'2rem', md:'4rem', dxl:'6rem'}} textAlign="left"  bgColor='#F0F8FF'>
          <Heading fontSize="lg" fontWeight={600} color="secondaryBlue" mb="2rem">
            See What Others Are <br/> Saying About Us
          </Heading>
          <Flex justifyContent='right' mb={4}>

          <IconButton
              icon={<FaArrowLeftLong  fontSize='1.5rem' color='black'/>}
              onClick={handlePrevClick}
              aria-label="Previous Testimonial"
            />
             <IconButton
              icon={<FaArrowRightLong  color='black' fontSize='1.5rem' />}
              onClick={handleNextClick}
              aria-label="Next Testimonial"
            />
          </Flex>
          <Flex alignItems="center" justifyContent="center" gap="1rem">
           
            <TestimonialCard
              name={testimonials[currentTestimonialIndex].name}
              testimonial={testimonials[currentTestimonialIndex].testimonial}
              rating={testimonials[currentTestimonialIndex].rating}
            />
           
          </Flex>
        </Box>
      </Flex>
      <Footer/>
    </Box>
  );
}

export default About;

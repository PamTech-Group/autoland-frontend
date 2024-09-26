"use client";
import { Box, Flex,  Heading, IconButton, Text } from "@chakra-ui/react";
import NavWhite from "../components/NavWhite";
import { Image } from "@chakra-ui/next-js";
import about_hero from "../assets/about_hero.webp";
import TestimonialCard from "../components/TestimonialCard";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const testimonials = [
    {
      name: "Mr. Obiora",
      testimonial: "My car broke down at 10:15 AM on my way to an 11:00 AM appointment. I remembered PamTech Autoland and booked a repair online. In less than an hour, my car was fixed, and I made it on time. Thanks, PamTech, for saving the day!",
      rating: 4.8,
    },
    {
      name: "Ms. Jane Doe",
      testimonial: "PamTech Autoland provided excellent service. They were quick, efficient, and very professional. Highly recommend!",
      rating: 4.9,
    },
    {
      name: "Mr. John Smith",
      testimonial: "Great experience with PamTech Autoland. They fixed my car in no time and the customer service was top-notch.",
      rating: 4.7,
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
    <Box bgColor="backgroundWhite">
      <NavWhite />
      <Box
        padding={{
          base: "0.5rem 0.5rem",
          sm: "0.75rem 2rem",
          md: "1rem 4rem",
          lg: "1rem 4rem",
        }}
      >
        <Flex mt="3rem" gap="2rem" alignItems="center" justifyContent="center">
          <Flex flexGrow={1}>
            <Image src={about_hero} alt="about us" />
          </Flex>
          <Flex flexDir="column" gap={4} textAlign="left">
            <Heading fontSize="md" fontWeight={600} color="secondaryBlue">
              Who We Are
            </Heading>
            <Heading fontWeight={700} color="primaryBlue">
              About Autoland
            </Heading>
            <Text width="50%" color="text">
              Pamtech Autoland is your top choice for quality auto parts,
              maintenance, and repairs. We care for your car to keep it safe and
              in great shape, using the latest technology for all your
              automotive needs
            </Text>
          </Flex>
        </Flex>
        <Box mt="4rem" textAlign="left" padding='2rem' bgColor='#F0F8FF'>
          <Heading fontSize="lg" fontWeight={600} color="primaryBlue" mb="2rem">
            See What Others Are <br/> Saying About Us
          </Heading>
          <Flex justifyContent='right'>

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
      </Box>
    </Box>
  );
}

export default About;
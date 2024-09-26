import { Box, Flex, Text, Link, VStack, HStack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.webp'
import Image from "next/image";
function Footer() {
    const logoSize = useBreakpointValue({ base: 25, sm: 30 });

  return (
    <Box bg="primaryBlue" color="white"  padding={{
        base: "0.5rem 0.5rem",
        sm: "0.75rem 2rem",
        md: "1rem 4rem",
        lg: "1rem 4rem",
      }}>
      <Flex
        // maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <VStack align="start" spacing={4}>
           {/* Logo */}
           <Box>
            <Link href="/">
              <Image src={logo} alt="Pamtech Logo" height={logoSize} />
            </Link>
          </Box>
          <Text>Committed Service to humanity</Text>
        </VStack>

        <VStack align="start" spacing={2}>
          <Text fontWeight="bold">Quick Link</Text>
          <Link href="/about" _hover={{ textDecoration: "underline" }}>About us</Link>
          <Link href="/services" _hover={{ textDecoration: "underline" }}>Our Services</Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>Contact us</Link>
          <Link href="/appointment" _hover={{ textDecoration: "underline" }}>Book an Appointment</Link>
          <Link href="/privacy" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
        </VStack>

        <VStack align="start" spacing={2}>
          <Text fontWeight="bold">Address</Text>
          <Text>Plot CR/8 Port Harcourt Road, Near Hospital Junction, <br/> Owerri, Imo State.</Text>
          <Text>+234-811-500-4000</Text>
          <Text>+234-700-726-8324</Text>
          <Text>Email: info@pamtechautoland.com</Text>
          <HStack spacing={4} mt={2}>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} boxSize={5} />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
            <Link href="mailto:info@pamtechautoland.com" isExternal>
              <Icon as={FaEnvelope} boxSize={5} />
            </Link>
            <Link href="https://youtube.com" isExternal>
              <Icon as={FaYoutube} boxSize={5} />
            </Link>
          </HStack>
        </VStack>
      </Flex>
      <Box borderTop="1px" borderColor="gray.300" mt={10} pt={5}>
        <Text textAlign="center">Copyright © 2024 Pamtechautoland. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
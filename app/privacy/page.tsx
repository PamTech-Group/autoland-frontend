"use client";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import NavWhite from "../components/NavWhite";
import Footer from "../components/Footer";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";


const Privacy = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 2rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    myxl: "2rem 8rem",
  });
  const headingFontSize = useBreakpointValue({ base: "2rem", md: "2.5rem", lg: "3rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });

  return (
    <Box bg="backgroundWhite">
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
        color="text"
        flexDirection="column"
        justifyContent="left"
        padding={contentPadding}
      >
        <Heading my="2rem" fontSize={headingFontSize}>Privacy Policy</Heading>
        <VStack spacing="1.5rem" align="stretch">
          <Text textAlign="left" fontSize={textFontSize}>
          Pamtech Autoland  is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website, www.pamtechgroup.com. By accessing or using our website, you agree to the terms outlined in this Privacy Policy.
          </Text>
          <Text textAlign="left" fontSize={textFontSize}>
          We collect both personal information, such as your name and email address, and non-personal information, such as your IP address and browser type. We collect personal information that you voluntarily provide to us, and we automatically collect non-personal information when you visit our website. We also use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us understand how you use our website and enable us to provide you with a personalized experience. You can manage your cookie preferences through your browser settings.
          </Text>
          <Text textAlign="left" fontSize={textFontSize}>
            We may use the information we collect for various purposes, We may use the information we collect for various purposes, including providing, operating, and maintaining our website, responding to your inquiries or requests, sending you newsletters, updates, and promotional materials, analyzing usage trends and improving our website, complying with legal obligations, and preventing fraudulent activities.
          </Text>
          <Text textAlign="left" fontSize={textFontSize}>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users. We may also disclose your information if required by law or in response to valid legal requests from governmental authorities. In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring party.
          </Text>
          <Text textAlign="left" fontSize={textFontSize}>
          We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security. You have the right to access and update your personal information, opt-out of receiving promotional communications, and request the deletion of your personal information. Our website is not intended for individuals under the age of 13, and we do not knowingly collect personal information from children under 13. We may update this Privacy Policy from time to time, and we will notify you of any material changes. If you have any questions or concerns about this Privacy Policy or our data practices, please contact us.
          </Text>
          <Box textAlign="left" fontSize={textFontSize}>
            Pamtech Group <br />
            Website <Link href="pamtechgroup.com">pamtechgroup.com</Link> <br />
            Email:{" "}
            <Link href="mailto:info@pamtechgroup.com">info@pamtechgroup.com</Link>
            <br />
            Phone:{" "}
            <Link href="tel:+2348037077608">
              +234 803 7077 608
            </Link>
            <br />
            Address: Plot CR17 Housing Area T, Port Harcourt Rd, behind Apams,
            New Owerri, Owerri, Imo State, Nigeria.
          </Box>
        </VStack>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Privacy;
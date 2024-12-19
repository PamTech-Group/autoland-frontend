"use client";

import {
  Box,
  Container,
  VStack,
  Text,
  Flex,
  IconButton,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Heading,
  SimpleGrid,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  FaBars,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import Sidebar from "@/app/components/SideBar";

const MainContent = styled(Box)`
  background: #111322;
  min-height: 100vh;
  margin-left: 250px;
  width: calc(100% - 250px);
  color: white;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const GlassCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(36, 39, 59, 0.7),
    rgba(28, 31, 48, 0.9)
  );
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactCard = styled(GlassCard)`
  cursor: pointer;
  text-align: center;
  padding: 30px;
`;

export default function SupportPage() {
  const toast = useToast();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you soon!",
      status: "success",
      duration: 3000,
    });
  };

  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>

      <Drawer
        autoFocus={false}
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
        returnFocusOnClose={false}
        onOverlayClick={onDrawerClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg="#1a1f37">
          <Sidebar onClose={onDrawerClose} />
        </DrawerContent>
      </Drawer>

      <MainContent>
        <Container maxW="container.xl" py={8} px={{ base: 4, lg: 12 }}>
          {/* Mobile Header */}
          <Flex
            mb={8}
            justify="space-between"
            align="center"
            display={{ base: "flex", lg: "none" }}
          >
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={onDrawerOpen}
              variant="ghost"
              color="white"
            />
          </Flex>

          {/* Page Header */}
          <VStack spacing={4} align="start" mb={12}>
            <Heading size="lg">Support Center</Heading>
            <Text color="gray.400">
              {`  We're here to help! Reach out to us through any of these channels.`}
            </Text>
          </VStack>

          {/* Contact Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={12}>
            <ContactCard>
              <Icon as={FaPhone} boxSize={8} color="blue.400" mb={4} />
              <Heading size="sm" mb={2}>
                Phone Support
              </Heading>
              <Text color="gray.400" mb={4}>
                Available 24/7
              </Text>
              <Text color="blue.400" fontWeight="bold">
                +234 801 234 5678
              </Text>
            </ContactCard>

            <ContactCard>
              <Icon as={FaEnvelope} boxSize={8} color="blue.400" mb={4} />
              <Heading size="sm" mb={2}>
                Email Us
              </Heading>
              <Text color="gray.400" mb={4}>
                Quick Response Time
              </Text>
              <Text color="blue.400" fontWeight="bold">
                support@autoland.com
              </Text>
            </ContactCard>

            <ContactCard>
              <Icon as={FaWhatsapp} boxSize={8} color="blue.400" mb={4} />
              <Heading size="sm" mb={2}>
                WhatsApp
              </Heading>
              <Text color="gray.400" mb={4}>
                Instant Messaging
              </Text>
              <Text color="blue.400" fontWeight="bold">
                +234 801 234 5678
              </Text>
            </ContactCard>
          </SimpleGrid>

          {/* Office Location */}
          <GlassCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="start"
              gap={8}
            >
              <Box flex={1}>
                <Heading size="md" mb={4}>
                  Visit Our Office
                </Heading>
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} color="blue.400" />
                    <Text>123 Victoria Island, Lagos, Nigeria</Text>
                  </HStack>
                  <Text color="gray.400">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </Text>
                </VStack>
              </Box>
              <Box
                flex={1}
                h="300px"
                bg="whiteAlpha.100"
                rounded="lg"
                position="relative"
                overflow="hidden"
              >
                {/* Add your map component here */}
                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="gray.500"
                >
                  Map View
                </Text>
              </Box>
            </Flex>
          </GlassCard>

          {/* Contact Form */}
          <Box my={12}>
            <GlassCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="md" mb={6}>
                Send us a Message
              </Heading>
              <form onSubmit={handleSubmit}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
                  <FormControl>
                    <FormLabel color="gray.400">Name</FormLabel>
                    <Input
                      placeholder="Your name"
                      bg="whiteAlpha.100"
                      border="none"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.400">Email</FormLabel>
                    <Input
                      placeholder="Your email"
                      bg="whiteAlpha.100"
                      border="none"
                    />
                  </FormControl>
                </SimpleGrid>
                <FormControl mb={6}>
                  <FormLabel color="gray.400">Message</FormLabel>
                  <Textarea
                    placeholder="How can we help?"
                    bg="whiteAlpha.100"
                    border="none"
                    rows={5}
                  />
                </FormControl>
                <Button colorScheme="blue" type="submit">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </Box>

          {/* Social Media */}
          <GlassCard>
            <VStack spacing={4} align="center">
              <Heading size="md">Connect With Us</Heading>
              <HStack spacing={6}>
                <ChakraLink href="#" isExternal>
                  <Icon as={FaFacebook} boxSize={6} color="blue.400" />
                </ChakraLink>
                <ChakraLink href="#" isExternal>
                  <Icon as={FaTwitter} boxSize={6} color="blue.400" />
                </ChakraLink>
                <ChakraLink href="#" isExternal>
                  <Icon as={FaInstagram} boxSize={6} color="blue.400" />
                </ChakraLink>
                <ChakraLink href="#" isExternal>
                  <Icon as={FaWhatsapp} boxSize={6} color="blue.400" />
                </ChakraLink>
              </HStack>
            </VStack>
          </GlassCard>
        </Container>
      </MainContent>
    </Flex>
  );
}

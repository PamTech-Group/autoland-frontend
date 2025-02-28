"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Select,
  Skeleton,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import bgImage from "../assets/autoclubBg.webp";
import benefit from "../assets/autoclubImage.webp";
import YouTube from "react-youtube";
import { FaCarSide } from "react-icons/fa";
import {
  FaBell,
  FaCar,
  FaGasPump,
  FaPhone,
  FaWhatsapp,
  FaWrench,
} from "react-icons/fa6";
import { Image } from "@chakra-ui/next-js";
import PackagesSection from "../components/Package";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

interface RegistrationData {
  fullName: string;
  email: string;
  phoneNumber: string;
  membershipPackage: string;
}
function Autoclub() {
  const [loading, setLoading] = useState<boolean>(true); // Add state for loading
  const [buttonloading, setbuttonLoading] = useState<boolean>(false); // Add state for loading
  const toast = useToast();
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    membershipPackage: "",
  });
  const opts = {
    height: "320px",
    width: "330px",
    playerVars: {
      autoplay: 0,
    },
  };
  const handleReady = () => {
    setLoading(false); // Set loading to false when video is ready
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registrationData) {
      toast({
        title: "details missing",
        description: "plwease fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      setbuttonLoading(true);
      try {
        const response = await axios.post(
          "https://autoland-admin-backend.onrender.com/api/autoclub/join",
          registrationData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // Handle success (e.g., show a success message)
        if (response.status === 201) {
          setbuttonLoading(false);
          toast({
            title: "Submitted!",
            description: "You'll hear from us soon",
            status: "success",
            duration: 4000,
            isClosable: true,
            position: "top-right",
          });
        }
      } catch (error) {
        setbuttonLoading(false);

        // Handle error (e.g., show an error message)
        toast({
          title: "An Error Occurred.",
          description: "please try again",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      }
    }
  };
  return (
    <Box bgColor="backgroundWhite">
      <Box color="whiteText" height={{ base: "fit-content", xl: "100vh" }}>
        <Flex
          flexDirection="column"
          zIndex={1}
          height="100%"
          bgImage={bgImage.src}
          bgSize="cover"
          bgRepeat="no-repeat"
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
              align="flex-start"
              spacing={6}
              width={{ base: "100%", xl: "45%" }}
              // mb={{ base: 8, lg: 0 }}
            >
              <Heading as="h1" size={{ base: "md", md: "lg", myxl: "xl" }}>
                Join our Auto-Club Team To Experience The Freedom of The Road.
              </Heading>
              <Text fontSize={{ base: "md", xl: "lg" }}>
                Get unlimited car maintenance and peace of mind with our
                convenient subscription service for your car.
              </Text>
            </VStack>
            {/* Right side video and  */}
            <Box
              my={{ base: "2rem", lg: "none" }}
              mx={{
                base: "auto",
                xl: "inherit",
              }}
            >
              {loading && (
                <Box height={{ base: "250px", md: "300px", dxl: "400px" }}>
                  {/* Skeleton loader */}
                  <Skeleton height="100%" width="100%" />
                </Box>
              )}
              <YouTube
                videoId="vXKotssNyIA"
                opts={opts}
                onReady={handleReady}
              />
            </Box>
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
      <Box
        padding={{
          base: "0.5rem 0.5rem",
          sm: "0.75rem 2rem",
          md: "1rem 4rem",
          lg: "1rem 6rem",
          myxl: "1rem 8rem",
        }}
      >
        <Flex
          my="2rem"
          flexDirection="column"
          justifyContent="left"
          width={{ base: "100%", lg: "50%" }}
        >
          <Heading fontSize="md" color="secondaryBlue" mb={6}>
            Benefit of Autoclub
          </Heading>
          <Text color="text" fontWeight={500} fontSize="md">
            The VIP Auto Club is designed exclusively for you our esteemed
            customer who value convenience, reliability, and exceptional
            automotive service.
          </Text>
        </Flex>
        {/* BENEFITS SECTION */}
        <Box color="text">
          <Text fontSize="md" fontWeight="bold" mb={0} color="secondaryBlue">
            Benefits:
          </Text>
          <Flex
            flexWrap="wrap"
            flexDirection={{ base: "column", xl: "row" }}
            justifyContent={{ base: "center", xl: "space-between" }}
            gap={{ base: "2rem" }}
            alignItems="center"
            mb="2rem"
          >
            <Flex flexDirection="column" width={{ base: "100%", lg: "40%" }}>
              <Flex
                flexBasis={{ base: "100%", lg: "48%" }}
                mb={8}
                alignItems="center"
              >
                <Box flexShrink={0} mr={4} bgColor="buttonOrange">
                  <Icon
                    p={2}
                    boxSize={10}
                    color="backgroundWhite"
                    as={FaWrench}
                  />
                </Box>
                <Box pb={2} borderBottom="2px solid #FF0000">
                  <Text fontWeight="bold" fontSize="md" mb={2} color="text">
                    Express Lube Service:
                  </Text>
                  <Text color="text">
                    Get fast, efficient lube services to keep your vehicle
                    running smoothly.
                  </Text>
                </Box>
              </Flex>
              <Flex
                flexBasis={{ base: "100%", md: "48%" }}
                mb={8}
                alignItems="center"
              >
                <Box flexShrink={0} mr={4} bgColor="buttonOrange">
                  <Icon p={2} boxSize={10} color="backgroundWhite" as={FaCar} />
                </Box>
                <Box pb={2} borderBottom="2px solid #FF0000">
                  <Text fontWeight="bold" fontSize="md" mb={2} color="text">
                    Comprehensive Vehicle Scanning:
                  </Text>
                  <Text color="text">
                    Your vehicle undergoes reliability scans at each service to
                    ensure optimal performance.
                  </Text>
                </Box>
              </Flex>
              <Flex
                flexBasis={{ base: "100%", md: "48%" }}
                mb={8}
                alignItems="center"
              >
                <Box flexShrink={0} mr={4} bgColor="buttonOrange">
                  <Icon
                    p={2}
                    boxSize={10}
                    color="backgroundWhite"
                    as={FaGasPump}
                  />
                </Box>
                <Box pb={2} borderBottom="2px solid #FF0000">
                  <Text fontWeight="bold" fontSize="md" mb={2} color="text">
                    Discounted Fuel Rates
                  </Text>
                  <Text color="text">
                    Your vehicle is scanned at every service to ensure reliable
                    performance.
                  </Text>
                </Box>
              </Flex>
              <Flex
                flexBasis={{ base: "100%", md: "48%" }}
                mb={8}
                alignItems="center"
              >
                <Box flexShrink={0} mr={4} bgColor="buttonOrange">
                  <Icon
                    p={2}
                    boxSize={10}
                    color="backgroundWhite"
                    as={FaCarSide}
                  />
                </Box>
                <Box pb={2} borderBottom="2px solid #FF0000">
                  <Text fontWeight="bold" fontSize="md" mb={2} color="text">
                    Valet Pick-up & Delivery
                  </Text>
                  <Text color="gray.600">
                    Team members enjoy convenient vehicle pick-up and drop-off
                    services upon request.
                  </Text>
                </Box>
              </Flex>
              <Flex
                flexBasis={{ base: "100%", md: "48%" }}
                mb={8}
                alignItems="center"
                width="100%"
              >
                <Box flexShrink={0} mr={4} bgColor="buttonOrange">
                  <Icon
                    p={2}
                    boxSize={10}
                    color="backgroundWhite"
                    as={FaBell}
                  />
                </Box>
                <Box pb={2} borderWidth="100%" borderBottom="2px solid #FF0000">
                  <Text fontWeight="bold" fontSize="md" mb={2} color="text">
                    Service Reminders:
                  </Text>
                  <Text color="text">
                    Team members receive timely reminders to keep your vehicle
                    in top condition.
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              mt={8}
              height="70%"
            >
              <Image src={benefit} alt="Car" />
            </Flex>
          </Flex>
        </Box>
      </Box>
      {/* BODY */}

      {/* PACKAGE SECTION */}

      <Box>
        <PackagesSection />
      </Box>
      {/**JOIN AUTOCLUB SECTION */}
      <Box my="2rem">
        <Box
          borderRadius="lg"
          bgColor="primaryBlue"
          py={{
            base: 10,
            dxl: 12,
          }}
          px={{
            base: 10,
            lg: 15,
            dxl: 20,
          }}
          maxW={{
            base: "100%",
            lg: "80%",
            dxl: "60%",
          }}
          margin="0 auto"
        >
          <Box>
            <VStack spacing={8} align="left" minWidth="100%">
              <Heading as="h2" size="xl" color="white">
                Join Auto-Club Now
              </Heading>
              <Text fontSize="md" color="white" fontWeight={300}>
                You are just a single step away from joining the best team to
                work with, look for a perfect opportunity with us and become a
                part of the Auto-Club family.
              </Text>
              <Flex flexDir="column" as="form" gap="2rem">
                <Flex gap="2rem" flexDirection={{ base: "column", lg: "row" }}>
                  <Input
                    name="fullName"
                    width="100%"
                    placeholder="Enter Your Full Name"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.500" }}
                    onChange={handleChange}
                  />
                  <Input
                    name="email"
                    placeholder="Enter Your E-Mail"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.500" }}
                    onChange={handleChange}
                  />
                </Flex>
                <Flex gap="2rem" flexDirection={{ base: "column", lg: "row" }}>
                  <Input
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.500" }}
                    onChange={handleChange}
                  />
                  <Select
                    name="membershipPackage"
                    placeholder="What membership are you interested in?"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.200", opacity: "0.5" }}
                    onChange={handleChange}
                  >
                    <option
                      style={{ backgroundColor: "#0D2B57" }}
                      value="Silver package"
                    >
                      Silver Package
                    </option>
                    <option
                      style={{ backgroundColor: "#0D2B57" }}
                      value="Gold package"
                    >
                      Gold Package
                    </option>
                    <option
                      style={{ backgroundColor: "#0D2B57" }}
                      value="Diamond package"
                    >
                      Diamond Package
                    </option>
                    <option
                      style={{ backgroundColor: "#0D2B57" }}
                      value="Premium Package"
                    >
                      Premium Package
                    </option>
                  </Select>
                </Flex>
                <Button
                  isLoading={buttonloading}
                  onClick={handleSubmit}
                  mt="3rem"
                  type="submit"
                  width="full"
                  bg="white"
                  color="secondaryBlue"
                  _hover={{ bg: "whiteAlpha.900" }}
                >
                  Submit
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Box>
      {/* FOOTER */}
      <Footer />
    </Box>
  );
}

export default Autoclub;

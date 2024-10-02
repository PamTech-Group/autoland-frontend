"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Select,
  Textarea,
  Checkbox,
  Button,
  VStack,
  FormControl,
  FormLabel,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import NavWhite from "../components/NavWhite";
import theme from "../theme";
import Footer from "../components/Footer";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

function Booking() {
  return (
    <Box bgColor="backgroundWhite">
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
      <NavWhite />
      <Flex
        gap="1.5rem"
        width="100%"
        flexDirection="column"
        bgColor="primaryBlue"
        color="white"
        padding={{ base: "3rem 1.5rem", md: "4rem 3rem", lg: "6rem 9rem" }}
      >
        <Text fontWeight={700} fontSize="md">
          Booking
        </Text>
        <Heading fontWeight={700} fontSize={{ base: "2xl" }}>
          Book an Appointment Now
        </Heading>
        <Text
          fontSize="md"
          fontWeight={600}
        >{`Schedule your appointment today for personalized 
          service and expert support. It's quick, easy, and convenient`}</Text>
      </Flex>
      <Box
        padding={{
          base: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        }}
      >
        <VStack
          my={theme.vmargin}
          spacing={{ base: 6, md: 8, lg: 10 }}
          align="stretch"
          color="text"
          mx='auto'
          maxWidth={{
            base: '100%',
            myxl: '80%',
            dxl: '65%',
          }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 8, lg: 12 }}
          >
            <FormControl>
              <FormLabel fontWeight={500}>Car make</FormLabel>
              <Input
                paddingY="1.5rem"
                bg="inputBg"
                _placeholder={{
                  color: "#00000080",
                }}
                placeholder="Toyota"
                borderRadius="md"
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={500}>Model</FormLabel>
              <Input
                paddingY="1.5rem"
                bg="inputBg"
                _placeholder={{
                  color: "#00000080",
                }}
                placeholder="Highlander"
                borderRadius="md"
                focusBorderColor="transparent"
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 8, lg: 12 }}
          >
            <FormControl>
              <FormLabel fontWeight={500}>Year</FormLabel>
              <Select
              colorScheme="whiteAlpha"
                size="lg"
                _placeholder={{ color: "#00000080" }}
               
                bgColor="inputBg"
                focusBorderColor="transparent"
                color= "#00000080"
              >
                <option style={{backgroundColor:'#33333333'}} value="2008">2008</option>
                <option style={{backgroundColor:'#33333333'}} value="2009">2009</option>
                <option style={{backgroundColor:'#33333333'}} value="2010">2010</option>
                <option style={{backgroundColor:'#33333333'}} value="2011">2011</option>
                <option style={{backgroundColor:'#33333333'}} value="2012">2012 </option>
                <option style={{backgroundColor:'#33333333'}} value="2013">2013</option>
                <option style={{backgroundColor:'#33333333'}} value="2014">2014</option>
                <option style={{backgroundColor:'#33333333'}} value="2015">2015</option>
                <option style={{backgroundColor:'#33333333'}} value="2016">2016</option>
                <option style={{backgroundColor:'#33333333'}} value="2017">2017</option>
                <option style={{backgroundColor:'#33333333'}} value="2018">2018</option>
                <option style={{backgroundColor:'#33333333'}} value="2019">2019</option>
                <option style={{backgroundColor:'#33333333'}} value="2020">2020</option>
                <option style={{backgroundColor:'#33333333'}} value="2021">2021</option>
                <option style={{backgroundColor:'#33333333'}} value="2022">2022</option>
                <option style={{backgroundColor:'#33333333'}} value="2023">2023</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={500}>Engine Type:</FormLabel>
              <Input
                paddingY="1.5rem"
                bg="inputBg"
                _placeholder={{
                  color: "#00000080",
                }}
                placeholder="2GR"
                borderRadius="md"
                focusBorderColor="transparent"
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 8, lg: 12 }}
          >
            <FormControl>
              <FormLabel fontWeight={500}>City</FormLabel>
              <Input
                paddingY="1.5rem"
                bg="inputBg"
                _placeholder={{
                  color: "#00000080",
                }}
                placeholder="Enter your city"
                borderRadius="md"
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={500}>Workshop Centre</FormLabel>
              <Select
              
                size="lg"
               color= "#00000080"
                bgColor="inputBg"
                focusBorderColor="transparent"
              >
                 <option style={{backgroundColor:'#33333333'}} value="owerri">Owerri</option>
                 <option style={{backgroundColor:'#33333333'}} value="ph">Portharcourt</option>
              </Select>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 8, lg: 12 }}
          >
            <FormControl>
              <FormLabel fontWeight={500}>Full Name</FormLabel>
              <Input
                paddingY="1.5rem"
                bg="inputBg"
                _placeholder={{
                  color: "#00000080",
                }}
                placeholder="Enter your full name"
                borderRadius="md"
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={500}>Phone NO:</FormLabel>
              <Input
                paddingY="1.5rem"
                bg="inputBg"
                _placeholder={{
                  color: "#00000080",
                }}
                placeholder="Enter your phone number"
                borderRadius="md"
                focusBorderColor="transparent"
              />
            </FormControl>
          </SimpleGrid>
          <FormControl>
            <FormLabel fontWeight={500}>Email</FormLabel>
            <Input
              paddingY="1.5rem"
              bg="inputBg"
              _placeholder={{
                color: "#00000080",
              }}
              placeholder="Enter your email"
              borderRadius="md"
              focusBorderColor="transparent"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Report an issue with your car</FormLabel>
            <Textarea
              bgColor="inputBg"
              _placeholder={{
                color: "#00000080",
              }}
              placeholder="The issues you have with your vehicle"
              rows={4}
              borderRadius="md"
              focusBorderColor="transparent"
            />
          </FormControl>
          <Checkbox colorScheme="gray" defaultChecked>
            I hereby confirm that I agree to Pamtech Terms and Conditions
          </Checkbox>
          <Button
            borderRadius="lg"
            fontSize="md"
            padding={{ base: "1.5rem", md: "2rem" }}
            width={{ base: "100%", xl: "fit-content" }}
            bgColor="buttonOrange"
            _hover={{
              bgColor: "#961615",
            }}
            _active={{
              bgColor: "#bf1e1d",
            }}
          >
            Submit
          </Button>
        </VStack>
      </Box>

      <Footer />
    </Box>
  );
}

export default Booking;

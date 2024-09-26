'use client'
import { Box, Flex, Heading, Text, Input, Select, Textarea, Checkbox, Button, VStack, HStack, FormControl, FormLabel } from "@chakra-ui/react"
import NavWhite from "../components/NavWhite"

function Booking(){
    return (
      <Box bgColor="backgroundWhite">
        <NavWhite />
        <Flex flexDirection='column' bgColor='primaryBlue' color='white' padding='1.5rem 2rem 1rem 2rem'>
          <Text>
            Booking
          </Text>
          <Heading>Book an Appointment Now</Heading>
          <Text>{`Schedule your appointment today for personalized 
          service and expert support. It's quick, easy, and convenient`}</Text>
        </Flex>
        <Box
          padding={{
            base: "0.5rem 0.5rem",
            sm: "0.75rem 2rem",
            md: "1rem 4rem",
            lg: "1rem 4rem",
          }}
        >
          <VStack spacing={4} align="stretch" color='text'>
            <HStack spacing={10}>
              <FormControl>
                <FormLabel>Car make</FormLabel>
                <Input paddingY='1.5rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
              <FormControl>
                <FormLabel>Model</FormLabel>
                <Input paddingY='1.5rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Year</FormLabel>
                <Select placeholder="2008" bgColor='inputBg' focusBorderColor="transparent">
                  {/* Add more year options here */}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Engine Type:</FormLabel>
                <Input paddingY='1.5rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input paddingY='1.5rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
              <FormControl>
                <FormLabel>Workshop Centre</FormLabel>
                <Select placeholder="Owerri" bgColor='inputBg' focusBorderColor="transparent">
                  {/* Add more workshop options here */}
                </Select>
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input paddingY='1.5rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
              <FormControl>
                <FormLabel>Phone NO:</FormLabel>
                <Input paddingY='1.5rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input paddingY='1.5rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
            </FormControl>
            <FormControl>
              <FormLabel>Report an issue with your car</FormLabel>
              <Textarea bgColor='inputBg' placeholder="The issues you have with your vehicle" rows={4} />
            </FormControl>
            <Checkbox>
              I hereby confirm that I have read and I agree to the Jumia seller contract, Jumia codes, policies and
              guidelines and Privacy Notice and Cookie Notice referenced therein.
            </Checkbox>
            <Button colorScheme="red" size="lg">
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>
    )
}

export default Booking


// 2GR
// 1ZZ
// 2AZ
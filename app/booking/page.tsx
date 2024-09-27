'use client'
import { Box, Flex, Heading, Text, Input, Select, Textarea, Checkbox, Button, VStack, HStack, FormControl, FormLabel } from "@chakra-ui/react"
import NavWhite from "../components/NavWhite"
import theme from "../theme"
import Footer from "../components/Footer"

function Booking(){
    return (
      <Box bgColor="backgroundWhite">
        <NavWhite />
        <Flex gap='1.5rem' width='100%'  flexDirection='column' bgColor='primaryBlue' color='white' padding='6rem 9rem'>
          <Text fontWeight={700} fontSize='md'>
            Booking
          </Text>
          <Heading fontWeight={700} >Book an Appointment Now</Heading>
          <Text fontSize='md' fontWeight={600}>{`Schedule your appointment today for personalized 
          service and expert support. It's quick, easy, and convenient`}</Text>
        </Flex>
        <Box
          padding={{
            base: "0.5rem 0.5rem",
            sm: "0.75rem 2rem",
            md: "1rem 4rem",
            lg: "1rem 6rem",
            myxl: "1rem 8rem",
          }}
        >
          <VStack my={theme.vmargin} spacing={10} align="stretch" color='text'>
            <HStack spacing={12}>
              <FormControl>
                <FormLabel fontWeight={500}>Car make</FormLabel>
                <Input paddingY='2rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={500}>Model</FormLabel>
                <Input paddingY='2rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Highlander" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
            </HStack>
            <HStack spacing={12}>
              <FormControl>
                <FormLabel fontWeight={500}>Year</FormLabel>
                <Select paddingY='2rem' placeholder="2008" bgColor='inputBg' focusBorderColor="transparent">
                  {/* Add more year options here */}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={500}>Engine Type:</FormLabel>
                <Input paddingY='2rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
            </HStack>
            <HStack spacing={12}>
              <FormControl>
                <FormLabel fontWeight={500}>City</FormLabel>
                <Input paddingY='2rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={500}>Workshop Centre</FormLabel>
                <Select placeholder="Owerri" bgColor='inputBg' focusBorderColor="transparent">
                  {/* Add more workshop options here */}
                </Select>
              </FormControl>
            </HStack>
            <HStack spacing={12}>
              <FormControl>
                <FormLabel fontWeight={500}>Full Name</FormLabel>
                <Input paddingY='2rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={500}>Phone NO:</FormLabel>
                <Input paddingY='2rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel fontWeight={500}>Email</FormLabel>
              <Input paddingY='2rem' bg='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="Toyota" borderRadius='0'  focusBorderColor="transparent"  />
            </FormControl>
            <FormControl>
              <FormLabel>Report an issue with your car</FormLabel>
              <Textarea bgColor='inputBg' _placeholder={{
                    color: '#00000080'
                }} placeholder="The issues you have with your vehicle" rows={4} />
            </FormControl>
            <Checkbox colorScheme="gray" defaultChecked >
              I hereby confirm that I agree to Pamtech Terms and Conditions
            </Checkbox>
            <Button 
             borderRadius='lg'
              fontSize='md' 
              padding={'2rem'}
              bgColor="buttonOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }} >
              Submit
            </Button>
          </VStack>
        </Box>

        <Footer/>
      </Box>
    )
}

export default Booking


// 2GR
// 1ZZ
// 2AZ
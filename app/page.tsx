'use client'
import { Box, VStack } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box bgColor='backgroundWhite'>
      <Hero />
      <VStack>

      <Body/>
      </VStack>
      <Footer/>
    </Box>
  );
}

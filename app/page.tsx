'use client'
import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box bg='white'>
      <Hero />
      <Body/>
      <Footer/>
    </Box>
  );
}

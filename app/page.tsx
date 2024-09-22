'use client'
import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Body from "./components/Body";

export default function Home() {
  return (
    <Box bg='white'>
      <Hero />
      <Body/>
    </Box>
  );
}

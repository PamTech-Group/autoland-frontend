import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,

  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import logo from  '../assets/logo.webp'
import { Image, Link } from "@chakra-ui/next-js";
import { HamburgerIcon } from "@chakra-ui/icons";
import theme from "../theme";


function Nav() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();

  // Use breakpoints for responsive design
  const logoSize = useBreakpointValue({ base: 25, sm: 35 });
  const navSpacing = useBreakpointValue({ base: 2, sm: 4, md: 6, lg: 8 });
  return (

      <Box
      width='100%'
       
        bg={"transparent"}

        padding={{
          base: "0.5rem 0.5rem",
          sm: "0.75rem 2rem",
          md: "1rem 4rem",
          lg: "1rem 6rem",
          dxl: "1rem 8rem",
        }}
      >
        <Flex
          h={{
            base: 10,
            md: 16,
          }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* Logo */}
          <Box>
            <Link href="/">
              <Image src={logo} alt="Pamtech Logo" height={logoSize} />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Flex
              as={"nav"}
              
              gap={navSpacing}
              display={{ base: "none", xl: "flex" }} // Show from medium screens and above
              //   fontWeight={theme.fontWeights.medium}
              color="white"
              padding='.7rem 1.5rem'
              borderRadius='lg'
              bgColor='rgba(243, 243, 243, 0.13)'

           fontSize='md' >
              <Link style={{textDecoration:'none'}} fontSize='md' fontWeight={400} href="/about">
                About Us
              </Link>
  
              <Link style={{textDecoration:'none'}}  fontSize='md'  fontWeight={400} href="/services">
                Our Services
              </Link>
  
              <Link style={{textDecoration:'none'}}  fontSize='md' fontWeight={400} href="/autoclub">
                Join Autoclub
              </Link>
            </Flex>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", xl: "none" }} // Display on small screens
            onClick={onMobileMenuOpen}
            variant="ghost"
            color={"white"}
            fontSize={{ base: "1.2rem", sm: "1.5rem" }}
          />

          
          <HStack
            spacing={4}
            display={{ base: "none", xl: "flex" }} // Show from medium screens
          >
            <Button
            
              as="a"
              href="/booking"
              fontSize='md' 
              padding={theme.buttonPadding}
              bgColor="buttonOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              
            >
              Book an Appointment
            </Button>
          </HStack>

          {/* Mobile Menu Drawer */}
          <Drawer
            isOpen={isMobileMenuOpen}
            placement="right"
            onClose={onMobileMenuClose}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="primaryBlue" color='white'>
              <DrawerCloseButton />

              <DrawerBody pt="6rem">
                <VStack spacing={6} align="start">
                  <Link style={{textDecoration:'none'}} href="/about" onClick={onMobileMenuClose}>
                    About Us
                  </Link>

                  <Link style={{textDecoration:'none'}} href="/services" onClick={onMobileMenuClose}>
                    Our Services
                  </Link>
                  <Link style={{textDecoration:'none'}} href="/autoclub" onClick={onMobileMenuClose}>
                  Join Autoclub

                  </Link>

                  <Link style={{textDecoration:'none'}} href="/booking" onClick={onMobileMenuClose}>
                    Book an Appointment
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
  
  );
}

export default Nav;

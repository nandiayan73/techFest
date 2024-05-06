import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading,
    HStack
  } from '@chakra-ui/react';
  import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
              <HStack>
                {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                {/* <img  src="./img/logo.png"  width="35%"></img> */}
              </HStack>
              </Box>
              <Text fontSize={'sm'}>
                © SVIST, Gobindapur. All rights reserved
              </Text>
              
            </Stack> 
            <Stack align={'flex-start'}>
              <Heading>Admin </Heading>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading>Panel</Heading>
              {/* <Link href={'/register'}>Register</Link> */} 
              {/* <Link href={'#'}>Legal</Link> */}
              {/* <Link href={'#'}>Privacy Policy</Link> */}
              {/* <Link href={'#'}>Satus</Link> */}
            /* </Stack>
            <Stack align={'flex-start'}>
              <Heading>Want to contact us?</Heading>
              <Stack direction={'row'}>
                <Link href=""><FaInstagram></FaInstagram></Link>
                <Link href=""><FaTwitter></FaTwitter></Link>
                <Link href="https://www.facebook.com/official4svist"><FaFacebook></FaFacebook></Link>
                <Link href=""><FaYoutube></FaYoutube></Link>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
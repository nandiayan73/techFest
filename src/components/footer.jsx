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
    HStack,
    Button
  } from '@chakra-ui/react';
  import { useEffect } from 'react';
  import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  export default function Footer() {
    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  },[])
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
           <center><Button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} >
        Scroll to top
      </Button></center> 
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
              <HStack>
                {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                <img  src="./img/logo1.png"   width="55%"></img>
              </HStack>
              </Box>
              <Text fontSize={'sm'}>
                © SVIST, Gobindapur, 2023. All rights reserved
              </Text>
              
            </Stack> 
            <Stack align={'flex-start'}>
              <Heading>College</Heading>
              <Link href={'about'}>About us</Link>
              <Link href={'/pasttour'}>Past Tour</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading>Support</Heading>
              <Link href={'/members'}>Members</Link>
              {/* <Link href={'#'}>Legal</Link> */}
              {/* <Link href={'#'}>Privacy Policy</Link> */}
              {/* <Link href={'#'}>Satus</Link> */}
            </Stack>
            <Stack align={'flex-start'}>
              <Heading>Want to contact us?</Heading>
              <Stack direction={'row'}>
                {/* <Link href=""><FaInstagram></FaInstagram></Link>
                <Link href=""><FaTwitter></FaTwitter></Link> */}
                {/* <Link href="https://www.facebook.com/official4svist"><FaFacebook ></FaFacebook></Link> */}
                {/* <Link href="info@svistevent.live" style={{paddingBottom:"20px"}}><EmailIcon></EmailIcon></Link> */}
                <Button style={{width:"70px"}}> <Link href="https://www.facebook.com/official4svist"><FaFacebook ></FaFacebook></Link></Button>
                <Button style={{width:"70px"}}>  <Link href="https://www.youtube.com/@missioncareer3104"><FaYoutube></FaYoutube></Link></Button>
                <Button style={{width:"70px"}}> <Link href="https://www.instagram.com/swami_vivekananda_group" ><FaInstagram></FaInstagram></Link> </Button>
                <Button style={{width:"70px"}}> <Link href="https://www.website.svist@gmail.com" >✉️</Link> </Button>
                
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
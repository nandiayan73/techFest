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
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <center>
          <Button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Scroll to top
          </Button>
        </center>
        <div className="map-container" style={{ textAlign: "center" }}>
        <center>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.3758532894394!2d88.38775527532887!3d22.452506037361115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027191980537cf%3A0xfe81e9f2a4a9e486!2sJai%20Hind%20Auditorium!5e0!3m2!1sen!2sin!4v1716215430050!5m2!1sen!2sin"
            style={{
              border: 0,
              width: "80%",
              height: "450px",
              marginTop:"40px"
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </center>
        </div>

        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <HStack>
                  {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                  <img src="./img/logo1.png" width="55%"></img>
                </HStack>
              </Box>
              <Text fontSize={"sm"}>
                © SVIST, Gobindapur, 2024. All rights reserved
              </Text>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading>College</Heading>
              <Link href={"about"}>About us</Link>
              <Link href={"/pasttour"}>Past Tour</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading>Support</Heading>
              <Link href={"/members"}>Members</Link>
              {/* <Link href={'#'}>Legal</Link> */}
              {/* <Link href={'#'}>Privacy Policy</Link> */}
              {/* <Link href={'#'}>Satus</Link> */}
            </Stack>
            <Stack align={"flex-start"}>
              <Heading>Want to contact us?</Heading>
              <Stack direction={"row"}>
                {/* <Link href=""><FaInstagram></FaInstagram></Link>
                <Link href=""><FaTwitter></FaTwitter></Link> */}
                {/* <Link href="https://www.facebook.com/official4svist"><FaFacebook ></FaFacebook></Link> */}
                {/* <Link href="info@svistevent.live" style={{paddingBottom:"20px"}}><EmailIcon></EmailIcon></Link> */}
                <Button style={{ width: "70px" }}>
                  {" "}
                  <Link href="https://www.facebook.com/official4svist">
                    <FaFacebook></FaFacebook>
                  </Link>
                </Button>
                <Button style={{ width: "70px" }}>
                  {" "}
                  <Link href="https://www.youtube.com/@missioncareer3104">
                    <FaYoutube></FaYoutube>
                  </Link>
                </Button>
                <Button style={{ width: "70px" }}>
                  {" "}
                  <Link href="https://www.instagram.com/swami_vivekananda_group">
                    <FaInstagram></FaInstagram>
                  </Link>{" "}
                </Button>
                <Button style={{ width: "70px" }}>
                  {" "}
                  <Link href="https://www.website.svist@gmail.com">
                    ✉️
                  </Link>{" "}
                </Button>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
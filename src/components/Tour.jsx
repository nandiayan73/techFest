// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     background,
//   } from '@chakra-ui/react'
  import { useMediaQuery } from "@chakra-ui/react";
  import { Stack} from '@chakra-ui/react'
  import TourCard from './tourCard'
  import Header from './header'
  import Footer from './footer'
  import { useState } from 'react'
//   import Modal from 'react-bootstrap/Modal';
const Tour=()=>{
 const [theme,setTheme]=useState("black");
 const [isMobile] = useMediaQuery("(max-width: 768px)") 
  
    return(<div >
    <Header color="black" ></Header>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <center><h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" style={{color: theme,opacity:"0.9",fontSize:"4em",paddingTop:isMobile?"15%":"4%",fontFamily:"verdana"}}  onMouseOver={()=>{setTheme("red")}} onMouseLeave={()=>{setTheme("black")}}>Our First Fest</h3></center>
    {/* <Stack direction={['column', 'row']} spacing='40px'> */}
    <center><TourCard img="/img/enthu/first.jpeg"  text="First Fest"></TourCard></center>
    {/* </Stack> */}
     <center><h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" style={{color: theme,opacity:"0.9",fontSize:"4em",paddingTop:isMobile?"15%":"4%",fontFamily:"verdana"}}  onMouseOver={()=>{setTheme("red")}} onMouseLeave={()=>{setTheme("black")}}>Enthuzea 2K22</h3>
     </center>
    <Stack direction={['column', 'row']} spacing='40px'>
    <TourCard img="/img/enthuzea 2022/1.jpg"  text="All Performers"></TourCard>
    <TourCard img="/img/enthuzea 2022/2.jpg"  text="Miss Freshers"></TourCard>
    <TourCard img="/img/enthuzea 2022/3.jpg"  text="Drama"></TourCard>
    </Stack>
    <Stack direction={['column', 'row']} spacing='40px'>
    <TourCard img="/img/enthuzea 2022/4.jpg"   text="Cultural Show"></TourCard>
    <TourCard img="/img/enthuzea 2022/5.jpg" text="Musical Bands"></TourCard>
    <TourCard img="/img/enthuzea 2022/6.jpg"  text="Classical Drama"></TourCard>
    </Stack>
    <Stack direction={['column', 'row']} spacing='40px'>
    <TourCard img="/img/enthuzea 2022/7.jpg"   ></TourCard>
    <TourCard img="/img/enthuzea 2022/8.jpg" ></TourCard>
    <TourCard img="/img/enthuzea 2022/9.jpg"  ></TourCard>
    </Stack>
    {/* <Stack direction={['column', 'row']} spacing='40px'> */}
    {/* <TourCard img="/img/enthuzea 2022/18.jpg"></TourCard> */}
    {/* <TourCard img="/img/enthuzea 2022/10.jpg"></TourCard> */}
    {/* <TourCard img="/img/enthuzea 2022/16.jpg"></TourCard> */}
    {/* <TourCard img="/img/enthuzea 2022/10.jpg" ></TourCard> */}
    {/* <TourCard img="/img/enthuzea 2022/11.jpg" ></TourCard> */}
    {/* </Stack> */}
    <Stack direction={['column', 'row']} spacing='40px'>
    <TourCard img="/img/enthuzea 2022/13.jpg"></TourCard>
    <TourCard img="/img/enthuzea 2022/15.jpg" ></TourCard>
    <TourCard img="/img/enthuzea 2022/14.jpg"></TourCard>
    </Stack>
    <Stack direction={['column', 'row']} spacing='40px'>
    <TourCard img="/img/enthuzea 2022/11.jpg"></TourCard>
    {/* <TourCard img="/img/enthuzea 2022/12.jpg"></TourCard> */}
    <TourCard img="/img/enthuzea 2022/18.jpg" ></TourCard>
    <TourCard img="/img/enthuzea 2022/10.jpg" ></TourCard>
    </Stack>
   <br></br>
    <Footer></Footer>
    
    
    </div>)
}
export default Tour;
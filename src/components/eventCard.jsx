import {
    Card, CardHeader, CardBody, CardFooter,
    Stack,
    Heading,
    Divider,
    Image,
    Text,
    ButtonGroup,
    Button,
    Center
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const NewCard=({img,title,date,quote})=>{
    const navigate=useNavigate();
    const [dateString,setDate]=useState("")
    const [countdown,setCountdown]=useState("")
    useEffect(()=>{
    //     console.log("hi")
    //     if (date){
    //         // console.log("this is" +date)
    //     const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    //              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //     const d1=new Date(date);
    //     console.log(d1)
    //     let d = d1.getDate();
    //     if(d<10){
    //         d="0"+d
    //     }
    //     console.log(typeof(d))
    //     const m = d1.getMonth();
    //     const y = d1.getFullYear();
    //     const new_date=monthName[m] + " " + d + " " + y;
    //     setDate(new_date);


    //     const interval = setInterval(() => {
    //         // counter
    //         var eventDate=new Date(1684454400000);
    //         var _second = 1000;
    //         var _minute = _second * 60;
    //         var _hour = _minute * 60;
    //         var _day = _hour * 24;
    //         const currentDate=new Date();
    //         console.log(currentDate)
    //         var distance=eventDate-currentDate
    
    //         var days = Math.floor(distance / _day);
    //         var hours = Math.floor((distance % _day) / _hour);
    //         var minutes = Math.floor((distance % _hour) / _minute);
    //         var seconds = Math.floor((distance % _minute) / _second);
    //         if(hours<10)
    //             hours=0+hours.toString();
    //         if(minutes<10)
    //             minutes=0+minutes.toString();
    //         if(seconds<10)
    //             seconds=0+seconds.toString();
    //         console.log(hours)
    //         const timer=days+" : "+hours+": "+minutes+": "+ seconds
    //         // if(hours==="00" && minutes==="00" && seconds===00)
    //         //     timer="Event Day!"
    //         setCountdown(timer)
    //       }, 1000);
    //       return () => clearInterval(interval);
    // }
    // else
    //  date=""
    setCountdown(countdown)
})
    return (
    <>
<center>
    <Card maxW='sm' style={{backgroundColor:"black",borderColor:"red",}}>
    <CardBody>
        <Image
        style={{width:"40%"}}
        src={img}
        alt=''
        borderRadius="full"
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md' fontFamily={"Arial"}style={{color:"white",fontWeight:"bold",fontSize:"2rem"}}>{title}</Heading>
        <Text fontFamily={"Anton"}>
            {dateString}
        </Text>
        <Text fontFamily={"Anton"} color='red' fontSize='2xl'>
            {quote}
        </Text>
    {/* <Text color='white' fontFamily={"Anton"} fontSize='2xl'>
        {price}
    </Text> */}
    <Text color='white' fontFamily={"Anton"} fontSize='2xl'>
        {countdown}
    </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    <ButtonGroup spacing='2'>
     <Center> <Button variant="solid" paddingLeft={"120px"} paddingRight={"120px"}  onClick={()=>{navigate("/body")}} borderRadius={"0px"} fontFamily={'sans-serif'} colorScheme="red">
        Know More
      </Button></Center>
      {/* <Button variant='ghost' colorScheme='teal'>
        Add to cart
      </Button> */}
    </ButtonGroup>
    </CardFooter>
    </Card>
</center> 
    </>)
}
export default NewCard;
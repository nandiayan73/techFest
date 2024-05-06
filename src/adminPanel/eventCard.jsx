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
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewCard=({img,title,date,quote,price})=>{
    const navigate=useNavigate()
    const [dateString,setDate]=useState("")
    useEffect(()=>{
        console.log(date)
        if (date){
        const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const d1=new Date(date);
        let d = d1.getDate();
        if(d<10){
            d="0"+d
        }
        console.log(typeof(d))
        const m = d1.getMonth();
        const y = d1.getFullYear();
        const new_date=monthName[m] + " " + d + " " + y;
        setDate(new_date);
        // date=month;
    }
    
},[])
    return (
    <>
<center>
    <Card maxW='sm' style={{backgroundColor:"black",borderColor:"red",}}>
    <CardBody>
        <Image
        style={{width:"40%"}}
        src={img}
        alt=''
        borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md' fontFamily={"Anton"}style={{color:"red"}}>{title}</Heading>
        <Text fontFamily={"Anton"}>
            {dateString}
        </Text>
        <Text fontFamily={"Anton"} color='red' fontSize='2xl'>
            {quote}
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    <ButtonGroup spacing='2'>
     <Center> <Button variant="solid" paddingLeft={"120px"} paddingRight={"120px"} borderRadius={"0px"} fontFamily={'sans-serif'} colorScheme="red"
     onClick={()=>{navigate("/body")}}
     >
        know More
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
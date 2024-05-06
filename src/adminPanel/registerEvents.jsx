import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from './nav';
import Footer from './footer';
// import "./new"
const App=()=> 
{
  const callHomePage=async()=>{
    try{
        axios.get('https://backend-jofn.onrender.com/register', { withCredentials: true })
        .then(response => {
            console.log(response)
            // if(!response.status===201)
            console.log("authorized")
          // do something with the response data
        }).catch(err=>navigate("/admin/login"))
    }
    catch(err){

        console.log("User not Authorized!");
        console.log(err)
        // navigate("/admin/login")
}
  }
  useEffect(()=>{
    callHomePage();
},[]);
    const navigate=useNavigate()
    const toast=useToast()
    const [loading,setLoading]=useState(false)
    const [title,setTitle]=useState("");
    const [name,setName]=useState("");
    const [price,setPrice]=useState();
    const [date,setDate]=useState();
    const [pic,setPic]=useState("");
    const [bandtitle,setbandTitle]=useState("");
    const [bandpic,setBand]=useState("");
    const loginHandle=async()=>{
      setLoading(true);
      if(!name|| !title || !price || !date ){
        toast({
          title:"Please fill all the required details!",
          status:"warning",
          duration:2500,
          isClosable:true,
          position:"bottom",
      });
        setLoading(false);
        return;
      }
      const new_date=Date.parse(date)
      if(new_date<Date.now()){
        toast({
          title:"Please check the date",
          status:"warning",
          duration:1500,
          isClosable:true,
          position:"bottom",
      });
      setLoading(false);
      return;
      }
      console.log(new_date);
      
      axios.post('http://localhost:3000/api/user/eventRegister', {
        data: {
          // your data goes here
          title,
          name,
          price,
          new_date,
          pic,
          bandpic,
          bandtitle
        }
      },)
      .then(response => {
        // handle the response
        if (response.status === 201) {
          toast({
            title:"Successfully Created!",
            status:"success",
            duration:2500,
            isClosable:true,
            position:"bottom",
        });
        }
      setLoading(false);
      })
      .catch(error => {
        // handle the error
        console.log(error);
        toast({
          title:"Event already exist with the same name and title",
          status:"warning",
          duration:2500,
          isClosable:true,
          position:"bottom",
      });
      setLoading(false);
      });
    }



// Posting data to cloudinary to save it in their database and give a link
    const postDetails=async(pic,name)=>{
      // setLoading(true);
      if(pic===undefined){
          toast({
              title:"Please Select an Image",
              status:"warning",
              duration:2500,
              isClosable:true,
              position:"bottom",
          });
          // setLoading(false)
          return;
      }
      if(pic.type==="image/jpeg" || pic.type==="image/png"){
        const data=new FormData();
        data.append("file",pic);
        data.append("upload_preset","tech_fest");
        data.append("cloud_name","dqlc4nli6");
        try{
          const response= await fetch("https://api.cloudinary.com/v1_1/dqlc4nli6/image/upload",{
            method:"post",
            body:data,
           });
        console.log(response);
        const info = await response.json();
        console.log(info.url.toString());
        // setLoading(false);
        if(name==="title")
          setPic(info.url.toString());
        else
           setBand(info.url.toString())

        
      }
      catch(err){
        console.log(err);
        // setLoading(false);
      }
    }
    else{
      toast({
        title:pic.type +" is not supported",
        status:"warning",
        duration:2500,
        isClosable:true,
        position:"bottom",
      });
      // setLoading(false);
    }
  }
  
  return (
    <>
    <Header></Header>
    <div style={{backgroundColor:"black"}}>
    <br></br>
    <br></br>
     <Flex  style={{backgroundColor:"black"}}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={1} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading style={{color:"white"}} fontFamily={"sans-serif"} fontSize={'xs'}>Please enter the details of the Event</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name" isRequired>
              <FormLabel   style={{color:"red"}}>EVENT NAME</FormLabel>
              <Input style={{color:"black"}} placeholder='name' onChange={((e)=>{setName(e.target.value)})} value={name} type="text" />
            </FormControl>
            <FormControl id="price" isRequired>
              <FormLabel style={{color:"red"}}>EVENT PRICE</FormLabel>
              <Input style={{color:"black"}} placeholder='price' onChange={((e)=>{setPrice(e.target.value)})} value={price} type="number" />
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel style={{color:"red"}} >DATE</FormLabel>
              <Input style={{color:"black"}} onChange={((e)=>{setDate(e.target.value)})} value={date} type="date" />
            </FormControl>


            {/* TITLE RELATED */}
            <FormControl id="titlepic" isRequired>
              <FormLabel style={{color:"red"}} >TITLE PHOTO</FormLabel>
              <Input  accept='image/*' name="title" style={{color:"black"}} onChange={((e)=>{postDetails(e.target.files[0],e.target.name)})}  type="file" />
            </FormControl>
            <FormControl id="title" isRequired>
              <FormLabel style={{color:"red"}}>EVENT TITLE</FormLabel>
              <Input style={{color:"black"}} placeholder='title' onChange={((e)=>{setTitle(e.target.value)})} value={title} type="text" />
            </FormControl>


              {/* band related */}

            <FormControl id="band titlepic" isRequired>
              <FormLabel style={{color:"red"}} >BAND PHOTO</FormLabel>
              <Input  accept='image/*' name="band" style={{color:"black"}} onChange={((e)=>{postDetails(e.target.files[0],e.target.name)
              })}  type="file" />
            </FormControl>

            <FormControl id="band title" isRequired>
              <FormLabel style={{color:"red"}}>BAND TITLE</FormLabel>
              <Input style={{color:"black"}} placeholder='band title' onChange={((e)=>{setbandTitle(e.target.value)
              })} value={bandtitle} type="text" />
            </FormControl>
            <Stack spacing={10}>
              <Button 
                isLoading={loading}
                onClick={loginHandle}
                bg={'red.600'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  
    
    </div>
    <Footer></Footer>
    </>
  )
}

  
  export default App;
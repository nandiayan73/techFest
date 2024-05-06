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
import Header from './nav';
import Footer from './footer';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const MemberPage=()=>{
  // const navigate=useNavigate()
    const callHomePage=async()=>{
        try{
          console.log("Ok")
          const host=import.meta.env.VITE_HOST;
            axios.get(host+'/register', { withCredentials: true })
            .then(response => {
                console.log(response)
                console.log("authorized")
            }).catch(err=>navigate("/admin/login"))
        }
        catch(err){
    
            console.log("User not Authorized!");
            console.log(err)
            // navigate("/admin/login")
    }}
    useEffect(()=>{
        callHomePage();
},[]);
const postDetails=async(pic,name)=>{
  setLoading(true);
  if(pic===undefined){
      toast({
          title:"Please Select an Image",
          status:"warning",
          duration:2500,
          isClosable:true,
          position:"bottom",
      });
      setLoading(false)
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
    setLoading(false);
    setPic(info.url.toString());

    
  }
  catch(err){
    console.log(err);
    setLoading(false);
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
  setLoading(false);
}
}
const loginHandle=async()=>{
  try{
  setLoading(true);
  if(!name|| !pic || !about || !description){
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
  axios.post('https://backend-jofn.onrender.com/api/user/members', {
    data: {
      // your data goes here
      name,
      pic,
      about,
      description
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
      title:"Member already exists!",
      status:"warning",
      duration:2500,
      isClosable:true,
      position:"bottom",
  });
  setLoading(false);
  });
}
catch(err){
  toast({
    title:"Error!",
    status:"warning",
    duration:2500,
    isClosable:true,
    position:"bottom",
});
setLoading(false);
}
}
    const navigate=useNavigate()
    const toast=useToast()
    const [loading,setLoading]=useState(false)

    const [name,setName]=useState("");
    const [pic,setPic]=useState("");
    const [about,setAbout]=useState("");
    const [description,setDescription]=useState("")



    return (<>
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
          <Heading style={{color:"white"}} fontFamily={"sans-serif"} fontSize={'xs'}>Please enter the details of the Member</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name" isRequired>
              <FormLabel   style={{color:"red"}}>MEMBER'S NAME</FormLabel>
              <Input style={{color:"black"}} placeholder='name' onChange={((e)=>{setName(e.target.value)})} value={name} type="text" />
            </FormControl>
            <FormControl id="titlepic" isRequired>
              <FormLabel style={{color:"red"}} >MEMBER'S PHOTO</FormLabel>
              <Input  accept='image/*' name="title" style={{color:"black"}} onChange={((e)=>{postDetails(e.target.files[0],e.target.name)})}  type="file" />
            </FormControl>
          <FormControl id="name" isRequired>
              <FormLabel   style={{color:"red"}}>ABOUT</FormLabel>
              <Input style={{color:"black"}} placeholder='about' onChange={((e)=>{setAbout(e.target.value)})} value={about} type="text" />
            </FormControl>
          <FormControl id="name" isRequired>
              <FormLabel   style={{color:"red"}}>DESCRIPTION</FormLabel>
              <Input style={{color:"black"}} placeholder='description' onChange={((e)=>{setDescription(e.target.value)})} value={description} type="text" />
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
    </>)
}
export default MemberPage;
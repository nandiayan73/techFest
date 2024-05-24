import React, { useEffect, useState } from 'react';
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
  } from '@chakra-ui/react';
import axios from 'axios'
// import Logo from './logo';
// import { Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
const App=()=> 
{
  const navigate=useNavigate()
    const callHomePage=async()=>{
        try{
          const host=import.meta.env.VITE_HOST;
          
          // console.log(host)
             axios.get(host+'https://fest-backend-wr4i.onrender.com/register', { withCredentials: true })
            .then(response => {
                console.log(response)
                navigate("/admin/events")
                console.log("authorized")
              // do something with the response data
            }).catch(err=>{
              //if the response if 400
                console.log(err)
                console.log("Login in as Admin")
            })
        }
        catch(err){
            console.log("User not Authorized! Login now");
            console.log(err)
            // navigate("/admin/login")
    }
    }
    useEffect(()=>{
        callHomePage();
},[]);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const loginHandle=async()=>{
      axios.post('https://backend-jofn.onrender.com/api/user/login', {
        data: {
          // your data goes here
          email,
          password,
        }
      }, {
        withCredentials: true
      })
      .then(response => {
        // handle the response
        if (response.status === 201) {
          // the cookie was created successfully, you can access it using document.cookie or a library like js-cookie
          navigate("/admin/events")
          console.log("success!")
        }
      })
      .catch(error => {
        // handle the error
        console.log(error);
      });
    }


  return (
    <div>
     <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack  spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login in as Admin</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
             ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={((e)=>{setEmail(e.target.value)})} value={email} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={((e)=>{setPassword(e.target.value)})} value={password} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button 
                onClick={loginHandle}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login 
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  
    
    </div>
  )
}

export default App;
import NewCard from './eventCard';
import axios from "axios"
import { useEffect, useState } from "react";
import { Stack} from '@chakra-ui/react'
import Footer from './footer';
import Header from "./header";
import { useMediaQuery } from '@chakra-ui/react';
const UpdatedEvents=()=>{
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [events,setEvents]=useState([])
    const allEvents=async()=>{
        try{
            // const res = await axios.get(
            //     'https://backend-jofn.onrender.com/api/user/allevents',
            //   )
            //   setEvents(res.data)
            //   console.log(res.data)
            //   if(res.status===201){
            //     const new_data=res.data;
            //     console.log("This is")
            //     console.log(new_data)
            //     setEvents(new_data)
            //   }
            //   console.log("eheheh")
            //   console.log(events)
            const new_data=[{
                "pic":"./img/enthuzea_logo.jpg",
                "name":"Enthuzea 2023",
                "title":"Summer Event",
                "date":1684454400000,
                "price":"Enthuzea is Awesome!",
                },
            ]
                setEvents(new_data);

            
        }
        catch(err){
            console.log(err)
            const new_data=[{
                "pic":"./img/enthuzea_logo.jpg",
                "name":"Enthuzea 2023",
                "title":"Summer Event",
                "date":1684454400000,
                "price":"Enthuzea is Awesome!",
                },
            ]
                setEvents(new_data);
        }

        
    }
   
    useEffect(()=>{
        allEvents();
    },[]);

    return (
        <>
        <Header></Header>
    <div style={{backgroundColor:"black"}}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        {events.map((value)=>(
            <NewCard img={value.pic} date={value.date}   counter="" title={value.name} quote={value.title} price={value.price}></NewCard>
        ))}
    <center><h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" style={{color: "white",opacity:"0.9",fontSize:"4em",paddingTop:isMobile?"15%":"4%",fontFamily:"verdana"}}  onMouseOver={()=>{setTheme("red")}} onMouseLeave={()=>{setTheme("black")}}>Enthuzea 2K23</h3></center>
      <Stack direction={['column', 'row']} spacing='40px'>
      <center>
      <video controls style={{width:"45%",display:"inline",paddingTop:"2%"}}>
        <source src="img/enthuzea 2023/event2.mp4" type="video/mp4"></source>
      </video>
      </center>
      </Stack>
    </div>
    <Footer></Footer>
    </>

    )
}
export default UpdatedEvents;
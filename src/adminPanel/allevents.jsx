import NewCard from './eventCard';
import axios from "axios"
import { useEffect, useState } from "react";
import Footer from './footer';
import Header from './nav';
import { useNavigate } from 'react-router-dom';
const TechEvents=()=>{
    const navigate=useNavigate();
    const [events,setEvents]=useState([])
    const allEvents=async()=>{
        try{
        const res = await axios.get(
          'https://backend-jofn.onrender.com/api/user/allevents',
        )
        setEvents(res.data)
    }
    catch(err){
        const new_data=[{
            "pic":"https://miro.medium.com/v2/resize:fit:1400/1*-l1N7X9SzFGgid_WQrWphQ.png",
            "name":"Hey",
            "title":"No events",
            "date":false,
            "price":"You can add one from add events portal",
            },
        ]
            setEvents(new_data);
    }

    }
    const callHomePage=async()=>{
        try{
            const host=import.meta.env.VITE_HOST;
            axios.get(host+"/register", { withCredentials: true })
            .then(response => {
                console.log(response)
                // if(!response.status===201)
                console.log("authorized")
              // do something with the response data
            })
            .catch(err=>navigate("/admin/login"))
        }
        catch(err){
    
            console.log("User not Authorized!");
            console.log(err)
            // navigate("/admin/login")
    }
    }
    useEffect(()=>{
        callHomePage();
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
            <NewCard img={value.pic} date={value.date}   title={value.name} quote={value.title} price={value.price}></NewCard>
        ))}
    </div>
    <Footer></Footer>
    </>

    )
}
export default TechEvents;
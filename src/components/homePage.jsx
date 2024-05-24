import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage=()=>{
const navigate=useNavigate();
const callHomePage=async()=>{
    try{
        axios.get('https://fest-backend-wr4i.onrender.com/register', { withCredentials: true })
        .then(response => {
            console.log(response)
            // if(!response.status===201)
            
            setEmail(response.data.email)
            setName(response.data.name)
          // do something with the response data
        }).catch(err=>{
            navigate("/login")
            console.log(err)
        })
            
        
    }
    catch(err){

        console.log("User not Authorized!");
        console.log(err)
        navigate("/admin/login")
}

// fetch("http://localhost:3000/api/user/home")
//       .then(response => response.json())
//       .then(data => console(data))
//       .catch(error => navigate("/login"));
}
useEffect(()=>{
        callHomePage();
},[]);
const [name,setName]=useState("");
const [email,setEmail]=useState("")
    return(
        <>
        <h1>NAME:{name}</h1>
        <h1>E-MAIL:{email}</h1>
        </>
    )
}
export default HomePage;
import { useState } from "react"
import axios from "axios"
const Login=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const loginHandle=async()=>{

        try{
        const res=await fetch("http://localhost:3000/api/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                email,
                password,
                
            })
        });
        const data= await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }

    }
    return(<>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <input 
        placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}>
    </input>
    <input 
        placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}>
    </input>
    <input 
        placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}>
    </input>
    <button onClick={loginHandle} style={{backgroundColor:"red",color:"white"}}>Submit</button>
    </>)
}
export default Login;
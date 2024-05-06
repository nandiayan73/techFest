import Header from "./header";
import Footer from "./footer";
import { Center, Square, Circle,Button } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react";
const Dept=()=>{
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
    const onButtonClick = (pdf,dept) => {
        // using Java Script method to get PDF file
        // console.log(pdf)
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = dept;
                alink.click();
            })
        })
    }
    return(<div style={{backgroundColor:"black",overflowY:"hidden"}}>
    <Header color="black"></Header>
    <br></br>
    <br></br>
    <br></br>
    <div className="row justify-content-center" style={{width:"100%"}}>
    <div className="col-lg-8">
    <div className="section_title text-center mb-80">
    <div style={{paddingTop:"5%"}}>
        
        <center>
            <h1 style={{color:"red",paddingTop:isMobile?"15%":"",fontFamily:"cursive"}}>Enthuzea is Awesome</h1>
        <video  autoPlay loop muted style={{width:"30%",borderRadius:"100%"}}>
              <source src="img/logovideo.mp4" type="video/mp4" ></source>
        </video>  
        </center>
        <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" style={{opacity:"1",color:"white",paddingTop:"5%"}} >
        All the departments come together to celebrate this event making it a massive one. This event also brings all the faculty members together, thus promoting unity and happiness. 
        </p>
        </div>
                    </div>
                </div>
            </div>



    <center>
        <div style={{paddingTop:"1%"}}>
        
        <h1 style={{color:"red",paddingTop:isMobile?"2%":""}}>Department Info</h1>
        
        </div>
    </center>
    <center><div style={{paddingTop:"5%"}}>  
        <h2 style={{color:"white",display:"inline"}}>CSE Dept.</h2>
        <Button colorScheme="teal" style={{color:"white",display:"inline",marginBottom:"1.5%",marginLeft:"5%"}} 
                onClick={()=>{onButtonClick("img/brochure/CSE.pdf","CSE")}}>
                    Download Brochure
        </Button>
        </div>
    </center>
    <center><div style={{paddingTop:"5%"}}>  
        <h2 style={{color:"white",display:"inline"}}>CE Dept.</h2>
        <Button 
        colorScheme="teal"
        style={{color:"white",display:"inline",marginBottom:"1.5%",marginLeft:"6%"}} 
                onClick={()=>{onButtonClick("img/brochure/CE.pdf","CE")}}>
                    Download Brochure
        </Button>
        </div>
    </center>
    <center><div style={{paddingTop:"5%"}}>  
        <h2 style={{color:"white",display:"inline"}}>ECE Dept.</h2>
        <Button 
        colorScheme="teal"
        style={{color:"white",display:"inline",marginBottom:"1.5%",marginLeft:"5%"}} 
                onClick={()=>{onButtonClick("img/brochure/ECE.pdf","ECE")}}>
                    Download Brochure
        </Button>
        </div>
    </center>
    <center><div style={{paddingTop:"5%"}}>  
        <h2 style={{color:"white",display:"inline"}}>EEE Dept.</h2>
        <Button 
        colorScheme="teal"
        style={{color:"white",display:"inline",marginBottom:"1.5%",marginLeft:"5%"}} 
                onClick={()=>{onButtonClick("img/brochure/EEE.pdf","EEE")}}>
                    Download Brochure
        </Button>
        </div>
    </center>
    <center><div style={{paddingTop:"5%"}}>  
        <h2 style={{color:"white",display:"inline"}}>ME Dept.</h2>
        <Button 
        colorScheme="teal"
        style={{color:"white",display:"inline",marginBottom:"1.5%",marginLeft:"5%"}} 
                onClick={()=>{onButtonClick("img/brochure/ME.pdf","ME")}}>
                    Download Brochure
        </Button>
        </div>
    </center>
<br></br>
    <Footer></Footer>
    
    </div>
    
    )
}
export default Dept;
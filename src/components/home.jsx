import Header from "./header"
import Footer from "./footer"
import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from "axios";
import ProgramCard from "../adminPanel/Detailsnew"
import { Center, Square, Circle,Button ,Box} from '@chakra-ui/react'
import NewCard from './eventCard';
import { useMediaQuery } from "@chakra-ui/react";
const Home=()=>{
    const [i,setI]=useState(0)
    const [time,setTimer]=useState(0)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [countdown,setCountdown]=useState("")
    const [tabIndex, setTabIndex] = useState(0)
    const [multipleColor, setMultipleColor] = useState(0)
    // const allEvents=async()=>{
    //     try{
    //     const res = await axios.get(
    //       'https://backend-jofn.onrender.com/api/user/allevents',
    //     )
    //     const Data=res.data;
    //     setDate(Data[0].date);
    //     console.log(date);

    // }
    // catch(err){
    //     console.log(err);
    // }

    // }
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('img/enthu/bio.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ENTHUZEA_2023';
                alink.click();
            })
        })
    }
    
      
        const handleSliderChange = (event) => {
          setTabIndex(parseInt(event.target.value, 10))
        //   setI(tabIndex);
        }
        
        const handleTabsChange = (index) => {
            setTabIndex(index)
            // setI(tabIndex);
        }
    
      
    useEffect(()=>{
        const dots=[".","..","..."];
        const colors=["red","violet","#13fb03","yellow","white","#fff5b6","orange","#bdbddb","orange","#8B8000"];
        // 👇️ scroll to top on page load
        setMultipleColor(colors[time%5])
        const tabs = setInterval(() => {
            if(time%2===0){
            
            setTabIndex(i)
            setI(i+1)
            if(i===4)
                setI(0);  
        }
        setTimer(time+1)
        // setDots(dots[time%3]);
            // counter
        
    
          },1000);
          return () => clearInterval(tabs);
    })

    useEffect(()=>{
            // 👇️ scroll to top on page load
        const interval = setInterval(() => {

            // counter
            var eventDate=new Date(2024, 4, 24);
            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            const currentDate=new Date();
            var distance=eventDate-currentDate
    
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
            if(hours<10)
                hours=0+hours.toString();
            if(minutes<10)
                minutes=0+minutes.toString();
            if(seconds<10)
                seconds=0+seconds.toString();
            const timer=days+":"+hours+":"+minutes+":"+ seconds
            setCountdown(timer)
            if(countdown<=0)
                setCountdown("We Are Live!")
          }, 1000);
          return () => clearInterval(interval);
    })
    return (
    <>
    <Header></Header>
    <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12">
                        <div className="slider_text text-center">
                            <div className="shape_1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <img src="img/shape/shape_1.svg" alt=""></img>
                            </div>
                            <div className="shape_2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s">
                                <img src="img/shape/shape_2.svg" alt=""></img>
                            </div>
                            <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s" style={{fontSize:isMobile?"150%":"250%",fontFamily:"cursive",color:"white"}}>Swami Vivekananda Institute Of Science & Technology</span>
                            <br></br>
                            <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s" style={{fontSize:isMobile?"150%":"250%",fontFamily:"cursive"}}>welcomes you to</span>
                            <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s" style={{paddingBottom:isMobile?"55px":"0px"}}>ENTHUZEA 2024</h3>
                            {/* <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">SVIST, Gobindapur</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
        
            <Center color='white' style={{backgroundColor:"black"}}>
                <h1 style={{color:multipleColor,padding:"0px",paddingBottom:"2%",margin:"0px",fontWeight:"bold",fontSize:isMobile?"47px":"80px"}}>Live In </h1>
            </Center>
           <Center> 
                <Square style={{width:"100%",padding:"0px",margin:"0px",fontSize:"5em"}} size='100px' bg='black' color='white'>
                    <a style={{fontSize:"60%"}} href="/">{countdown}</a>
                {/* {countdown} */}
                {/* DAY 2  */}

                </Square>
            </Center>
        <div style={{backgroundColor:"black"}}>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <img style={{width:"70%",borderRadius:"10px"}} src="img/ENTHUZEA 2024/poster.jpg"></img>
                {/* <Button 
                colorScheme="teal"
                variant={"solid"}
                style={{color:"white"}} 
                onClick={onButtonClick}>
                    Download Brochure
                </Button> */}
            </center>
        </div>
     {/* <div style={{backgroundColor:"black",paddingTop:"5%",margin:"0px"}}>
                <center>
                    <img src="img/enthu/1.png" styl e={{width:"40%"}}></img>
                </center>
            </div>     */}
    <ProgramCard></ProgramCard>
   {/* <center> 
    <div style={{backgroundColor:"black",width:"100%",}}>
    <img src="img/enthuzea 2022/sponsor.jpg" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline"}}></img>
    <img src="img/enthuzea 2022/sponsor2.jpg" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline",paddingLeft:"3%"}}></img>
    <img src="img/enthuzea 2022/sponsor3.jpg" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline",paddingLeft:"3%"}}></img>
    <img src="img/enthuzea 2022/sponsor4.png" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline",paddingLeft:"3%"}}></img>
    </div>
</center> */}
<div style={{backgroundColor:"black"}}>
    <center>
    <h1 style={{color:"red",padding:"0px",paddingBottom:"2%",margin:"0px"}}>Sponsored By</h1>   
    <Box>
      <input
        type="range"
        min='0'
        max='4'
        value={tabIndex}
        onChange={handleSliderChange}
      />

      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabPanels>
          <TabPanel>
            <img src="img/enthuzea 2022/sponsor.jpg" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline"}}></img>
          </TabPanel>

          <TabPanel>
        <img src="img/enthuzea 2022/sponsor2.jpg" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline",paddingLeft:"3%"}}></img>
          </TabPanel>

          <TabPanel>
             <img src="img/enthuzea 2022/sponsor3.jpg" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline",paddingLeft:"3%"}}></img>
          </TabPanel>

          <TabPanel>
            <img src="img/enthuzea 2022/sponsor4.png" style={{width:"40%",height:"190px",borderRadius:"0%",paddingBottom:"2%",display:"inline",paddingLeft:"3%"}}></img>
          </TabPanel>
          <TabPanel>
            <img src="img/enthuzea 2022/sponsor5.jpg" style={{width:"40%",borderRadius:"0%",paddingBottom:"2%",display:"inline",paddingLeft:"3%"}}></img>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
</center>
</div>
    <Footer></Footer>
    </>
    )
}

export default Home;
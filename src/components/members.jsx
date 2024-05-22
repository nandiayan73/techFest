// import { Card, CardHeader, CardBody, CardFooter , Stack, Heading,Button,Image,Text,Box} from '@chakra-ui/react';
import Header from "./header";
import Footer from "./footer";
import Details from "./programDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
const Member = () => {
  const [events, setEvents] = useState([]);
  const videoRef=useRef(null);
  const [isPlaying,setIsPlaying]=useState(false);
  
  const playVideo=()=>{
    if(isPlaying==false)
      {
        setIsPlaying(true);
        videoRef.current.play();
      }
    else
      {
        setIsPlaying(false);
        videoRef.current.pause();
      }

  }
 

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Header></Header>
        <br></br>
        <div className="program_details_area detials_bg_1 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section_title text-center mb-80  wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>
                    Coordinator/Faculty
                  </h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="program_detail_wrap">
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Dr. Nandan Gupta
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Director, SVIST
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/a.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>

                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Mr. Pabitra Kumar Gayen
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Deputy Director, SVIST
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/director.jpeg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Dr. Sonali Sarkar
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Principal, SVIST
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/principal.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>

                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Mr. Samrat Paul
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Convener
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/smp.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Dr. Anindya Sundar Das
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Joint Convener
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/asb.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>

                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          {" "}
                          Dr. Somnath Das
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Treasurer
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/sd.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          {" "}
                          Mr. Somnath Roy
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          joint-Treasurer
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/stnew.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          {" "}
                          Dr. Manasi Mukhopadhyay
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Coordinator, Cultural Committee
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/manasi.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          {" "}
                          Ms. Somasree Bhadra
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Co-Coordinator, Cultural Committee
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/sm.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          {" "}
                          Dr. Arpan Dutta
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Co-Coordinator, Cultural Committee
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/arpand.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Dr. Subhrajyoti Dey
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Coordinator, Prize Distribution Committee
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/sbh.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Mr. Shreesendu Bhattacharjee
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Coordinator, Food Committee
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/shir.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>

                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Dr. Suman Das
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Coordinator, Volunteer & Hall Management Committee
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/sdas.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Mr. Santu Banerjee
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Co-Coordinator, Volunteer & Hall Management Committee
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/santu.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4> */}
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Mr. Koushikk Bhattacharyya
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Editor-in-Chief, Website
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/koushikk.jpg" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 19 May</h4> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="program_details_area detials_bg_1 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section_title text-center mb-80  wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>
                    Website Development
                  </h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="program_detail_wrap">
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Ayan Nandi
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          CSE 3rd year
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                      {/* <button className="control-button" onClick={playVideo} style={{display:isPlaying?"none":""}} >▶️</button> */}
                      {/* <button className="control-button" onClick={pauseVideo} style={{display:isPlaying?"":"none"}}>⏸️</button> */}
                      <video ref={videoRef} onClick={playVideo} width="640" height="360">
                        <source src="img/developers/dev4.mp4" type="video/mp4" />
                      </video>

                        {/* <img src="img/enthu/ayan.jpg" alt=""></img> */}

                      </div>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".6s"
                        style={{ fontFamily: "Arial", fontWeight: "bold" }}
                      >
                        Web Developer
                      </h4>
                    </div>
                  </div>


                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Shubhayan Bagchi
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          CSE 2nd year
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/developers/dev 3.jpeg" alt=""></img>
                      </div>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".6s"
                        style={{ fontFamily: "Arial", fontWeight: "bold" }}
                      >
                        Web Developer
                      </h4>
                    </div>
                  </div>


                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Sarnick Chakraborty
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          CSE 2nd year
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/developers/dev 2.jpeg" alt=""></img>
                      </div>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".6s"
                        style={{ fontFamily: "Arial", fontWeight: "bold" }}
                      >
                        Web Developer
                      </h4>
                    </div>
                  </div>

                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Subhakash Paul
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          CSE 2nd year
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/developers/dev 1.jpg" alt=""></img>
                      </div>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".6s"
                        style={{ fontFamily: "Arial", fontWeight: "bold" }}
                      >
                        Web Developer
                      </h4>
                    </div>
                  </div>






                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="program_details_area detials_bg_1 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section_title text-center mb-80  wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>
                    Special Thanks
                  </h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="program_detail_wrap">
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Barsho Ghosh
                        </span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          GS, Student Union, SVIST
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/enthu/barsho.jpg" alt=""></img>
                      </div>
                      
                    </div>
                  </div>
                  <div className="single_propram">
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span
                          className=" wow fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >Anubhab Ghoshal</span>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          AGS, Student Union, SVIST
                        </h4>
                      </div>
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                      >
                        <img src="img/assets/ags.JPG" alt=""></img>
                      </div>
                      {/* <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Web Developer</h4> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Member;

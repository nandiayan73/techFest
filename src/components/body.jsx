
import { useState,useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
const Body=()=>{
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
                      Enthuzea 2024
                    </h3>
                  </div>
                </div>
              </div>
              <center>
                <img
                  src="img/enthu/must.png"
                  style={{ width: "55%", borderRadius: "10%" }}
                ></img>
              </center>
              <br></br>
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
                            Ananya X Bohemian Baul is here{" "}
                          </span>
                        </div>
                        <div
                          className="thumb wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".5s"
                        >
                          <img src="img/assets/poster1.jpg" alt=""></img>
                        </div>
                        <h4
                          className="wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".6s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Mark the date: 25 May
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
                            Loko Express is also here
                          </span>
                        </div>
                        <div
                          className="thumb wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".5s"
                        >
                          <img src="img/assets/poster2.jpg" alt=""></img>
                        </div>
                        <h4
                          className="wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".6s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Mark the date: 24 May
                        </h4>
                      </div>
                    </div>

                    <div className="single_propram">
                      <div className="inner_wrap">
                        <div className="circle_img"></div>
                        <div className="porgram_top">
                          <span
                            className="wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".3s"
                            style={{ fontFamily: "Arial", fontWeight: "bold" }}
                          >
                            Get to see{" "}
                          </span>
                          <h4
                            className="wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".4s"
                            style={{ fontFamily: "Arial", fontWeight: "bold" }}
                          >
                            Mesmerizing Dance performances💃{" "}
                          </h4>
                        </div>
                        <div
                          className="thumb wow fadeInRight"
                          data-wow-duration="1s"
                          data-wow-delay=".5s"
                        >
                          <img src="img/program_details/4.jpg" alt=""></img>
                        </div>
                        <h4
                          className="wow fadeInRight"
                          data-wow-duration="1s"
                          data-wow-delay=".6s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Dancing connects your body with your soul
                        </h4>
                      </div>
                    </div>

                    <div className="single_propram">
                      <div className="inner_wrap">
                        <div className="circle_img"></div>
                        <div className="porgram_top">
                          <span
                            className="wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".3s"
                            style={{ fontFamily: "Arial", fontWeight: "bold" }}
                          >
                            Fashion Show👗
                          </span>
                        </div>
                        <div
                          className="thumb wow fadeInRight"
                          data-wow-duration="1s"
                          data-wow-delay=".5s"
                        >
                          <img
                            src="img/program_details/fashion.jpg"
                            alt=""
                          ></img>
                        </div>
                        <h4
                          className="wow fadeInRight"
                          data-wow-duration="1s"
                          data-wow-delay=".6s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Know the new trends
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
                            Singing Competetion
                          </span>
                          {/* <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Intra College Competetion</h4> */}
                        </div>
                        <div
                          className="thumb  wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".5s"
                        >
                          <img src="img/program_details/music.jpg" alt=""></img>
                        </div>
                        <h4
                          className=" wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".6s"
                          style={{ fontFamily: "Arial", fontWeight: "bold" }}
                        >
                          Enjoy the musical melody
                        </h4>
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
}
export default Body;
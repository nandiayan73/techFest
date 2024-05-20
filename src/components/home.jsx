import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios from "axios";
import ProgramCard from "../adminPanel/Detailsnew";
import { Center, Square, Circle, Button, Box } from "@chakra-ui/react";
import NewCard from "./eventCard";
import { useMediaQuery } from "@chakra-ui/react";
import Timer from "./Timer"; // Import Timer component

const Home = () => {
  const [i, setI] = useState(0);
  const [time, setTimer] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [tabIndex, setTabIndex] = useState(0);
  const [multipleColor, setMultipleColor] = useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    const colors = [
      "red",
      "violet",
      "#13fb03",
      "yellow",
      "white",
      "#fff5b6",
      "orange",
      "#bdbddb",
      "orange",
      "#8B8000",
    ];
    setMultipleColor(colors[time % 5]);
    const tabs = setInterval(() => {
      if (time % 2 === 0) {
        setTabIndex(i);
        setI(i + 1);
        if (i === 4) setI(0);
      }
      setTimer(time + 1);
    }, 1000);
    return () => clearInterval(tabs);
  });

  return (
    <>
      <Header />
      <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12">
                <div className="slider_text text-center">
                  <div
                    className="shape_1 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    <img src="img/shape/shape_1.svg" alt=""></img>
                  </div>
                  <div
                    className="shape_2 wow fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    <img src="img/shape/shape_2.svg" alt=""></img>
                  </div>
                  <span
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                    style={{
                      fontSize: isMobile ? "150%" : "250%",
                      fontFamily: "cursive",
                      color: "white",
                    }}
                  >
                    Swami Vivekananda Institute Of Science & Technology
                  </span>
                  <br></br>
                  <span
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                    style={{
                      fontSize: isMobile ? "150%" : "250%",
                      fontFamily: "cursive",
                    }}
                  >
                    welcomes you to
                  </span>
                  <h3
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                    style={{ paddingBottom: isMobile ? "55px" : "0px" }}
                  >
                    ENTHUZEA 2024
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Center color="white" style={{ backgroundColor: "black" }}>
        <h1
          style={{
            color: multipleColor,
            padding: "0px",
            paddingBottom: "2%",
            margin: "0px",
            fontWeight: "bold",
            fontSize: isMobile ? "47px" : "80px",
          }}
        >
          We Are Back
        </h1>
      </Center>

          {}
      {/* <Timer selectedDateTime={new Date(2024, 4, 24)} />{" "} */}
      {/* Render Timer component */}
      <div style={{ backgroundColor: "black" }}>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <img
            style={{ width: "80%", borderRadius: "10px", height:"800px" }}
            src="img/ENTHUZEA 2024/poster.jpg"
          ></img>
        </center>
      </div>
      <ProgramCard />
      <div style={{ backgroundColor: "black" }}>
        <center>
          <h1
            style={{
              color: "red",
              padding: "0px",
              paddingBottom: "2%",
              margin: "0px",
            }}
          >
            Sponsored By
          </h1>
          <Box>
            <input
              type="range"
              min="0"
              max="4"
              value={tabIndex}
              onChange={handleSliderChange}
            />
            <Tabs index={tabIndex} onChange={handleTabsChange}>
              <TabPanels>
                <TabPanel>
                  <img
                    src="img/enthuzea 2022/sponsor.jpg"
                    style={{
                      width: "40%",
                      borderRadius: "0%",
                      paddingBottom: "2%",
                      display: "inline",
                    }}
                  ></img>
                </TabPanel>
                <TabPanel>
                  <img
                    src="img/enthuzea 2022/sponsor2.jpg"
                    style={{
                      width: "40%",
                      borderRadius: "0%",
                      paddingBottom: "2%",
                      display: "inline",
                      paddingLeft: "3%",
                    }}
                  ></img>
                </TabPanel>
                <TabPanel>
                  <img
                    src="img/enthuzea 2022/sponsor3.jpg"
                    style={{
                      width: "40%",
                      borderRadius: "0%",
                      paddingBottom: "2%",
                      display: "inline",
                      paddingLeft: "3%",
                    }}
                  ></img>
                </TabPanel>
                <TabPanel>
                  <img
                    src="img/enthuzea 2022/sponsor4.png"
                    style={{
                      width: "40%",
                      height: "190px",
                      borderRadius: "0%",
                      paddingBottom: "2%",
                      display: "inline",
                      paddingLeft: "3%",
                    }}
                  ></img>
                </TabPanel>
                <TabPanel>
                  <img
                    src="img/enthuzea 2022/sponsor5.jpg"
                    style={{
                      width: "40%",
                      borderRadius: "0%",
                      paddingBottom: "2%",
                      display: "inline",
                      paddingLeft: "3%",
                    }}
                  ></img>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default Home;

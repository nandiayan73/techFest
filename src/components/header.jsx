import { useState, useEffect } from "react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
const Header = ({ color }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [mob, setMob] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [date, setDate] = useState("");
  const [countdown, setCountdown] = useState("");
  const [colorChange, setColorchange] = useState(false);
  const navigate = useNavigate();
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  useEffect(() => {
    const interval = setInterval(() => {
      var eventDate = new Date(2024, 4, 24);
      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      const currentDate = new Date();
      var distance = eventDate - currentDate;

      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (hours < 10) hours = 0 + hours.toString();
      if (minutes < 10) minutes = 0 + minutes.toString();
      if (seconds < 10) seconds = 0 + seconds.toString();
      const timer = days + ":" + hours + ":" + minutes + ":" + seconds;
      setCountdown(timer);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <header>
        <div
          style={{
            backgroundColor: colorChange ? "black" : color,
            backgroundAttachment: "fixed",
            position: "fixed",
            height: isMobile ? "15%" : "20%",
          }}
          className="header-area "
        >
          <div
            style={{
              height:"150px"
            }}
            id="sticky-header"
            className="main-header-area"
          >
            <div className="container">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div
                    className="col-xl-3 col-lg-3"
                    style={{ display: "inline" }}
                  >
                    <div className="logo">
                      <a href="/">
                        <img
                          style={{
                            width: isMobile ? "30%" : "50%",
                            borderRadius: isMobile ? "50px" : "40px",
                          }}
                          margin="0px"
                          padding="0px"
                          src="./img/logo.png"
                          alt="logo"
                        ></img>
                      </a>
                    </div>
                  </div>
                  {isMobile ? (
                    <div className="col-xl-3 col-lg-3  d-lg-block">
                      <div className="buy_tkt">
                        <div className="book_btn  d-lg-block">
                          <Button
                            style={{
                              bottom: "100px",
                              fontSize: "200%",
                              marginTop: isMobile ? "20px" : "0px",
                              color: "white",
                            }}
                            display={{ md: mob }}
                            ref={btnRef}
                            colorScheme="blackAlpha"
                            onClick={onOpen}
                          >
                            ≡
                          </Button>
                          <Drawer
                            isOpen={isOpen}
                            placement="right"
                            onClose={onClose}
                            finalFocusRef={btnRef}
                          >
                            <DrawerOverlay />
                            <DrawerContent>
                              <DrawerCloseButton />
                              <DrawerHeader
                                style={{
                                  color: "red",
                                  fontFamily: "arial",
                                  backgroundColor: "black",
                                }}
                              >
                                ENTHUZEA
                              </DrawerHeader>

                              <DrawerBody style={{ backgroundColor: "black" }}>
                                <div className="main-menu  d-lg-block">
                                  <nav>
                                    <ul id="navigation">
                                      <li
                                        style={{
                                          padding: "1%",
                                          color: "white",
                                        }}
                                      >
                                        <a href="/">Home</a>
                                      </li>
                                      <li
                                        style={{
                                          padding: "1%",
                                          color: "white",
                                        }}
                                      >
                                        <a href="/members">Member</a>
                                      </li>
                                      <li
                                        style={{
                                          padding: "1%",
                                          color: "white",
                                        }}
                                      >
                                        <a href="/pasttour">Past Tour</a>
                                      </li>
                                      <li
                                        style={{
                                          padding: "1%",
                                          color: "white",
                                        }}
                                      >
                                        <a href="/about">
                                          About <i></i>
                                        </a>
                                      </li>
                                      <Menu>
                                        <MenuButton as={Button}>
                                          Events
                                        </MenuButton>
                                        <MenuList>
                                          <MenuButton
                                            onClick={() => {
                                              navigate("/events");
                                            }}
                                          >
                                            Fest Info
                                          </MenuButton>
                                          <MenuItem
                                            onClick={() => {
                                              navigate("/dept");
                                            }}
                                          >
                                            Dept. Info
                                          </MenuItem>
                                        </MenuList>
                                      </Menu>
                                    </ul>
                                  </nav>
                                </div>
                              </DrawerBody>

                              <DrawerFooter
                                style={{ backgroundColor: "black" }}
                              >
                                <Button
                                  variant="outline"
                                  mr={3}
                                  onClick={onClose}
                                  style={{ color: "white" }}
                                >
                                  Cancel
                                </Button>
                                
                              </DrawerFooter>
                            </DrawerContent>
                          </Drawer>
                        
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-xl-6 col-lg-6">
                      <div className="main-menu d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li style={{ padding: "0%" }}>
                              <a
                                style={{
                                  fontFamily: "Arial",
                                  fontWeight: "bold",
                                }}
                                href="/members"
                              >
                                Member
                              </a>
                            </li>
                            <li style={{ padding: "0%" }}>
                              <a
                                style={{
                                  fontFamily: "Arial",
                                  fontWeight: "bold",
                                }}
                                href="/pasttour"
                              >
                                Past Tour
                              </a>
                            </li>
                            <li style={{ padding: "0%" }}>
                              <a
                                style={{
                                  fontFamily: "Arial",
                                  fontWeight: "bold",
                                }}
                                href="/about"
                              >
                                About <i></i>
                              </a>
                            </li>
                            <Menu>
                              <MenuButton as={Button}>Events</MenuButton>
                              <MenuList>
                                <MenuItem
                                  onClick={() => {
                                    navigate("/events");
                                  }}
                                >
                                  Fest Info
                                </MenuItem>
                                <MenuItem
                                  onClick={() => {
                                    navigate("/dept");
                                  }}
                                >
                                  Dept. Info
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="buy_tkt">
                      <div
                        className="book_btn d-none d-lg-block"
                        style={{ display: isMobile ? "none" : "" }}
                      >
                        <a style={{ fontSize: "120%" }} href="/">
                          {countdown}
                        </a>
                      
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

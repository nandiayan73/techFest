// import './App.css'
import {Routes, Route,Link} from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Login from "./authUser/login"
import Member from "./components/members";
// import Signup from "./authUser/signup"
// import HomePage from './components/homePage';
import AddEvent from './adminPanel/registerEvents';
import TechEvents from './adminPanel/allevents';
import UpdatedEvents from "./components/events";
import MemberPage from "./adminPanel/createMember";
import Body from "./components/body";
import Tour from "./components/Tour";
import "./components/dept"
import Dept from "./components/dept";
function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home key="1" ></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/members" element={<Member></Member>}></Route>
    <Route path="/events" element={<UpdatedEvents></UpdatedEvents>}></Route>
    <Route path="/body" element={<Body></Body>}></Route>
    <Route path="/pasttour" element={<Tour></Tour>}></Route>
    <Route path="/dept" element={<Dept></Dept>}></Route>
    {/* <Route path="/upcomingevents" element={<TechEvents></TechEvents>}></Route> */}
    {/* <Route path="/login" element={<Login></Login>}></Route> */}
    {/* <Route path="/signup" element={<Signup></Signup>}></Route> */}
    {/* <Route path="/home" element={<HomePage></HomePage>}></Route> */}
    {/* // "build": "vite build", */}
    {/* <Route path="/admin/register" element={<AddEvent></AddEvent>}></Route>
    <Route path="/admin/events" element={<TechEvents></TechEvents>}></Route>
    <Route path="/admin/login" element={<Login></Login>}></Route>
    <Route path="/admin/members" element={<MemberPage></MemberPage>}></Route> */}
  </Routes>
    </>
  )
}

export default App
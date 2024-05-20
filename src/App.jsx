
import {Routes, Route,Link} from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Login from "./authUser/login"
import Member from "./components/members";
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
  </Routes>
    </>
  )
}

export default App

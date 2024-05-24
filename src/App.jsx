import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Member from "./components/members";
import AddEvent from "./adminPanel/registerEvents";
import TechEvents from "./adminPanel/allevents";
import UpdatedEvents from "./components/events";
import MemberPage from "./adminPanel/createMember";
import Body from "./components/body";
import Tour from "./components/Tour";
import "./components/dept";
import Dept from "./components/dept";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PublishPost from "./components/PublishPost/PublishPost";
import Logout from "./components/Auth/Logout";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home key="1"></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/members" element={<Member></Member>}></Route>
        <Route path="/events" element={<UpdatedEvents></UpdatedEvents>}></Route>
        <Route path="/body" element={<Body></Body>}></Route>
        <Route path="/pasttour" element={<Tour></Tour>}></Route>
        <Route path="/dept" element={<Dept></Dept>}></Route>
        {/* Login */}
        <Route path="/login" element={<Login />}></Route>
        {/* Register */}
        <Route path="/register" element={<Register />}></Route>
        {/* Publish Post */}
        <Route path="/publish-post" element={<PublishPost />}></Route>
        {/* Logout */}
        <Route path="/gallery" element={<Gallery />}></Route>
        {/* Gallery*/}
      </Routes>
    </>
  );
}

export default App;

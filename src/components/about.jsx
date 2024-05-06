import Footer from "./footer";
import Header from "./header";

const About =()=>{
    return (<>
  <Header></Header>
     <div className="about_area black_bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section_title text-center mb-80">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <h1>{import.meta.env.VITE_HOST}</h1> */}
                        <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" style={{color: "red",opacity:"1",zIndex:"22px"}}>About Program</h3>
                        {/* <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" style={{opacity:"0.1"}} >The event regularly attracts a diverse range of attendees from around the city, across different professions and ages .</p> */}
                        <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" style={{opacity:"1"}} >This event occurs at the mid of May every year. It is a stage of bringing out the talents of our students. We bring delight, fun and energy.</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                    <div className="about_thumb">
                        <div className="shap_3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                            <img src="img/shape/shape_3.svg" alt=""></img>
                        </div>
                        <div className="thumb_inner  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <img  src="img/enthu/1.png" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="about_info pl-68">
                        <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">ENTHUZEA is awesome!</h4>
                        {/* <p className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">This event offers its audience with energy, entairtainment and joy. Join now to witness the ideas of the creative minds of the youths.</p> */}
                        <p className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s" ><p style={{display:"inline",color:"white"}}>ENTHUZEA</p> happens every mid summer.This event offers its audience with energy, entertainment and joy. It is something everyone waits for.</p>
                        <a href="/body" className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">know More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>)
}
export default About;
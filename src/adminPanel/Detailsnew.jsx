const Details=()=>{
    return (<>
    <div className="program_details_area detials_bg_1 overlay2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center mb-80  wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                        <h3 style={{fontFamily:"Arial",fontWeight:"bold"}}>Fest Timings</h3>
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
                                    <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Fakira</span>
                                    <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" style={{fontFamily:"Arial",fontWeight:"bold"}}>JOY GURU</h4>
                                </div>
                                <div className="thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/enthu/2.jpg" alt=""></img>
                                    <video controls>
                                        <source src="img/enthu/event1.mp4" type="video/mp4"></source>
                                    </video>  
                                </div>
                                <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 20 May</h4>
                            </div>
                        </div>
                        <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Riddles</span>
                                    {/* <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" style={{fontFamily:"Arial",fontWeight:"bold"}}>JOY GURU</h4> */}
                                </div>
                                <div className="thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/enthu/5.jpg" alt=""></img>
                                    <video controls>
                                        <source src="img/enthu/event2.mp4" type="video/mp4"></source>
                                    </video>  
                                </div>
                                <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Mark the date: 19 May</h4>
                            </div>
                        </div>

                        <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Dancing Competition</span>
                                    {/* <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Intra College Competition</h4> */}
                                </div>
                                <div className="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/program_details/4.jpg"  alt=""></img>
                                </div>
                                <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Dancing connects your body with your soul</h4>
                            </div>
                        </div>


                        <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Fashion Show</span>
                                    {/* <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Intra College Competition</h4> */}
                                </div>
                                <div className="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/program_details/2.jpg" alt=""></img>
                                </div>
                                <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Know the new trends</h4>
                            </div>
                        </div>

                       
                         <div className="single_propram">
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top"> 
                                    <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Singing Competition</span> 
                                     {/* <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Intra College Competition</h4>  */}
                                 </div>
                                <div className="thumb  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src="img/program_details/3.jpg" alt=""></img>
                                </div>
                                <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{fontFamily:"Arial",fontWeight:"bold"}}>Enjoy the musical melody</h4>
                            </div>
                        </div> 
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>)
}
export default Details;
import { useEffect, useState } from "react";

const Details=({name,description,about,pic,index})=>{
    useEffect(()=>{
        console.log({index})
        if(index%2===0){
            setDis("")
            setDiss("none")
        }
        else if(index%2!==0){
            setDis("none")
            setDiss("")
        }
    })
    const [dis,setDis]=useState("none")
    const [diss,setDiss]=useState("none")
    return (<>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="program_detail_wrap">

                        <div className="single_propram" style={{display:dis}}>
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">{name}</span>
                                    <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">{description}</h4>
                                </div>
                                <div className="thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src={pic} alt=""></img>
                                </div>
                                <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">{about}</h4>
                            </div>
                        </div>
                        <div className="single_propram" style={{display:diss}}>
                            <div className="inner_wrap">
                                <div className="circle_img"></div>
                                <div className="porgram_top">
                                    <span className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">{name}</span>
                                    <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">{description}</h4>
                                </div>
                                <div className="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                    <img src={pic} alt=""></img>
                                </div>
                                <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">{about}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
    </>)
}
export default Details;
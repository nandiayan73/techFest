import "../App.css"
const PCard=({topic,aim,pic})=>{
    return (<>                
                        <div className="col-lg-6 col-md-6">
                            <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div data-tilt className="thumb">
                                    <img src={pic} alt="" width="10%"></img>
                                </div>
                                <div className="performer_heading">
                                    <h4>{aim}</h4>
                                    <span>{topic}</span>
                                </div>
                            </div>
                        </div>
    </>)
}
export default PCard;

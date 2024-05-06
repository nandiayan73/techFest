const Header=()=>{
    return (<>
      <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3">
                                <div className="logo">
                                    <a href="http://localhost:5173/admin">
                                        {/* <img width="20%" margin="0px" padding="0px" src="./img/logo.png" alt=""></img> */}
                                        <p>Admin panel</p>

                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="/admin/register">Add Events</a></li>
                                            <li><a href="/admin/events">All Events</a></li>
                                            <li><a href="/admin/members">Add Members</a></li>
                                            {/* <li><a href="/blog">blog <i></i></a></li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="buy_tkt">
                                    <div className="book_btn d-none d-lg-block">
                                        <a href="/">Return to Home</a>
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
    </>)
}
export default Header;
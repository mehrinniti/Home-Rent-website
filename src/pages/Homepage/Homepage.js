import React from 'react';
import './Homepage.css';
import review from './../Review/Review.js';
import img1 from './../../images/logo4.svg';
import img2 from './../../images/inner_01.png';
import img3 from './../../images/bg3.jpg';
import img4 from './../../images/bg4.jpg';
import img5 from './../../images/img1.png';
import video1 from './../../images/cliff-1911.mp4';
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div>


            {/* <!-- Banner --> */}

            <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video className="banner-video" src={video1} width="100%" autoplay></video>

                    </div>
                    <div className="carousel-item second-banner-img">

                        <p className="second-banner first-banner-text">Your Dream <span className="second-banner-text">Our Passion</span></p>


                    </div>
                    <div className="carousel-item ">
                        <video className="banner-video" src={video1} width="100%" autoplay></video>
                    </div>
                    <div className="carousel-item second-banner-img">

                        <p className="second-banner first-banner-text">House <span className="second-banner-text">First className</span></p>


                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* <!-- 2nd Section --> */}


            <div className="idea-section">
                <div className="container text-center text-light second-section ml-0">
                    <div className="row align-items-start">
                        <div className="col text-start pe-5">
                            <p className="PHILOSOPHY">
                                <box-icon name='dots-horizontal' color='#ffffff'></box-icon>PHILOSOPHY
                            </p>
                            <h1 className="idea-text gradient-text-color">The Idea</h1><br />
                            <p className="idea-peragraph">A house rental system is a worthwhile project that can simplify finding a suitable
                                rental property
                                for landlords and tenants. This system is a web and app-based application that allows house
                                owners and tenants to manage their properties. The system will be able to help the users to find
                                them their desired apartment or house for rent. The house owner and the person renting the house
                                will be able to see all the details they need about the house and the persons who will be renting it
                                through this system.</p>
                            <a className="idea-view-anchor" href="#">View More &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                        <div className="col float-end">
                            <img width="95%" src={img2} alt="" />
                        </div>

                    </div>

                    <div className="container text-start idea-count">
                        <div className="row align-items-start">
                            <div className="col">
                                <h1 className="idea-text number-color"  >1270</h1>
                                <p className="fw-semibold">SQUARE METERS</p>
                            </div>
                            <div className="col">
                                <h1 className="idea-text number-color"  >10</h1>
                                <p className="fw-semibold">SEPARATE VILLAS</p>
                            </div>
                            <div className="col">
                                <h1 className="idea-text number-color"  >20</h1>
                                <p className="fw-semibold">MILES FROM THE CITY</p>
                            </div>
                            <div className="col">
                                <h1 className="idea-text number-color"  >2023</h1>
                                <p className="fw-semibold">PROJECT FINISH</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



            {/* <!-- 3rd Section --> */}

            <div className=" text-center">

                <div className="row m-0">
                    <div className="col-7 third-section-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="col-4 third-section-text text-start ms-5 mt-5">

                        <p className="PHILOSOPHY">
                            <box-icon name='dots-horizontal' color='#000'></box-icon>MATERIALS
                        </p>
                        <h1 className="idea-text gradient-text-color">Fine Touch of Luxury</h1><br />
                        <p className="idea-peragraph">Guided by our philosophy we seek to enhance the singular characteristics presented in
                            each property that are
                            as particular information clickthroughs a fingerprint immersion along loop.</p>
                        <a className="idea-view-anchor " href="#">View More &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i></a>

                    </div>
                </div>
            </div>




            {/* <!-- 4th Section --> */}

            <div className=" text-center">

                <div className="row m-0">

                    <div className="col-4 third-section-text text-start ms-5 mt-5">

                        <p className="PHILOSOPHY">
                            <box-icon name='dots-horizontal' color='#000'></box-icon>INTERIORS
                        </p>
                        <h1 className="idea-text gradient-text-color">Superior Style</h1><br />
                        <p className="idea-peragraph">Bring to the table win-win survival strategies to ensure proactive domination. At the
                            end of the day, going forward, a new normally evolved from generation X is on the runway heading towards.</p>
                        <a className="idea-view-anchor" href="#">View More &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i></a>

                    </div>

                    <div className="col-7 fourth-section-img">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>



            {/* <!-- 5th section --> */}
            <div className="fifth-section">
                <div className="container text-center">

                    <div className="row">
                        <div className="col-6 text-start">
                            <p className="PHILOSOPHY text-light">
                                <box-icon name='dots-horizontal' color='#ffffff'></box-icon>NESTIN HOUSE
                            </p>
                            <h1 className="idea-text gradient-text-color">Designed to meet the highest criteria</h1>
                        </div>
                        {/* <!-- <div className="col-4">col-4</div> --> */}
                    </div>
                </div>


                <div className="container text-start text-light idea-count">
                    <div className="row align-items-start">
                        <div className="col">
                            <h1 className="idea-text number-color"  >
                                <i className="fa-regular fa-building"></i>
                            </h1>
                            <p className="fw-semibold">PROJECT MANAGEMENT</p>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity.</p>
                        </div>
                        <div className="col">
                            <h1 className="idea-text number-color"  >
                                <i className="fa-solid fa-solar-panel"></i>
                            </h1>
                            <p className="fw-semibold">SOLAR PANELS</p>
                            <p>To beta test override the digital divide with additional clickthroughs from.</p>
                        </div>
                        <div className="col">
                            <h1 className="idea-text number-color"  >
                                <i className="fa-solid fa-leaf"></i>
                            </h1>
                            <p className="fw-semibold">NATURAL ENVIRONMENT</p>
                            <p>DevOps nanotechnology immersion along the information highway will.</p>
                        </div>
                        <div className="col">
                            <h1 className="idea-text number-color"  >
                                <i className="fa-solid fa-mountain-city"></i>
                            </h1>
                            <p className="fw-semibold">URBAN PLANNING</p>
                            <p>Close the loop on focusing solely on the bottom line capitalize on low hanging.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- 6th section --> */}
            <div>
                <p className="PHILOSOPHY ">
                    <box-icon name='dots-horizontal' color='#000'></box-icon>CHOOSE YOUR TYPE
                </p>
                <h1>Sophisticated and Spacious</h1>

                {/* <!-- 3ta Card dibo --> */}



            </div>


            {/* <!-- 7th section --> */}


            <div className=" text-center seventh-section">
                <div className="row align-items-start m-0 ">
                    <div className="col-5 ">
                        <img src={img5} height="250px" alt="" />
                    </div>
                    {/* <!-- <span className="seventh-section-bg"> --> */}

                    <div className="col-4 text-start ">
                        <h1 className="gradient-text-color seventh-section-title">Luxury Town Houses</h1>
                        <h2 className="seventh-section-amount">from $999 000</h2>
                    </div>
                    <div className="col-3 seventh-section-3rd-col mt-5 pt-1">
                        {/* <!-- <button className="btn btn btn-primary btn-lg text-light fw-semibold fs-6 px-5 login-btn seventh-section-btn"
                            type="submit"> <i className="fa-solid fa-mobile-screen"></i>RESERVE YOUR
                            SPOT <p>+088 19276735</p> </button> --> */}
                        <a href="#" className="text-light fw-semibold fs-6 px-4  seventh-section-btn text-decoration-none">
                            <div className="container text-center">
                                <div className="row align-items-start call-btn pt-3 pb-1">
                                    <div className="col-4 fs-1">
                                        <i className="fa-solid fa-mobile-retro fs-1 text-light"></i>
                                    </div>
                                    <div className="col-7 text-start ">
                                        <p>RESERVE YOUR
                                            SPOT</p>
                                        <p className="fs-5 fw-bold">+088 19326326</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>

                    {/* <!-- </span> --> */}
                </div>
            </div>







        </div>
    );
}

export default Homepage;
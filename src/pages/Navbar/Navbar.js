import React from 'react';
import './Navbar.css';
// import review from './../Review/Review.js';
import img1 from './../../images/logo4.svg';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>

            {/* <!-- Navbar --> */}

            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid mx-5 pt-2">
                    <div className="container-fluid ">
                        <img src={img1} alt="" width="46%" height="" />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active text-light fw-semibold pe-5" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/about" className="nav-link text-light fw-semibold pe-5" aria-current="page" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/review" className="nav-link text-light fw-semibold pe-5" aria-current="page" >Review</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-semibold pe-5" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light fw-semibold pe-5" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu text-light fw-semibold pe-5">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-light fw-semibold pe-5">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">

                            <button className="btn btn btn-primary btn-lg text-light fw-semibold fs-6 px-5 login-btn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;
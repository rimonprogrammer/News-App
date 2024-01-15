import React from 'react';
import '../assets/CSS/Footer.css';
import logo from '../assets/Img/news-logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <img src={logo} alt="" />
                    <h3>NewsLine_BD</h3>
                </div>
                <hr className='footer_hr' />
                <div className="col-md-4">
                    <h3>Top Searchest</h3>
                    <ul>
                        <li><Link style={{color : 'white'}} to='/science'>Home</Link></li>
                        <li><Link style={{color : 'white'}} to="/technology">Technology</Link></li>
                        <li><Link style={{color : 'white'}} to="/business">Business</Link></li>
                    </ul>
                </div>
                <hr className='footer_hr' />
                <div className="col-md-4">
                    <input type="text" className='form-control' placeholder='Enter your name' />
                    <button className="btn btn-primary">Submit</button>
                    <ul>
                        <li>Help</li>
                        <li>Privecy policy</li>
                    </ul>
                </div>
                <hr className='text-light m-0 mb-1'/>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <p className='text-light'> &copy; Copyright 2023 || All right reserved MD Rahitul Islam Rimon </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import logo from '../assets/Img/news-logo.png';
import bar from '../assets/Img/bar-icons.png';
import { Link, useLocation } from 'react-router-dom';
import '../assets/CSS/Navbar.css';
import React from 'react';
import LoadingBar from 'react-top-loading-bar';


function Navbar(props) {
  const location = useLocation();
  return (
    <div>
      <LoadingBar
        color='red'
        progress={100}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
      <header className='fixed-top ' style={props.navbarColor}>
        <nav className='container navbar navbar-expand-lg'>
            <Link to='/'><a href="#" className="navbar-brand"><img src={logo} alt="" /></a></Link>
            <button  className='navbar-toggler' data-bs-target='#collapseID' data-bs-toggle='collapse'>
                <img src={bar} alt="" />
            </button>
            <div className="collapse navbar-collapse" id='collapseID'>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item item_1"><Link className={`nav-link link_2 ${location.pathname === '/' ? 'active' : ''}`} to='/'>Home</Link></li>
                    <li className="nav-item"><Link className={`nav-link link_2 ${location.pathname === '/science' ? 'active' : ''}`} to='/science'>Science</Link></li>
                    <li className="nav-item"><Link className={`nav-link link_3 ${location.pathname === '/technology' ? 'active' : ''}`} to='/technology'>Technology</Link></li>
                    <li className="nav-item"><Link className={`nav-link link_4 ${location.pathname === '/entertainment' ? 'active' : ''}`} to='/entertainment'>Entertainment</Link></li>
                    <li className="nav-item"><Link className={`nav-link link_5 ${location.pathname === '/sports' ? 'active' : ''}`} to='/sports'>Sports</Link></li>
                    <li className="nav-item"><Link className={`nav-link link_6 ${location.pathname === '/business' ? 'active' : ''}`} to='/business'>Business</Link></li>
                    <li className="nav-item"><Link className={`nav-link link_7 ${location.pathname === '/health' ? 'active' : ''}`} to='/health'>Health</Link></li>
                    <li className="nav-item">
                        <div className="nav-link ps-5 form-check form-switch">
                          <label htmlFor="bg_Changer">Dark</label>
                            <input onClick={props.darkMode} type="checkbox" className='form-check-input' id="bg_Changer" />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
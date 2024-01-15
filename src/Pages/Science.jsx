import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import News from '../Component/News';
import Footer from '../Component/Footer';
import '../assets/CSS/Footer.css';

function Science() {
  const [navbarColor, setNavbarColor] = useState({backgroundColor : '#079992'})
  const [mode, setMode] = useState({
    color : '#0D1117',
    backgroundColor : 'white'
  });
  const darkMode = () =>{
    if(mode.backgroundColor =='white'){
        setMode({
          color : 'white',
          backgroundColor : '#0D1117'
        })
        setNavbarColor({backgroundColor : '#151b25'});
        document.body.style.color = 'white';
        document.body.style.backgroundColor = '#151b25'
    }
    else{
      setMode({
        color : '#0D1117',
        backgroundColor : 'white'
      })
      setNavbarColor({backgroundColor : '#079992'});
      document.body.style.color = '#0D1117';
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
        <Navbar  navbarColor={navbarColor} mode={mode} darkMode={darkMode} />
        <div className="container mt-5">
            <News pageSize={12} category="science" />
        </div>
        <Footer/>
    </div>
  )
}

export default Science
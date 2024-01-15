import Navbar from '../Component/Navbar';
import News from '../Component/News';
import Footer from '../Component/Footer';
import '../assets/CSS/Footer.css';
import React, { useState } from 'react';

function Home() {
  // apiKey = process.env.REACT_API_KEY
  // const apiKey = '357c15e9ebfb47b1bcc7055dbd67fb86'
  
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
       <div>
        <Navbar navbarColor={navbarColor} mode={mode} darkMode={darkMode} />
        <News pageSize={12} category="general" />
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
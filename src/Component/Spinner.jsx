import React from 'react';
import spinner from '../assets/Img/ZZ5H.gif';
import '../assets/CSS/Spinner.css';

function  Spinner() {
    return (
      <div className='container spinner_Aria'>
        <img src={spinner} alt="loading"/>
      </div>
    )
}

export default Spinner;

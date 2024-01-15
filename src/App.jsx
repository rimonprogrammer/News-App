import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Science from './Pages/Science';
import Technology from './Pages/Technology';
import Entertainment from './Pages/Entertainment';
import Business from './Pages/Business';
import Sport from './Pages/Sport';
import Health from './Pages/Health';


export default class App extends Component {
  render() {
    return (
      <div>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/science' element={<Science/>} />
            <Route path='/technology' element={<Technology/>} />
            <Route path='/entertainment' element={<Entertainment/>} />
            <Route path='/sports' element={<Sport/>} />
            <Route path='/business' element={<Business/>} />
            <Route path='/health' element={<Health/>} />
         </Routes>
      </div>
    )
  }
}

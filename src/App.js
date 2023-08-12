import './App.css';
import React from'react';
import Home from './Home';
import AdminUtil from './Admin_util';
import Calculations from './calculator_tool/Calculator';
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
<HashRouter>
            <div>
                <h1 className='title'>React Project</h1>
                <h2>Calculator is kinda broken but it looks cool..)</h2>
                <h2> (it doesnt do math for some reason)</h2>
                <ul className="header">
                    <li className='home_Button'><NavLink to="/Home">Home</NavLink></li>
                    <li className='admin_Button'><NavLink to="/Admin_util">Admin Tools</NavLink></li>
                    <li className='calculator_Button'><NavLink to="/Calculations">Calculations</NavLink></li>
                    
                </ul>
            <div className="content">

            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Admin_util" element={<AdminUtil/>}/>
                <Route path="/Calculations" element={<Calculations/>}/>
            </Routes>
            </div>
        </div>
        </HashRouter>
  );
}

export default App;

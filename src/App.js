import './App.css';
import React from'react';
import Home from './Home';
import AdminUtil from './Admin_util';
import "./GitHub.css"
import Loader from './Loader';
import './Blob.css'
import GitHub from "./GitHub"
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
                <ul className="header">
                    <li className='home_Button'><NavLink to="/Home">Home</NavLink></li>
                    <li className='github_Button'><NavLink to="/GitHub">GitHub</NavLink></li>
                    <li className='loader'><NavLink to="/Loader">Blob</NavLink></li>
                    <li className='admin_Button'><NavLink to="/Admin_util">Admin Tools</NavLink></li>
                    
                </ul>
            <div className="content">

            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Admin_util" element={<AdminUtil/>}/>
                <Route path="/GitHub" element={<GitHub/>}/>
                <Route path="/Loader" element={<Loader/>}/>
            </Routes>
            </div>
        </div>
        </HashRouter>
  );
}

export default App;

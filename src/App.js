import logo from './logo.svg';
import './App.css';
import Particles from "react-tsparticles"
import Navbar from  "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';

import Skills from './components/Skills';
import Projects from './components/Projects';

import Contact from './components/Contact';
import { useState,useEffect } from 'react';




function App() {

  const [dark,setdark]=useState(false);

  const handlemode=()=>{
    setdark(!dark);
  };
  
  
  
  return (
    
    
    <div className="App" style={{backgroundColor:dark?"black":"#ffffff"}} >
      
       <Navbar handlemode={handlemode} mode={dark}/>
        <Home handlemode={handlemode} mode={dark}/>
        
        <About handlemode={handlemode} mode={dark}/>
        <Skills handlemode={handlemode} mode={dark}/>
        <Projects handlemode={handlemode} mode={dark}/>
        <Contact handlemode={handlemode} mode={dark}/>
      
    </div>
      
     
     
  
   
  );
}

export default App;

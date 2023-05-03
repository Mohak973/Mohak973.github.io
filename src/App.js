import logo from './logo.svg';
import './App.css';

import Navbar from  "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Chakra from "./Assets/chakra.png"
import React from "./Assets/react.png"
import Netlify from "./Assets/netlify.png"
import Redux from "./Assets/profile.png"
import Type from './Assets/typescript.png'
import Github from "./Assets/github.png"
import Html from "./Assets/Html.png"
import Css from "./Assets/CSS.png"
import Contact from './components/Contact';





function App() {
  
  return (
    
    
    <div className="App" style={{backgroundImage:'url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTMxNGNmYmNmNzA1YmRjN2IyMmMwYTc3YmNjYzkwNGRiZDY4YzA2YiZjdD1n/3ohhwNqFMnb7wZgNnq/giphy.gif)',backgroundRepeat:"repeat"}}>
      
    
       
        <Navbar />
      <Home />
      
      <About />
      <Skills />
      <Projects />
      <Contact />
        </div>
      
     
     
  
   
  );
}

export default App;

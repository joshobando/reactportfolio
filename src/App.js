import React from "react"
import logo from './logo.svg';
import './App.css';
import Main from "../src/views/Main";
// import Projects from "./views/";
import Resume from "../src/views/Resume";
import About from '../src/views/About';
import Contact from '../src/views/Contact';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Main/>
          <Projects/>
          <About/>
          <Resume/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;

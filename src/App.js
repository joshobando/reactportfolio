import React from "react";
// import logo from './logo.svg';
import './App.css';
import Main from "./views/Main";
// import Projects from "./views/";
import Resume from "./views/Resume";
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Main/>
          {/* <Projects/> */}
          <About/>
          <Resume/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;

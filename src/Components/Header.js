import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Joshua.</h1>
            <h3>I'm a Perth Amboy based <span>developer</span>. An Aspiring Full Stack Developer.</h3>
            <hr />
            <ul className="social">
            <li key="gitgub"><a href="https://www.linkedin.com/in/joshua-obando-b36878186/"><i className="fa fa-github"></i></a></li>
            <li key="linkedin"><a href="https://github.com/joshobando"><i className="fa fa-linkedin"></i></a></li>
            </ul>
         </div>
      </div>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header>
    );
  }
}

export default Header;

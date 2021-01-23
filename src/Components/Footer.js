import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
            <li key="gitgub"><a href="https://www.linkedin.com/in/joshua-obando-b36878186/"><i className="fa fa-github"></i></a></li>
            <li key="linkedin"><a href="https://github.com/joshobando"><i className="fa fa-linkedin"></i></a></li>
           </ul>

           <ul>
            <li></li>
           </ul>

           <ul className="copyright">
              <li>&copy; Joshua Obando</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;

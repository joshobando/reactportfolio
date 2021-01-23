import React, { Component } from 'react';
import OneStop from '../OneStop.png'
import DevHangout from "../Devhangout.png"
import StockUp from "../stockup.png"
class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div key="project1" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://joshobando.github.io/projectuno/" title="One-Stop Music">
               <img alt="One-Stop Music" src={OneStop} />
                <p>A lyrics website that also plays the song you searched for.</p>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="Dev Hangout" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://dev-hangout.herokuapp.com/" title="Dev Hangout">
               <img alt="Dev Hangout" src={DevHangout} />
               <p>A social site where developers can meet and greet.</p>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>

        <div key="Stock-Up" className="columns portfolio-item">
           <div className="item-wrap">
            <a href="https://my-stock-up.herokuapp.com/" title="Stock-Up">
               <img alt="Stock-Up" src={StockUp} />
                             <p>A stocks app to meet your investing money making needs.</p>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;

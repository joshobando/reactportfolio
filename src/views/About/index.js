import React from "react";
import "./style.css";



function About(){

    return(
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    {/* <img className="about-photo img-fluid" alt="Me"></img > */}
                </div>
                <div className="col-mid">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">i need to make money</p>
                        <p className="bio"><span className="skillHeader">SKills that I've attained</span>
                            <ul className="skillList text-center">
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                            </ul>
                        </p>
                        <p className="bio"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
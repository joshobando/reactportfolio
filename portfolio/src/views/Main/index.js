import React from "react";
import NavBar from "../../components/navbar";
import "./style.css"
import { Link } from "react-scroll";

function MainPage(){
    return(
        <div className="row" id="/">
            <NavBar/>
            <div className="col-mid">
                <div className="mobile=image"></div>
                <div className="intro-text alignCenter">
                    <h2 className="mobile-title">JOSHUA OBANDO</h2>
                    <br></br>
                    <h2 className="intro">Software Engineer</h2>
                    <br></br>
                    <h3>Something motto like</h3>
                </div>
            </div>
        </div>
    )
}
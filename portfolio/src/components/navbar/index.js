import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-md">
            <button 
            className="navbar=toggler"
            type=""
            data-toggle="collapse"
            aria-controls="navbarNavMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
                >
                <i class="fas fa-bars fa-lg"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavMenu">
            <ul className="navbar-nav">
                <li className="nav-item navbar-text">
            
                </li>
            </ul>
            </div>
        </nav>
    )
}
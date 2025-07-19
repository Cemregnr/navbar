import React from "react";
import "./navbar.css"; 

function navbar() {
    return (
        <nav className="navbar">
        <h2 className="logo">Tatil Köyü</h2>
        <ul className="menu">
            <li> <a href="/" className="link"> Home</a></li>
            <li> <a href="/About" className="link">About</a></li>
            <li> <a href="/Contact" className="link"> Contact</a></li>
            </ul>    
        </nav>
    );
}
export default navbar;
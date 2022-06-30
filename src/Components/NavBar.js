import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-warning">


            <ul className="navbar-nav">

            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            
            </ul>

        </nav>

        </>
    )
}

export default NavBar
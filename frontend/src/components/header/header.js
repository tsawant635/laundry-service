import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div className="nav">
            <div className="laundry-text">Laundry</div>
            <ul>
            <Link to="/login">  <li>Home</li></Link>
                <li>Pricing</li>
                <li>Career</li>
                <Link to="/login">  <li className="signintext" >Sign In</li></Link>
            </ul>
        </div>
    )
}

export default Header;
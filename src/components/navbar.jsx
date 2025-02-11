import { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import united_only_group_logo from './Assets/united-only-group-logo.png';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-header" style={{"margin":"0px"}}>
                <h1 className="logo"><img src={united_only_group_logo} alt="Logo"   style={{"margin":"0px"}}/> </h1>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">GET A QUOTE</a></li>
                <li><a href="#">REVIEWS</a></li>
                <li><a href="#">REFER A FRIEND</a></li>
                <li><a href="#">BROCHURE</a></li>
            </ul>
        </nav>
    );
}

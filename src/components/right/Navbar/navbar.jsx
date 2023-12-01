import React, {useState} from "react";
import "./navbar.css";
import Soloicon from "./Link → SVG.png"
import Solo from "./Link → Solo.png";
import { Link } from 'react-scroll';
const Navbar = () =>{

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  
    const closeMenu =() => setClick(false)

    return(
        <div className="navbar">
            <div className="nheading">
                <img src={Soloicon} alt="" className="soloIcon" />
                <img src={Solo} alt="" className="solo" />
            </div>
            
            <div className="nheading-option">
            <Link to="srch" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu}className="desktopMenuListItem">Search </Link>

            <Link to="" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu}className="desktopMenuListItem">About us</Link>

            <Link to="" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu}className="desktopMenuListItem">Sign up</Link>

            <Link to="" spy={true} smooth={true} offset={-100} duration={500} onClick ={closeMenu}className="desktopMenuListItem">Log in</Link>
            </div>
        </div>
    )
}

export default Navbar;
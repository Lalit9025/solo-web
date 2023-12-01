import React from "react";
import "./footer.css"
import Solo from './../right/Navbar/Link → Solo.png'
import SVG from './../right/Navbar/Link → SVG.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return(
        <div className="main-footer">
        <div className="footer">
           <div className="f-comp">
            <span className="fcomp-p e-class">Welcome</span>
            <span className="fcomp-p">About us</span>
            <span className="fcomp-p">Blog</span>
           </div>
           <div className="f-comp">
            <span className="fcomp-p e-class">Brands</span>
            <span className="fcomp-p">Search</span>
            <span className="fcomp-p">Market with us</span>
           </div>
           <div className="f-comp">
            <span className="fcomp-p e-class">Creators</span>
            <span className="fcomp-p">Install Solo</span>
            <div className="fcomp-p-e">
                <img src={SVG} alt="" className="f_com_img" />
                <img src={Solo} alt="" className="f_com_img" />
                <FaLinkedin className="f_com_logo"/>
                <FaInstagram className="f_com_logo"/>
                <FiMail className="f_com_logo"/>
            </div>
           </div>
        </div>
        
       
        <span className="footer-des">&#169;Copyright2023 Solo. Powered with❤️ by 
        <span className="f2"> Netz00</span></span>
        </div>
        
    )
}
export default Footer;
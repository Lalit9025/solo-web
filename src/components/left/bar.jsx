import React from "react";
import "./bar.css";
import Optionbx from "./barOptionbx"
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";

const Bar = () =>{
    return(
        <div className="br">
        <div className="up">
           <Optionbx className="br_icon_p" icon ={FaEarthAmericas } des="Discover"/>
           <Optionbx className="br_icon_p" icon ={BiMessageRoundedDetail } des="Messages"/>
           <Optionbx className="br_icon_p" icon = {IoMdContact} des="Top 100 Creators"/>
        </div>

         <div className="up">
           <Optionbx className="br_icon_p" icon ={IoMdHelpCircleOutline} des="Help"/>
           <Optionbx className="br_icon_p" icon ={CgProfile } des="Profile"/>
        </div>
        </div>
    )
}

export default Bar;
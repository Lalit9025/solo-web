import React from "react"
import "./barOptionbx.css"



const Optionbx = (props) =>{
    return (
        <div className="o-box">
            <div className="icon-p">{props.icon()}</div>
            <div className="icon-des">{props.des}</div>
        </div>
    )
}

export default Optionbx;
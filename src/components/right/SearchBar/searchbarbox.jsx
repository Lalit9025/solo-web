import React from "react";
import './searchbarbox.css';
 const SearchBarBox = (props) =>{
    return(
        <div className="search_by_category">
            <img src={props.img} alt="" className="s_img" />
            <span className="s_des">{props.des}</span>

        </div>
    )
}
export default SearchBarBox;
import React, { useEffect, useState } from "react";
import './profiletemp.css'
import { GrLocation } from "react-icons/gr";


const ProfileBox =(props) =>{

    
    return(
        <div className="pr_bx">
            <img src={props.img1} alt="" className="prbx_img" />






            <div className="pr_userprofile">
               <div className="pr_c1">
                   <div className="pr_userdetail">
                    
                        <img src={props.img2} alt="" className="pr_cbox_img" />

                        <div className="userdata">
                          <span className="pr_username">{props.username}</span>
                          <span className="pr_originalname">{props.orginalname}</span>
                        </div>
                   </div>


                    <div className="location">
                        <span className="location_name">{props.country}</span>
                        <GrLocation className="location_icon"/>    
                    </div>
                </div>

                <div className="pr_follower">
                    <div className="fc-eng">
                        <span className="fc_number">{props.follower_count}</span>
                        <span className="fc_text">Followers</span>
                    </div>
                    <div className="fc-eng">
                        <span className="fc_number">{props.percentage}</span>     
                        <span className="fc_text">Engagement</span>   
                    </div>          
                </div>
            </div>


           
        </div>
         
    )
    
}

export default ProfileBox;
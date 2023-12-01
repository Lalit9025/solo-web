import React from "react";
import './profile.css'
import ProfileBox from "./profiletemp";
import r1 from './r1.png'
import r2 from './r2.png'
import r3 from './r3.png'
import r4 from './r4.png'
import r5 from './r5.png'
import r6 from './r6.png'
import user from './user.png'


const Profile = () => {
    return (
        <div className="profile_main">
           <span className="profile_heading">Today Best Profiles</span>
           <div className="profile-component">
                   <div className="pc">
                        <ProfileBox img1={r1} img2={user} username="@brasel9" orginalname="brady shelly" country="India" follower_count="32.2k" percentage="6.64%"/>
                        <ProfileBox img1={r2} img2={user} username="@brasel9" orginalname="brady shelly" country="India" follower_count="32.2k" percentage="6.64%"/>
                        <ProfileBox img1={r3} img2={user} username="@brasel9" orginalname="brady shelly" country="India" follower_count="32.2k" percentage="6.64%"/>
                    </div>  
                    <div className="pc">
                        <ProfileBox img1={r4} img2={user} username="@brasel9" orginalname="brady shelly" country="India" follower_count="32.2k" percentage="6.64%"/>
                        <ProfileBox img1={r5} img2={user} username="@brasel9" orginalname="brady shelly" country="India" follower_count="32.2k" percentage="6.64%"/>
                        <ProfileBox img1={r6} img2={user} username="@brasel9" orginalname="brady shelly" country="India" follower_count="32.2k" percentage="6.64%"/>
                   </div>  
           </div>     
        </div>

    )
}

export default Profile;
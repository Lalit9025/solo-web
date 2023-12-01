import React, { useState } from "react";
import './searchbar.css'
import SearchBarBox from "./searchbarbox"
import Travel from './Travel.png'
import Sports from './Sports.png'
import Marketing from './Marketing.png'
import Family from './Family.png'
import Fashion from './Fashion.png'
import Podcast from './Podcast.png'
import News from './News.png'

const SearchBar =() => {
    return(
        <div id="srch" className="search">
            <div className="search_input">
            <input type="text" placeholder="Search influencers by username, first name, last name,tags" className="search_bar"/>
            <button className="search_btn">Search</button>
            </div>

            <span className="search_heading">Search By Category</span>
            <div className="search_category">
                <SearchBarBox className="search_category_img"img={Travel} des="Travel" />
                <SearchBarBox className="search_category_img" img={Sports} des="Sports"/>
                <SearchBarBox className="search_category_img" img={Marketing} des="Marketing"/>
                <SearchBarBox className="search_category_img" img={Family} des="Family"/>
                <SearchBarBox className="search_category_img" img={Fashion} des="Fashion"/>
                <SearchBarBox className="search_category_img" img={Podcast} des="Podcast"/>
                <SearchBarBox className="search_category_img" img={News} des="News"/>
            </div>
            </div>
        
    )
}

export default SearchBar;
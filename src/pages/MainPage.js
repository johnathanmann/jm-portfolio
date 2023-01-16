import React from "react";
import arrow from "../assets/imgs/arrow.png";

export default function MainPage({handlePageChange }){
    return(
        <div className="container-white text-center">
            <ul id="nav-items">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        <h1 className="big-text">JOHNATHAN <br/>MANN</h1>
        <h2>FULLSTACK DEVELOPER</h2>
        <img src={arrow} alt="Red arrow pointing down"/>
        {/* <button onClick={() => handlePageChange("OtherPage")}>Change Page</button> */}
        </div>
    )
}
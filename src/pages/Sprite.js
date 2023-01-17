import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arrow2 from "../assets/imgs/arrow2.png"
import sprite1 from "../assets/imgs/sprite/sprite1.png"
import sprite2 from "../assets/imgs/sprite/sprite2.png"
import sprite3 from "../assets/imgs/sprite/sprite3.png"
import sprite4 from "../assets/imgs/sprite/sprite4.png"

  
export default function Sprite({handlePageChange }){
    window.scrollTo(0,0);
    return(
        <div className="container-red project">
            <div id="carousel1">
        <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={sprite1}/>
                </div>
                <div>
                    <img src={sprite2}/>
                </div>
                <div>
                    <img src={sprite3}/>
                </div>
                <div>
                    <img src={sprite4}/>
                </div>
            </Carousel>
            </div>
            <div className='project-info'>
            <div className='inline'><img src={arrow2} />
            <h3 onClick={() => handlePageChange("MainPage")}>BACK</h3></div>
            <h1 className="big-text project-header">SPRITE PLANNER</h1>
            <div className='inline'><h4>REACT</h4><h4>MONGODB</h4><h4>REACT</h4></div>
            <p>SPRITE PLANNER IS A MERN STACK PROJECT PLANNING SITE WITH LOG IN FUNCTIONALITY. YOU CAN CREATE PROJECT POSTS WITH TITLES AND DESCRIPTIONS, AND THEN DELETE THEM ONCE THEYRE COMPLETED.</p>
            </div>
            <div id="carousel2">
        <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={sprite1}/>
                </div>
                <div>
                    <img src={sprite2}/>
                </div>
                <div>
                    <img src={sprite3}/>
                </div>
                <div>
                    <img src={sprite4}/>
                </div>
            </Carousel>
            </div>
        </div>
    )
}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import seared from "../assets/imgs/seared.png"
import scribbled from "../assets/imgs/scribbled.png"
  
export default function Sprite({handlePageChange }){
    window.scrollTo(0,0);
    return(
        <div className="container-red project" id="sprite">
        <h1 className="big-text project-header">Sprite Planner</h1>
        <button onClick={() => handlePageChange("MainPage")}>Change Page</button>
        <Carousel showArrows={false} width={500} showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={seared} />
                </div>
                <div>
                <img src={scribbled} />
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}
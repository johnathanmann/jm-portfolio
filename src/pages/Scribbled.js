import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arrow2 from "../assets/imgs/arrow2.png"
import media1 from "../assets/imgs/scribbled/scribbled1.png";

  
export default function MediaQuery({handlePageChange }){
    window.scrollTo(0,0);
    return(
        <div className="container-red project">
            <div id="carousel1">
            <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={media1}/>
                </div>
            </Carousel>
            </div>
            <div className='project-info'>
            <div className='inline'><a href="https://jm-media-tracker.herokuapp.com/" target="_blank"><h3>DEPLOYMENT</h3></a><a  href="https://github.com/johnathanmann/media-tracker" target="_blank"><h3>REPOSITORY</h3></a></div>
            <h1 className="big-text-2 project-header">SCRIBBLED</h1>
            <div className='inline'><h4>REACT</h4><h4>VANILLA CSS</h4></div>
            <p>FRONTEND DRAWING APP WHERE I WORKED WITH THE CODE OF OTHERS AND REFACTORED IT TO BOTH UNDERSTAND HOW OTHERS CODE AND TO MEET MY END GOAL FOR THE PROJECT. A PRACTICE IN WORKING WITH THE CANVAS ELEMENT.</p>
            <div className='inline'><img src={arrow2} />
            <h3 onClick={() => handlePageChange("MainPage")}>BACK</h3></div><br/>
            </div>
            <div id="carousel2">
            <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={media1}/>
                </div>
            </Carousel>
            </div>
        </div>
    )
}
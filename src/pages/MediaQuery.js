import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arrow2 from "../assets/imgs/arrow2.png"
import media1 from "../assets/imgs/media/media1.png"
import media2 from "../assets/imgs/media/media2.png"
import media3 from "../assets/imgs/media/media3.png"
import media4 from "../assets/imgs/media/media4.png"

  
export default function MediaQuery({handlePageChange }){
    window.scrollTo(0,0);
    return(
        <div className="container-red project">
            <div id="carousel1">
        <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={media1}/>
                </div>
                <div>
                    <img src={media2}/>
                </div>
                <div>
                    <img src={media3}/>
                </div>
                <div>
                    <img src={media4}/>
                </div>
            </Carousel>
            </div>
            <div className='project-info'>
            <div className='inline'><a href="https://jm-media-tracker.herokuapp.com/" target="_blank"><h3>DEPLOYMENT</h3></a><a  href="https://github.com/johnathanmann/media-tracker" target="_blank"><h3>REPOSITORY</h3></a></div>
            <h1 className="big-text project-header">MEDIA QUERY</h1>
            <div className='inline'><h4>REACT</h4><h4>MONGODB</h4><h4>CANVAS.JS</h4></div>
            <p>USERS CAN SIGN UP AND LOG THE MEDIA THEY CONSUME. LEAVE YOUR THOUGHTS, A RATING, MINUTES SPENT, AND CATEGORIZE  YOUR ITEMS. ADDITIONALLY YOU CAN SEE STATS ABOUT THE ITEMS YOU LOG.</p>
            <div className='inline'><img src={arrow2} />
            <h3 onClick={() => handlePageChange("MainPage")}>BACK</h3></div><br/>
            </div>
            <div id="carousel2">
        <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={media1}/>
                </div>
                <div>
                    <img src={media2}/>
                </div>
                <div>
                    <img src={media3}/>
                </div>
                <div>
                    <img src={media4}/>
                </div>
            </Carousel>
            </div>
        </div>
    )
}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arrow2 from "../assets/imgs/arrow2.png"
import seared1 from "../assets/imgs/seared/seared1.png"
import seared2 from "../assets/imgs/seared/seared2.png"
import seared3 from "../assets/imgs/seared/seared3.png"

  
export default function Sprite({handlePageChange }){
    window.scrollTo(0,0);
    return(
        <div className="container-red project" id="seared">
            <div id="carousel1">
        <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={seared1}/>
                </div>
                <div>
                    <img src={seared2}/>
                </div>
                <div>
                    <img src={seared3}/>
                </div>
            </Carousel>
            </div>
            <div className='project-info'>
            <div className='inline'><a href="https://seared-project-2.herokuapp.com/" target="_blank"><h3>DEPLOYMENT</h3></a><a  href="https://github.com/johnathanmann/seared" target="_blank"><h3>REPOSITORY</h3></a></div>
            <h1 className="big-text project-header">SEARED</h1>
            <div className='inline'><h4>MYSQL</h4><h4>HANDLEBARS.JS</h4><h4>BOOTSTRAP 4</h4></div>
            <p>SEARED IS A RANDOM RECIPE FINDER. USERS WHO SIGN UP CAN LEAVE REVIEWS. THIS WAS A GROUP PROJECT FOR MY CODING BOOTCAMP. I DID ALL OF THE FRONT END DESIGN AND SCRIPTING. I ALSO HELPED WITH ROUTING.</p>
            <div className='inline'><img src={arrow2} />
            <h3 onClick={() => handlePageChange("MainPage")}>BACK</h3></div><br/>
            </div>
            <div id="carousel2">
        <Carousel showArrows={false}  showStatus={false} renderIndicator={false} showThumbs={false} autoPlay={true} axis={'vertical'} infiniteLoop={true}>
                <div>
                    <img src={seared1}/>
                </div>
                <div>
                    <img src={seared2}/>
                </div>
                <div>
                    <img src={seared3}/>
                </div>
            </Carousel>
            </div>
        </div>
    )
}
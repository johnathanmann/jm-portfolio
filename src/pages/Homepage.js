import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";


export default function Homepage(){
    return(
        <main className="container-fluid text-center mx-auto" id="home">
            <header className="row">
                <div className="col-12">
                    <div className="row">
                        <h1 className="sans-serif-bold mt-5">I'M JOHNNY <span id="sub-header">WEB DEVELOPER 2023</span></h1>
                    </div>
                </div>
            </header>
            <section className="row" id="home-buttons">
                <div className="col-sm-4 d-flex mx-auto justify-content-center">
                    <button className="sans-serif">&#x2022; About</button>
                </div>
                <div className="col-sm-4 d-flex mx-auto justify-content-center">
                    <button className="sans-serif">&#x2022; Projects</button>
                </div>
                <div className="col-sm-4 d-flex mx-auto justify-content-center">
                    <button className="sans-serif">&#x2022; Contact</button>
                </div>
            </section>
        </main>
    )
}
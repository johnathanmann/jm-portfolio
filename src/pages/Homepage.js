import React from "react";
import "../styles/home.css";

export default function Homepage(){
    return(
        <main id="home">
            <header className="container-fluid">
                <div className="row">
                    <div className="col-12" id="area">
                        <h1 className="black hello-kooky ms-3">Hi, I'm <span id="j">J</span><span id="o">o</span><span id="h">h</span><span id="n1">n</span><span id="n2">n</span><span id="y">y</span></h1>
                        <h2 className="duper-bold black display-5 ms-3">Creative Developer & Designer</h2>
                            <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                    </div>
                </div>
            </header>
        </main>
    )
}
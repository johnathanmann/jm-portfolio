import React from "react";
import "../styles/home.css";

export default function Homepage(){
    return(
        <main id="home">
            <header className="container-fluid">
                <div className="row">
                    <div className="col-12" id="area">
                        <h1 className="black hello-kooky ms-3">Hi, I'm <span>J</span><span>o</span><span>h</span><span>n</span><span>n</span><span>y</span></h1>
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
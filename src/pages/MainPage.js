import React from "react";

export default function MainPage({handlePageChange }){
    return(
        <div className="container-white">
        <h1>Portfolio</h1>
        <button onClick={() => handlePageChange("OtherPage")}>Change Page</button>
        </div>
    )
}
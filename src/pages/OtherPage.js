import React from "react";

export default function OtherPage({handlePageChange }){
    return(
        <div className="container-red">
        <h1>Otehr</h1>
        <button onClick={() => handlePageChange("MainPage")}>Change Page</button>
        <div className="overlay"></div>
        </div>
    )
}
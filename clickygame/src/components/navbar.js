import React from "react";

// build our navbar
const styles = {
    margin: 30
};

function NavBar (props){
    return (
        <nav
        className = "navbar navbar-expand-lg navbar-light bg-light"
        >
            <a href = "provisional link" className = "navbar-brand"><h1 >Clicky Game</h1></a>
            <button className = "navbar-toggler"
            type = "button"
            data-toggle="collapse" 
            data-target="#game-nav" 
            aria-controls="#game-nav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
                <span
                className = "navbar-toggler-icon"
                ></span>
            </button>
            <div
            className="collapse navbar-collapse" id="game-nav"
            >
                <ul className = "navbar-nav mr-auto" style = {styles}>
                 <li className = "nav-item active" style = {styles}>
                     <a href = "provisional link" className = "nav-link intro">Click an image to play</a>
                 </li>

                 {/* {this <li> will handle the display of scores} */}
                 <li className = "nav-item" style = {styles}>
                     {/* <h3>Score: {score} | Top Score: {topScore}</h3> */}
                     <a href = "provisional link" className = "nav-link scores active">Score: {props.score} | Top Score: {props.topScore}</a>
                 </li>

                 <li className = "nav-item" style = {styles}>
                     <a href = "provisional link" className = "nav-link scores active">{props.status}</a>
                 </li>
                </ul>

            </div>

        </nav>
    )
};

export default NavBar;
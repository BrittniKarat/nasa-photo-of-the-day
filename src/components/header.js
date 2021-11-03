import React from "react";
import "./App.css";

const Header = () => {

   
    return (
        <section className="Header">
            <h1> Photo of The Day </h1>
            <nav>
                <a href='#photo'>Photo</a>
                <a href='#info'>Info</a>
                <a href='#calendar'>Calendar</a>
            </nav>
        </section>
    );
}

export default Header;


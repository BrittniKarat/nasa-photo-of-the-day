import React from "react";
import "./App.css";

const Header = () => {

    const headerSection = document.createElement('section');
    const title = document.createElement('h1');
    const nav = document.createElement('nav');
    const navInfo = document.createElement('a');
    const navPhoto = document.createElement('a');
    const navContact = document.createElement('a');
    
    headerSection.classList.add('header');
    title.classList.add('title');
    navInfo.href= '#info';
    navPhoto.href = '#photo';
    navContact.href = '#contact';

    headerSection.appendChild(title);
    headerSection.appendChild(nav);
    nav.appendChild(navInfo);
    nav.appendChild(navPhoto);

    const root = document.querySelector('#root');
   
    return root.appendChild(headerSection);
}

export default Header;


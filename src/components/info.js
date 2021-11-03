import React from "react";
import "./App.css";

const NasaPhoto = () => {

    const infoSection = document.createElement('section');
    const container = document.createElement('div');
    const left = document.createElement('div');
    const leftTitle = document.createElement('h3');
    const leftPara = document.createElement('p');
    const right = document.createElement('div');
    const rightTitle = document.createElement('h3');
    const rightPara = document.createElement('p');

    
    photoSection.classList.add('photo');
    container.classList.add('photo-container');
    
    photoSection.appendChild(container);
    container.appendChild(title);

    const root = document.querySelector('#root');
   
    return root.appendChild(photoSection);
}

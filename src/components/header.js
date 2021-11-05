import React from "react";
import styled from "styled-components";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

const StyledHeader = styled.section`
    .header {
        display: flex;
        justify-content: space-between;
        align-content: flex-end;
        background-color: #2a2560;
        top: 0;
        padding: 4% 0 0 0;
    
    }
    h1{
        font-size: 4rem;
        color: #7986d5;
    }
    nav {
        display: flex;
        width: 30%;
        justify-content: flex-end;
    }
    nav a {
        font-size: 2rem;
        margin: 2% 5%;
        padding: 2%;
        background-color: #7986d5;
        color: #2a2560;
        text-decoration: none;
        border-radius: 9px;
        
    }
`


const Header = () => {

   
    return (
        <StyledHeader className="header">
            <h1> NASA Photo of The Day </h1>
            
                <nav>
                    <a href='#photo'>Photo</a>
                    <a href='#info'>Info</a>
                    <a href='#calendar'>Calendar</a>
                </nav>    
         </StyledHeader>
    );
}

export default Header;




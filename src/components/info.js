import React from "react";
import styled from "styled-components";

const StyledInfo = styled.section`
    .info{
        display: flex;
        justify-items: space-around;
        background-color: #2a2560;
        padding: 2% 0;
    }
    .group{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 0 5%;
    }
    .left,.right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
        background-color: #e0dbde;
        margin:1% 5%;
        padding: 4% 0;
    }
    
    h3{
        text-align: center;
        font-size: 2rem;
        margin-bottom: 5%;
    }
    .group p{
        margin:5% 0;
        font-size: 1.3 rem;
        margin: 3% 5%;
    
    }
    `


const InfoSection = (props) => {


 return (  

    <StyledInfo className='info' id='info'>
        <div className='group'>
            <div className='left'>
                <h3>About this photo</h3>
                <p> {props.explanation}</p>
                <p> <b>Date:</b> {props.date}   <b>Copyright:</b> {props.copyright} </p> 
                
            </div>
            <div className='right'>
                <h3>About NASA</h3>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos et excepturi accusantium quo numquam animi ullam aliquam, laborum nam, velit accusamus ratione fugiat nemo labore, deleniti sapiente a vero iure! </p>
            </div>
        </div>
    </StyledInfo>)
}

export default InfoSection;
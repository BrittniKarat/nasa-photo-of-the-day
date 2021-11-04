import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.section`
    #photo{
        margin: 3%;
        height: 100%;
    }
    h2{
        font-size: 2rem;
    }
    h2 span{
        font-weight: bold;
    }
    `


const NasaPhoto = props => {

   
    return (

        <StyledPhoto className='nasaPhoto' id='photo'>
            <div className='background'>
                 <h2> <span> Title </span> <br/> "{props.title}" </h2> 
                <img src={props.photo} alt={props.title}/>
            </div>
            </StyledPhoto>
    );
}

export default NasaPhoto;
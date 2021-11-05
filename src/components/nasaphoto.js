import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.section`
    #photo{
        margin: 3%;
        height: 100%;
        
    }
    img {
        border-radius: 8px;
    }
    h2{
        font-size: 2rem;
    }
    `


const NasaPhoto = props => {

   
    return (

        <StyledPhoto className='nasaPhoto' id='photo'>
            <div className='background'>
                 <h2> <b>Title</b> <br/> "{props.title}" </h2> 
                <img src={props.photo} alt={props.title}/>
            </div>
            </StyledPhoto>
    );
}

export default NasaPhoto;
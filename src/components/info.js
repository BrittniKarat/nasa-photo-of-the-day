import React from "react";


const InfoSection = (props) => {


 return (  

    <section className='info'>
        <div className='group'>
            <div className='left'>
                <h3>About this photo</h3>
                <p> {props.date} <br/> {props.explanation}</p>
            </div>
            <div className='right'>
                <h3>About NASA</h3>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos et excepturi accusantium quo numquam animi ullam aliquam, laborum nam, velit accusamus ratione fugiat nemo labore, deleniti sapiente a vero iure! </p>
            </div>
        </div>
    </section>)
}

export default InfoSection;
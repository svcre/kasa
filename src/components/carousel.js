import '../styles/carousel.css'
import leftarrow from '../assets/left-arrow.png'
import rightarrow from '../assets/right-arrow.png'
import data from '../data/content.json'

import { useParams } from 'react-router-dom'
import React, { useState } from 'react';


function Carousel(logement) {

    let params = useParams()
    let id = params.id
    let index = data.map(function (logement) {return logement.id; }).indexOf(id);

    let nb = logement.pictures.length

    const [count, setcount] = useState(0);

    function previous() {
        if (count !== 0) {
            setcount((count - 1))
        }
    }
    
    function next() {
        if (count !== (nb - 1)) {
            setcount((count + 1))
        }
    }


    return(

        <div className="carousel-wrapper" style={{backgroundImage: `url(${data[index].pictures[count]})`}}>
        
            <div className="arrow-wrapper-left">
                <img src= { leftarrow } id="left" alt="left arrow" onClick={previous} />
            </div>

            <div className="index-wrapper">
                <p>{ (count+1) } / { nb }</p>
            </div>

            <div className="arrow-wrapper-right">
                <img src= { rightarrow } id="right" alt="left arrow" onClick={next}  />
            </div>

        </div>

    )
}

export default Carousel
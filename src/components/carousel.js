import '../styles/carousel.css'
import leftarrow from '../assets/left-arrow.png'
import rightarrow from '../assets/right-arrow.png'
import data from '../data/content.json'

import { useParams } from 'react-router-dom'


function Carousel() {

    let params = useParams()
    let id = params.id
    let index = data.map(function (logement) {return logement.id; }).indexOf(id);

    function previous() {
        console.log("coucou")
    }
    
    function next() {
        console.log("coucou")
    }


    return(

        <div className="carousel-wrapper" style={{backgroundImage: `url(${data[index].pictures[0]})`}}>
        
            <div className="arrow-wrapper-left">
                <img src= { leftarrow } id="left" alt="left arrow" onClick={previous} />
            </div>

            <div className="index-wrapper">
                <p>index img / max.length</p>
            </div>

            <div className="arrow-wrapper-right">
                <img src= { rightarrow } id="right" alt="left arrow" onClick={next}  />
            </div>

        </div>

    )
}

export default Carousel
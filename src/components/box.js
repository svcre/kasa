import '../styles/menu-l.css'
import ArrowUp from '../assets/arrow-up.png'
import ArrowDown from '../assets/arrow-down.png' 

import { useState } from 'react'

function Box(props) {

    const [showContent, setShowContent] = useState(true)
    const toggleContent = () => {
        setShowContent(!showContent)
    }


    return (

        <div className="wrapper">

            <div className="upper">
                <p> { props.title } </p>
                <img src= {`${showContent ? ArrowUp : ArrowDown}`} alt="flèche haute" onClick={toggleContent} />
            </div>

            <div className={`${showContent? "lower" : "invisible"}`}>
                { props.desc }
            </div>

        </div>

    )
}

export default Box
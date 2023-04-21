import '../styles/menu-s.css'
import ArrowUp from '../assets/arrow-up.png'
import ArrowDown from '../assets/arrow-down.png' 
import { useState } from 'react'


function Description(logement) {

    const [showDescription, setshowDescription] = useState(true)
    const toggleDescription = () => {
        setshowDescription(!showDescription)
    }
    const [showEquipment, setshowEquipment] = useState(true)
    const toggleEquipment = () => {
        setshowEquipment(!showEquipment)
    }


    return(

        <div className="overall-wrapper">
            <div className="wrapper-box">
                <div className="small-box-title">
                    <p>Description</p>
                    <img src= {`${showDescription ? ArrowUp : ArrowDown}`} alt="flèche haute" onClick={toggleDescription} />
                </div>

                <div className={`${showDescription ? "description-box" : "invisible"}`}>
                    <p>
                        {logement.description}
                    </p>
                </div>
            </div>

            <div className="wrapper-box">
                <div className="small-box-title">
                    <p>Equipement</p>
                    <img src= {`${showEquipment ? ArrowUp : ArrowDown }`} alt="flèche haute" onClick={toggleEquipment} />
                </div>

                <div className={`${showEquipment ? "description-box" : "invisible"}`}>
                    <p>
                    {
                    logement.equipements.map((equipement, index) => (
                        <li key={index}>{equipement}</li>
                    ))
                }
                    </p>
                </div>
            </div>

            
        </div>

    )
}

export default Description
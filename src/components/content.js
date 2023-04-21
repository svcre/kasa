import '../styles/menu-l.css'
import ArrowUp from '../assets/arrow-up.png'
import ArrowDown from '../assets/arrow-down.png' 
import { useState } from 'react'

function Content() {

    const [showContent, setshowContent] = useState(true)
    const toggleContent = () => {
        setshowContent(!showContent)
    }

return (
<>

<div className="wrapper">

    <div className="upper">
        <p>Fiabilité</p>
        <img src= {`${showContent ? ArrowUp : ArrowDown}`} alt="flèche haute" onClick={toggleContent} />
    </div>

    <div className={`${showContent? "lower" : "invisible"}`}>
    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
    </div>

</div>



<div className="wrapper">

    <div className="upper">
        <p>Respect</p>
        <img src= {`${showContent ? ArrowUp : ArrowDown}`} alt="flèche haute" onClick={toggleContent} />
    </div>

    <div className={`${showContent? "lower" : "invisible"}`}>
    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </div>

</div>



<div className="wrapper">

    <div className="upper">
        <p>Service</p>
        <img src= {`${showContent ? ArrowUp : ArrowDown}`} alt="flèche haute" onClick={toggleContent} />
    </div>

    <div className={`${showContent? "lower" : "invisible"}`}>
    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
    </div>

</div>



<div className="wrapper">

    <div className="upper">
        <p>Sécurité</p>
        <img src= {`${showContent ? ArrowUp : ArrowDown}`} alt="flèche haute" onClick={toggleContent} />
    </div>

    <div className={`${showContent? "lower" : "invisible"}`}>
    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.    </div>

</div>

</>
)}

export default Content
import '../styles/menu-l.css'
import Banner from '../components/banner2'
import ArrowUp from '../assets/arrow-up.png'
import ArrowDown from '../assets/arrow-down.png' 
import Box from './box'

import { useState } from 'react'

function Content() {

return (
<>

    <Banner />

    <Box 
        title='Fiabilité' 
        desc='    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
        ' />

    <Box 
        title='Respect' 
        desc='    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        ' />

    <Box 
        title='Service' 
        desc="    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        " />

    <Box 
        title='Securité' 
        desc="    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.    </div>
        " />


</>
)}

export default Content
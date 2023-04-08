import '../styles/infos.css'
import data from '../data/content.json'
import { useParams } from 'react-router-dom'

import logo from '../assets/LOGO.png'
import star from '../assets/star.png'
import emptystar from '../assets/empty-star.png'


function RightInfos() {

    let params = useParams()
    let id = params.id
    let index = data.map(function (logement) {return logement.id; }).indexOf(id);

    return(
<>
        <div className="profile">
            <div className="name">
                <p> { data[index].host.name } </p>
            </div>
            <img src= { data[index].host.picture }></img>
        </div>
        <div className="rate">
        <img src= { star }></img>
        <img src= { star }></img>
        <img src= { star }></img>
        <img src= { star }></img>
        <img src= { emptystar }></img>
        </div>
</>



    )
} 

export default RightInfos
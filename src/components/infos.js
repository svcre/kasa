import Carousel from '../components/carousel.js'
import LeftInfos from '../components/left-infos'
import RightInfos from '../components/right-infos'
import Description from '../components/menubox-s.js'

import data from '../data/content.json'
import { Navigate, useParams } from 'react-router-dom'

import '../styles/infos.css'

function Infos() {

    let params = useParams()
    let id = params.id
    let index = data.map(function (logement) {return logement.id; }).indexOf(id);
    const logement = data[index]

    if(logement === undefined) {
        return <Navigate to="/404" replace={true} />
    }

    return (
        <div className="wrapper-infos">

            <Carousel pictures={ logement.pictures } />

        <div className="wrapper-top">

            <div className="left-infos"> 
                <LeftInfos 
                    title={ logement.title } 
                    location={ logement.location }
                    tags={ logement.tags }
                /> 
            </div>

            <div className="right-infos"> 
                <RightInfos 
                    host={ logement.host.name } 
                    avatar={ logement.host.picture } 
                    rating={ logement.rating } 
                /> 
            </div>

        </div>

            <Description 
                description={logement.description} 
                equipements={logement.equipments} 
            /> 

    </div>
    )
}

export default Infos
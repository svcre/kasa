import Carousel from '../components/carousel.js'
import LeftInfos from '../components/left-infos'
import RightInfos from '../components/right-infos'
import Description from '../components/menubox-s.js'
// import Equip from '../components/equip.js'

import '../styles/infos.css'

function Infos() {

    return (
        <div className="wrapper-infos">

            <Carousel />

        <div className="wrapper-top">

            <div className="left-infos"> <LeftInfos /> </div>

            <div className="right-infos"> <RightInfos /> </div>

        </div>

            <Description /> 

    </div>
    )
}

export default Infos
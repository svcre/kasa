import '../styles/infos.css'

import star from '../assets/star.png'
import emptystar from '../assets/empty-star.png'


function RightInfos(logement) {

    function Rating() {
        let htmlString = []
        const stars = Number(logement.rating)
        for (let i=0;i<stars;i++) {
            htmlString.push(
                <img src= { star } alt=""></img>
            )
        }
        if (stars !== 5) {
            for (let i=0;i<(5-stars);i++) {
                htmlString.push(
                    <img src= { emptystar } alt=""></img>
                )
            }
        }
        return htmlString
    } 

    return(
<>
        <div className="profile">
            <div className="name">
                <p> { logement.host }  </p>
            </div>
            <img src=  { logement.avatar } alt=" avatar locataire " ></img>
        </div>
        <div className="rate">

            { Rating() }
        
        </div>
</>



    )
} 

export default RightInfos
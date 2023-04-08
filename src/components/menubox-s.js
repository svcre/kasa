import '../styles/menu-s.css'
import ArrowUp from '../assets/arrow-up.png'

function Description() {
    return(

        <div className="overall-wrapper">
            <div className="wrapper-box">
                <div className="small-box-title"><p>Description</p>
                <img src= { ArrowUp } alt="flèche haute" />
                </div>
                <div className="small-box-content"><p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p></div>
            </div>

            <div className="wrapper-box">
                <div className="small-box-title"><p>Equipement</p>
                <img src= { ArrowUp } alt="flèche haute" />
                </div>
                <div className="small-box-content"><p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p></div>
            </div>

            
        </div>

    )
}

export default Description
import '../styles/thumbnail.css'
import data from '../data/content.json'
import {Link} from 'react-router-dom'

function Thumbnail() {
    return(
        
        <ul className='wrapper'>

            {data.map((logement, index) => (

                <Link to={'/fiche/' + logement.id} key={ index }>

                    <li className='thumb' 
                    style={{backgroundImage: `url(${logement.cover})`}}>

                        <div className='thumb-inner'>

                            <p>{ logement.title }</p>

                        </div>

                    </li> 
                
                </Link>

            ))}
            </ul>

    )
}

export default Thumbnail
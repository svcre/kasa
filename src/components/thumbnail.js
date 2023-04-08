import '../styles/thumbnail.css'
import data from '../data/content.json'

function Thumbnail() {
    console.log(data)
    return(
        
        <ul className='wrapper'>

            {data.map((logement) => (

                <a href="">

                    <li key={ logement.id } 
                    className='thumb' 
                    style={{backgroundImage: `url(${logement.cover})`}}>

                        <div className='thumb-inner'>

                            <p>{ logement.title }</p>

                        </div>

                    </li> 
                
                </a>

            ))}
            </ul>

    )
}

export default Thumbnail
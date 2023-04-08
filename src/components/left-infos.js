import '../styles/infos.css'
import data from '../data/content.json'
import { useParams } from 'react-router-dom'


function LeftInfos() {

    let params = useParams()
    let id = params.id
    let index = data.map(function (logement) {return logement.id; }).indexOf(id);

    return(
        <>
                <h2> { data[index].title } </h2>
                <p>{ data[index].location }</p>
                <div className="tags">
                    <div className="tag">un</div>
                    <div className="tag">deux</div>
                    <div className="tag">trois</div>
                
                </div>
        </>
    )
} 

export default LeftInfos
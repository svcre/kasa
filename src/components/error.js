import '../styles/error.css'
import {Link} from 'react-router-dom'

function Error() {
    return(

        <div className="component-error">

            <h3>404</h3>

            <p>Oups! La page que vous demandez n'existe pas.</p>
        
        <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error
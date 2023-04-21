import logo from '../assets/LOGO.png'
import '../styles/header.css'
import {Link} from 'react-router-dom'


function Header() {
    return ( <header>

        <Link to ='/' ><img src = { logo } alt = "Kasa" /></Link>

        <div className = "header-links-div">

        <Link to = "/"> Accueil </Link> 
        <Link to = "/about"> A propos </Link>

        </div>

            </header>


    )
}


export default Header
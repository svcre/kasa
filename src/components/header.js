import logo from '../assets/LOGO.png'
import '../styles/header.css'
import {Link} from 'react-router-dom'


function Header() {
    return ( <header>

        <img src = { logo } alt = "Kasa" />

        <div className = "header-links-div">
        <Link to="/"> Accueil </Link> 
        <a href = "/error" > A propos </a></div>

            </header>


    )
}


export default Header
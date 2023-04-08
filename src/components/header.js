import logo from '../assets/LOGO.png'
import '../styles/header.css'

function Header() {
    return ( <header>

        <img src = { logo } alt = "Kasa" />

        <div className = "header-links-div">
        <a href = "" > Accueil </a> 
        <a href = "" > A propos </a></div>

            </header>


    )
}


export default Header
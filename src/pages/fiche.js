import Header from '../components/header'
import Footer from '../components/footer'
import Infos from '../components/infos'
import '../styles/body.css'

function Fiche() {
    return (
        <>
        <div className="content">

            <Header />

            <Infos />
            
        </div>

        <Footer />
        </>
    )
}

export default Fiche
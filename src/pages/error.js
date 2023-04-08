import Header from '../components/header'
import Footer from '../components/footer'
import Error from '../components/error'
import '../styles/body.css'

function Error404() {
    return(
        <>
            <div className="content">
                <Header />
                <Error />
            </div>

            <Footer />
        </>
    )
}

export default Error404
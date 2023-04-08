import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'
import Thumbnail from '../components/thumbnail'
import '../styles/body.css'

function App() {
    return (
        <>
        <div className="content">
            <Header />

            <Banner />

            <Thumbnail />
        </div>

        <Footer />
        </>
    )
}

export default App
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import OurMenu from '../components/OurMenu'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import CategoryMenu from '../components/CategoryMenu'
import Map from '../components/Map'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <OurMenu />
            <AboutUs />
            <Gallery />
            <CategoryMenu />
            <Map />
            <Footer />
        </div>
    )
}

export default Home

import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import About from './components/About'
import Statistics from './components/Statistics'
import GoogleMaps from './components/GoogleMaps'
import Gallery from './components/Gallary'
import Teachers from './components/Teachers'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <About />
      <Statistics />  
      <Teachers/>
      <Gallery />
      <GoogleMaps/>
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  )
}
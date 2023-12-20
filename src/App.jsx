import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import 'rsuite/dist/rsuite.min.css';
import VenueRentalPage from './pages/VenueRentalPage';
import Studio from './pages/Studio';
import Footer from './components/Footer';
import Garment from './pages/Garment';
import AboutUs from './pages/AboutUs';
function App() {


  return (
<div className="min-w-[1080px] ">

      <BrowserRouter basename='/'>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} > 
              
            </Route>

            <Route path="1985-Studio" element={<Studio/>}>
              <Route path="VenueRental" element={<VenueRentalPage/>} />
            </Route>
            
            <Route path="1985-Garment-Factory" element={<Garment/>} />
            <Route path="About-Us" element={<AboutUs/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App

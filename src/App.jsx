import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
function App() {


  return (
    <div className="">
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} /> 
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

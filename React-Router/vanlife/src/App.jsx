import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Vans from './components/Vans'
import VanDetails from './components/VanDetails'
import './server'

function App() {

  // State for saving the data from the API
  const [vanData, setVanData] = React.useState([])

  // Fetch the data from the API
  React.useEffect(() => {
    fetch("/api/vans")
    .then(response => response.json())
    .then(data => {
      setVanData(data.vans)
    })
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <Routes className='test'>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path ='/vans' element={<Vans vanData={vanData} />} />
        <Route path ='/vans/:id' element={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import HostLayout from './components/Hosts/HostLayout'
import Home from './components/Vans/Home'
import About from './components/Vans/About'
import Vans from './components/Vans/Vans'
import VanDetails from './components/Vans/VanDetails'
import Dashboard from './components/Hosts/Dashboard'
import Income from './components/Hosts/Income'
import Reviews from './components/Hosts/Reviews'
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
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans vanData={vanData} />}/>
          <Route path='vans/:id' element={<VanDetails />}/>
          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

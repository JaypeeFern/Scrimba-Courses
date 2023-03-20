import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
/* ------------------------------------ x ----------------------------------- */
import Layout from './components/Layout'
import Home from './components/Vans/Home'
import About from './components/Vans/About'
import Vans from './components/Vans/Vans'
import VanDetails from './components/Vans/VanDetails'
/* ------------------------------------ x ----------------------------------- */
import HostLayout from './components/Hosts/HostLayout'
import Dashboard from './components/Hosts/Dashboard'
import Income from './components/Hosts/Income'
import Reviews from './components/Hosts/Reviews'
import HostVans from './components/Hosts/HostVans'
import HostVanDetails from './components/Hosts/HostVanDetails'
import VansLayout from './components/Hosts/VansLayout'
import Pricing from './components/Hosts/Pricing'
import Photos from './components/Hosts/Photos'
import './server'


function App() {

  // State for saving the Van data from the API 
  const [vanData, setVanData] = React.useState([])

  // Fetch the Van data from the API
  React.useEffect(() => {
    fetch("/api/vans")
      .then(response => response.json())
      .then(data => {
        setVanData(data.vans)
      })
  }, [])

  // State for saving the Host Van Data from the API
  const [hostVanData, setHostVanData] = React.useState([])

  // Fetch Host Van Data from the API
  React.useEffect(() => {
    fetch('api/host/vans')
      .then(response => response.json())
      .then(data => {
        setHostVanData(data.vans)
      })
  }, [])

  // Function for returning Van Data based on the ID
  function getHostVanDetail(hostVanId) {
    const [hostVanDetail, setHostVanDetail] = React.useState([]);

    React.useEffect(() => {
      fetch(`/api/host/vans/${hostVanId}`)
        .then(response => response.json())
        .then(data => {
          setHostVanDetail(data.vans[0]);
        });
    }, [hostVanId]);

    return hostVanDetail;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans vanData={vanData} />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans hostVanData={hostVanData} />} />
            <Route path='vans/:id' element={<VansLayout getHostVanDetail={getHostVanDetail}/>}>
              <Route index element={<HostVanDetails />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='photos' element={<Photos />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

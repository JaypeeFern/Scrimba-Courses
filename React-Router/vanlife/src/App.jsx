import React from 'react'
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route, useParams, Outlet } from 'react-router-dom'
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
/* ------------------------------------ x ----------------------------------- */
import PageNotFound from './PageNotFound'
import './server'
import { getVans } from './API'


function App() {

  // State for saving the Van data from the API 
  const [vanData, setVanData] = React.useState([])

  // State for handling loading while fetching data from the API
  const [loading, setLoading] = React.useState(false)

  // State for catching errors
  const [error, setError] = React.useState(null)

  // Fetch the Van data from the API
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVanData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
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

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>z
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans loading={loading} error={error} vanData={vanData} />} />
      <Route path='vans/:id' element={<VanDetails />} />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<HostVans hostVanData={hostVanData} />} />
        <Route path='vans/:id' element={<VansLayout />}>
          <Route index element={<HostVanDetails />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='photos' element={<Photos />} />
        </Route>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App

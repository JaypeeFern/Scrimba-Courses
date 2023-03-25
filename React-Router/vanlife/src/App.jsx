import React from 'react'
import './server'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
/* ------------------------------------ x ----------------------------------- */
import Login, { action as loginAction } from './components/User/Login'
/* ------------------------------------ x ----------------------------------- */
import Layout from './components/Layout'
import Home from './components/Vans/Home'
import About from './components/Vans/About'
import Vans, { loader as vansLoader } from './components/Vans/Vans'
import VanDetails, { loader as vansDetailLoader } from './components/Vans/VanDetails'
/* ------------------------------------ x ----------------------------------- */
import HostLayout from './components/Hosts/HostLayout'
import Dashboard from './components/Hosts/Dashboard'
import Income from './components/Hosts/Income'
import Reviews from './components/Hosts/Reviews'
import HostVans, { loader as hostVanLoader } from './components/Hosts/HostVans'
import HostVanDetails from './components/Hosts/HostVanDetails'
import VansLayout, { loader as hostVanDetailLoader } from './components/Hosts/VansLayout'
import Pricing from './components/Hosts/Pricing'
import Photos from './components/Hosts/Photos'
/* ------------------------------------ x ----------------------------------- */
import PageNotFound from './components/Utility/PageNotFound'
import Error from './components/Utility/Error'
import AuthRequired from './components/Utility/AuthRequired'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>z
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} errorElement={<Error/>}  loader={vansLoader} />
      <Route path='vans/:id' element={<VanDetails />} loader={vansDetailLoader} />
      <Route path='login' element={<Login />} action={loginAction} />
      <Route element={<AuthRequired />}>
        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='vans' element={<HostVans />} loader={hostVanLoader} />
          <Route path='vans/:id' element={<VansLayout />} loader={hostVanDetailLoader}>
            <Route index element={<HostVanDetails />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='photos' element={<Photos />} />
          </Route>
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App

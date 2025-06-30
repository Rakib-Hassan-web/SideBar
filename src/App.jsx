import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './componants/Navbar'
import Value from './pages/Value'

const App = () => {

  const myRout =createBrowserRouter(createRoutesFromElements(

    <Route>

 <Route path='/' element={<LayoutOne/>}>


 <Route index element={<Home/>} />
 <Route path='/About' element={<About/>} />
 <Route path='/Contact' element={<Contact/>} />
 <Route path='/Value' element={<Value/>} />

  
 </Route>

    </Route>


  ))
  return (
  <>

<Navbar/>
  <RouterProvider router={myRout} />
  
  
  </>
  )
}

export default App
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className='p-6'>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Routes> 
      </main>     
      <Footer/> 
    </BrowserRouter>
  )
}

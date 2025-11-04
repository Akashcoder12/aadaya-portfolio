import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-gray-900 text-white py-4 px-8 flex  justify-between items-center'>
      <h1 className='text-2xl font-bold'>Aadyaa's Portfolio</h1>
      <div className='flex space-x-4'>
        <Link to="/" className='hover:text-blue-300'>Home</Link>
        <Link to="/projects" className='hover:text-blue-300'>Projects</Link>
        <Link to="/contact" className='hover:text-blue-300'>Contact</Link>
      </div>
    </nav>
  )
}

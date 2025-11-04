import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gary-300 px-5 py-8 mt-12'>
       <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
          <h2 className='text-2xl font-semibold text-white'>Aadyaa's Portfolio</h2>
          <p className='mt-2 text-sm text-white'>
            Showcasing my skills and projects as a MERN stack Developer.
            Let's build something amazing together!
          </p>
       </div>
       
       {/* Quick Links */}
       <div className='text-white'>
          <h3 className='text-lg font-semibold text-white mb-3'>Quick Links</h3>
          <ul className='space-y-2'>
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
       </div>

{/* Social Links */}
       <div className='text-white'>
         <h3 className='text-lg font-semibold text-white mb-3 '>Follow Me</h3>
         <div className='flex justify-center md:justify-start space-x-4'>
           <a href="#" target="_blank" rel="noreferrer"  className=' hover:text-blue-400'>Github</a>
           <a href="#" target="blank"  rel="noreferrer" className='hover:text-blue-400'>Linkedin</a>
           <a href="#" target='_blank'
            className='hover:text-blue-400'>Twitter</a>
         </div>
       </div>

       <div className='mt-8 border-t border-gray-700 pt-4 text-center text-sm'>
         &copy {new Date().getFullYear()} Aadyaa Soni. All rights reserved.
       </div>
    </footer>
  )
}

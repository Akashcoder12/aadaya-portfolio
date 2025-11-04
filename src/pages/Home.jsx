import React from 'react'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center text-center py-20'>
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEYsU_1gDvqjrJeUOT26eZazztCAHCLRiKQ&s" 
      alt="profile"
      className='rounded-full w-32 h-32 mb-4'
       />
      <h1 className='text-4xl font-bold mb-2'>Hi, I'm Aadyaa</h1>
      <p className='text-lg text-gray-600 dark:text-gray-400  mb-6'>
        A passionate MERN stack Developer helping business grow online.
      </p>
      <a 
      href="/projects"
      className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg'
      >
        View Projects
      </a>
    </section>
  )
}

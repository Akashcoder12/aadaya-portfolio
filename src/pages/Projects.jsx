import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
      axios.get("/Project.json").then((res)=>{
         setProjects(res.data)
      },[]);
  })

  return (
    <section  id="projects" className='py-10'>
       <h2 className='text-3xl font-semibold mb-6 text-center'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project)=>{
            return (<ProjectCard key={project.id} project={project}/>
            )
          })}
        </div>
    </section>
  )
}

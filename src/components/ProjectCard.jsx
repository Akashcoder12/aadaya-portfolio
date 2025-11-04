

const ProjectCard=({project})=>(
   <div>
      <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
      <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
      >
        View Live
      </a>
   </div>
)

export default ProjectCard;
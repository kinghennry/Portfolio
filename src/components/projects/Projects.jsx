import projectsData from '../../data'
import './Projects.css'

export default function Projects() {
  return (
    <>
      <div className='projects mx-4 md:mx-44 md:mb-20 mb-10 flex flex-col md:flex-row items-center justify-between'>
        <h2 className='font-bold md:text-7xl leading-88 md:tracking-wide text-2xl leading-10 tracking-tight'>
          Projects
        </h2>
        <a
          href='#contact'
          className='text-white contact font-space md:tracking-wider md:mt-16  font-bold text-base leading-7 tracking-wide'
        >
          CONTACT ME
          <hr className='projectshr mt-2' />
        </a>
      </div>
      <div className='card grid md:grid-cols-3 gap-4 md:gap-8 mx-4 md:mb-32 md:mx-44'>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className='flex-shrink-0 relative  mb:hover:opacity-75 mb:hover:bg-black '
          >
            <img
              src={project.image}
              alt={`Project: ${project.title}`}
              className='w-full h-56 object-cover '
            />
            <div className='hidden md:flex absolute project inset-0 flex-col  items-center mx-auto opacity-0 hover:opacity-100 transition-opacity'>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white py-2 px-4 mx-2 md:mx-50 mt-16'
              >
                View Project
                <hr className='projectshr mt-1' />
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className=' text-white py-2 px-4 mx-2 mt-3'
              >
                View Code
                <hr className='projectshr mt-1' />
              </a>
            </div>
            <h2 className='font-space mt-5 md:mt-5 font-bold text-xl leading-8'>
              {project.title}
            </h2>
            <p className='text-white contact font-space font-medium text-base leading-7 mb-5 md:mb-0'>
              {project.skills}
            </p>
            {/*Mobile Buttons */}
            <div className='md:hidden flex flex-row items-center mt-5 text-white'>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='projects-mobile title  font-space-grotesk font-bold text-xl leading-7 tracking-wider link mr-8 !important'
              >
                View Project
                <hr className='projectshr mt-1 mb-10' />
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='projects-mobile title  font-space-grotesk font-bold text-xl leading-7 tracking-wider !important'
              >
                View Code
                <hr className='projectshr mt-1 mb-10' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

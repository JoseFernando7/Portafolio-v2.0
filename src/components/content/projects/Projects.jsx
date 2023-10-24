import React, { useState } from 'react'
import Data from './projects.json'
import ProjectModal from './project-modal/ProjectModal'

import './Projects.css'

function Projects () {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section className='skills'>
        <h2> Mis Proyectos </h2>

        {Data.map((project) => {
          return (
            <section
              key={project.title}
              className={`project-list ${isModalOpen ? 'slide' : ''}`}
            >
              <ul>
                <li className='project-list-element' onClick={() => openModal(project)}>
                  {project.title}
                </li>
              </ul>
            </section>
          )
        })}
      </section>

      <div className={`modal-div ${isModalOpen ? 'show' : 'hide'}`}>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      </div>
    </>
  )
}

export default Projects

import React from 'react'
import PropTypes from 'prop-types'

import './ProjectModal.css'
import Button from '../../../utils/Button'

function ProjectModal ({ project, onClose }) {
  ProjectModal.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string
    }).isRequired,
    onClose: PropTypes.func.isRequired
  }

  return (
    <section className='modal-container'>
      <div className='modal'>
        <span onClick={onClose} className='close'>
          &times;
        </span>
        <div className='project-img'>
          <img src={project.image} alt='Project thumbnail' />
        </div>
        <h3 className='project-title'> {project.title} </h3>
        <p className='project-description'> {project.description} </p>
        <Button url={project.url} />
      </div>
    </section>
  )
}

export default ProjectModal

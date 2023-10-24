import React from 'react'
import PropTypes from 'prop-types'
import './ProjectModal.css'

function ProjectModal ({ project, onClose }) {
  ProjectModal.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }).isRequired,
    onClose: PropTypes.func.isRequired
  }

  return (
    <section className='modal-container'>
      <div className='modal'>
        <span onClick={onClose} className='close'>
          &times;
        </span>
        <h3> {project.title} </h3>
        <p> {project.description} </p>
      </div>
    </section>
  )
}

export default ProjectModal

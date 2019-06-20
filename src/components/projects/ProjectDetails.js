import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>Lorem ipsum tincidunt duis imperdiet nisl orci imperdiet, egestas vitae magna quam fermentum id cursus turpis, ad sed ut hac diam class vehicula blandit ut ad torquent phasellus class quisque euismod.</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by the net ninja</div>
          <div>3rd June, 10:20pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
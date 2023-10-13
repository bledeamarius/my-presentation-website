import React from 'react'

import PropTypes from 'prop-types'

import './experience-component.css'

const ExperienceComponent = (props) => {
  return (
    <div className={`experience-component-container ${props.rootClassName} `}>
      <div id="Title" className="experience-component-container1">
        <span className="experience-component-company-text">
          {props.Company}
        </span>
        <span className="experience-component-position-text">
          {props.Position}
        </span>
      </div>
      <div id="period" className="experience-component-container2">
        <span className="experience-component-period-text">{props.Period}</span>
      </div>
      <div id="Description" className="experience-component-container3">
        <span className="experience-component-description-text">
          {props.Description1}
        </span>
        <span className="experience-component-description-text1">
          {props.Description11}
        </span>
        <span className="experience-component-description-text2">
          {props.Description12}
        </span>
      </div>
    </div>
  )
}

ExperienceComponent.defaultProps = {
  Period: 'Text',
  Description11: 'P1',
  Description12: 'P1',
  rootClassName: '',
  Company: 'Text',
  Description1: 'P1',
  Position: 'Text',
}

ExperienceComponent.propTypes = {
  Period: PropTypes.string,
  Description11: PropTypes.string,
  Description12: PropTypes.string,
  rootClassName: PropTypes.string,
  Company: PropTypes.string,
  Description1: PropTypes.string,
  Position: PropTypes.string,
}

export default ExperienceComponent

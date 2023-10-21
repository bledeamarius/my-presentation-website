import React from 'react'

import PropTypes from 'prop-types'

import './skill-component.css'

const SkillComponent = (props) => {
  return (
    <div className={`skill-component-container ${props.rootClassName} `}>
      <div className="skill-component-container1">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="skill-component-imagevector"
        />
        <span className="skill-component-title">{props.text2}</span>
        <span className="skill-component-desc">{props.text21}</span>
      </div>
    </div>
  )
}

SkillComponent.defaultProps = {
  rootClassName: '',
  text21: 'Text',
  text2: 'Text',
  text: 'Text',
  image_alt1: 'image',
  image_alt: 'image',
  text1: 'Text',
}

SkillComponent.propTypes = {
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  text21: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
}

export default SkillComponent

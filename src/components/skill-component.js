import React from 'react'

import PropTypes from 'prop-types'

import './skill-component.css'

const SkillComponent = (props) => {
  return (
    <div className={`skill-component-container ${props.rootClassName} `}>
      <div className="skill-component-container1">
        <img
          src={props.image_src1}
          alt={props.image_alt1}
          className="skill-component-imagevector"
        />
        <span className="skill-component-title">{props.text2}</span>
        <span className="skill-component-desc">{props.text21}</span>
      </div>
    </div>
  )
}

SkillComponent.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Text',
  image_alt: 'image',
  text1: 'Text',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  text2: 'Text',
  text21: 'Text',
  rootClassName: '',
}

SkillComponent.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SkillComponent

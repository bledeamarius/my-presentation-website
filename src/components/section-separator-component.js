import React from 'react'

import PropTypes from 'prop-types'

import './section-separator-component.css'

const SectionSeparatorComponent = (props) => {
  return (
    <div
      className={`section-separator-component-container ${props.rootClassName} `}
    >
      <div className="section-separator-component-section-separator"></div>
    </div>
  )
}

SectionSeparatorComponent.defaultProps = {
  rootClassName: '',
}

SectionSeparatorComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default SectionSeparatorComponent

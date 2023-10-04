import React from 'react'

import PropTypes from 'prop-types'

import './certificate-component.css'

const CertificateComponent = (props) => {
  return (
    <div className={`certificate-component-container ${props.rootClassName} `}>
      <div className="certificate-component-container-image">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="certificate-component-image"
        />
      </div>
      <div className="certificate-component-container-description">
        <span className="certificate-component-text">{props.text}</span>
      </div>
    </div>
  )
}

CertificateComponent.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Text',
  rootClassName: '',
}

CertificateComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CertificateComponent

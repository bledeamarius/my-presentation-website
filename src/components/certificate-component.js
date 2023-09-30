import React from 'react'

import PropTypes from 'prop-types'

import './certificate-component.css'

const CertificateComponent = (props) => {
  return (
    <div className="certificate-component-container">
      <img
        src={props.image_src}
        alt={props.image_alt}
        className="certificate-component-image"
      />
    </div>
  )
}

CertificateComponent.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

CertificateComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default CertificateComponent

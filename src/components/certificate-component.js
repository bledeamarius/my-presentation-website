import React from 'react'

import PropTypes from 'prop-types'

import './certificate-component.css'

const CertificateComponent = (props) => {
  return (
    <div className="certificate-component-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="certificate-component-image"
      />
    </div>
  )
}

CertificateComponent.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

CertificateComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default CertificateComponent

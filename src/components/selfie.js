import React from 'react'

import PropTypes from 'prop-types'

import './selfie.css'

const Selfie = (props) => {
  return (
    <div className="selfie-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="selfie-image"
      />
    </div>
  )
}

Selfie.defaultProps = {
  image_alt: 'image',
  image_src: '/selfie.svg',
}

Selfie.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Selfie

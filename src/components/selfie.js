import React from 'react'

import PropTypes from 'prop-types'

import './selfie.css'

const Selfie = (props) => {
  return (
    <div className="selfie-container">
      <img
        src={props.image_src}
        alt={props.image_alt}
        className="selfie-image"
      />
    </div>
  )
}

Selfie.defaultProps = {
  image_src: '/selfie.svg',
  image_alt: 'image',
}

Selfie.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Selfie

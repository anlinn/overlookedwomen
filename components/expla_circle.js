import React from 'react'

import PropTypes from 'prop-types'

import './expla_circle.css'

const ExplaCircle = (props) => {
  return (
    <div
      id="expla_circle"
      className={`expla_circle-container ${props.rootClassName} `}
    ></div>
  )
}

ExplaCircle.defaultProps = {
  rootClassName: '',
}

ExplaCircle.propTypes = {
  rootClassName: PropTypes.string,
}

export default ExplaCircle

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  label,
  type,
  color,
  block,
  handlerClick,
}) => (
  <button
    type={type}
    onClick={handlerClick}
    className={`btn btn-${color} ${block ? 'btn-block' : ''}`}
  >
    {label}
  </button>
)

Button.defaultProps = {
  type: 'button',
  color: 'light',
  block: false,
  handlerClick: event => console.log(event),
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  block: PropTypes.bool,
  handlerClick: PropTypes.func,
}

export default Button

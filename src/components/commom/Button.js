import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  label,
  type,
  typeBtn,
  block,
  handlerClick,
}) => (
  <button
    type={type}
    onClick={handlerClick}
    className={`btn btn-${typeBtn} ${block ? 'btn-block' : ''}`}
  >
    {label}
  </button>
)

Button.defaultProps = {
  type: 'button',
  typeBtn: 'light',
  block: false,
  handlerClick: event => console.log(event),
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  typeBtn: PropTypes.string,
  block: PropTypes.bool,
  handlerClick: PropTypes.func,
}

export default Button

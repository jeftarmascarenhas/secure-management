import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({
  type,
  placeholder,
  value,
  name,
  onChange,
}) => (
  <div className="form-group">
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      className="form-input"
      placeholder={placeholder}
    />
  </div>
)

TextField.defaultProps = {
  type: 'text',
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TextField

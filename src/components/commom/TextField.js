import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  label,
  errorValue
}) => (
  <div className="form-group">
    {
      !!label && <label htmlFor={name}> {label}</label>
    }
    <input
      type={type}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
      className="form-input"
      placeholder={placeholder}
    />
    {!!errorValue && <p>{errorValue}</p>}
  </div>
)

TextField.defaultProps = {
  type: 'text',
  label: '',
  errorValue: '',
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorValue: PropTypes.string,
}

export default TextField

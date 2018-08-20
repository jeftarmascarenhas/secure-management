import React from 'react'
import PropTypes from 'prop-types'

import TextField from '../commom/TextField'
import Button from '../commom/Button'

const FormLogin = ({
  handleSubmit,
  handleInputChange,
  email,
  password,
}) => (
  <form onSubmit={handleSubmit}>
    <TextField
      value={email}
      name="email"
      onChange={handleInputChange}
      type="text"
      placeholder="Username"
    />
    <TextField
      value={password}
      name="password"
      onChange={handleInputChange}
      type="password"
      placeholder="Password"
    />
    <Button
      type="submit"
      label="Login"
      typeBtn="primary"
      block
    />
  </form>)

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default FormLogin

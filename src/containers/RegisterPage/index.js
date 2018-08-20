import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import TextField from '../../components/commom/TextField'
import Button from '../../components/commom/Button'

import * as registerCreators from './register.actions'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
      validPassword: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const field = event.target.name
    this.setState({ [field]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const passwordRegx = /^(?!=.*[a-zA-Z0-9])()[a-zA-Z0-9](?!.*\s).{7,}$/g
    const { email, password, username } = this.state
    if (!passwordRegx.test(password)) {
      this.setState({
        validPassword: 'A senha deve conter no mínimo 8 caracteres',
      })
      return
    }
    const { newRegister } = this.props
    newRegister(email, username, password)
  }

  render() {
    const {
      email,
      password,
      username,
      validPassword,
    } = this.state
    const { redirectToReferrer, registerError } = this.props
    if (redirectToReferrer) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <section
        style={{
          backgroundColor: '#f9f9f9',
        }}
        className="--inherit-weigtht-body"
      >
        <Helmet
          titleTemplate="%s Cedrotech soluções Tecnológicas"
          defaultTitle="Register"
        >
          <meta name="description" content="A app cedrotech Test" />
        </Helmet>
        <div style={{ width: '100%', maxWidth: 450 }} className="transform-center">
          <Card>
            <CardHeader className="card__header">
              <h1 className="h1 --text-align-certer">
                Register
              </h1>
              {!!registerError.type && <p className="--text-align-certer">{registerError.message}</p> }
              {!!validPassword && <p className="--text-align-certer">{validPassword}</p> }
            </CardHeader>
            <CardBody className="card__body">
              <form onSubmit={this.handleSubmit}>
                <TextField
                  value={email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="email"
                  placeholder="E-mail"
                />
                <TextField
                  value={username}
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Name"
                />
                <TextField
                  value={password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="Password"
                />
                <Button
                  type="submit"
                  label="Salva"
                  typeBtn="primary"
                  block
                />
              </form>
              <p className="--text-align-certer --p-2">
                <Link to="/login">
                  Já tem conta? Click aqui para Entrar
                </Link>
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    )
  }
}

Register.defaultProps = {
  redirectToReferrer: false,
  registerError: {},
}

Register.propTypes = {
  newRegister: PropTypes.func.isRequired,
  redirectToReferrer: PropTypes.bool,
  registerError: PropTypes.objectOf(PropTypes.object),
}

const mapStateToProps = state => ({
  redirectToReferrer: state.register.isRegisterOK,
  registerError: state.register.registerError,
})

const mapDispatchToProps = dispatch => bindActionCreators(registerCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register)

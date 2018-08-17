import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import TextField from '../../components/commom/TextField'
import Button from '../../components/commom/Button'

import * as loginCreators from './login.actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state
    const { loginAuth } = this.props
    loginAuth(email, password)
  }

  render() {
    const { email, password } = this.state
    const { redirectToReferrer } = this.props
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
        <div style={{ width: '100%', maxWidth: 450 }} className="transform-center">
          <Card>
            <CardHeader className="card__header">
              <h1 className="h1 --text-align-certer">
                Autenticação
              </h1>
            </CardHeader>
            <CardBody className="card__body">
              <form onSubmit={this.handleSubmit}>
                <TextField
                  value={email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Username"
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
                  label="Login"
                  color="primary"
                  block
                />
              </form>
              <p className="--text-align-certer --p-2">
                <Link to="/">
                  Não tem uma conta? Click aqui para criar
                </Link>
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    )
  }
}

Login.propTypes = {
  loginAuth: PropTypes.func.isRequired,
  redirectToReferrer: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  redirectToReferrer: state.login.isAuthenticated,
})

const mapDispatchToProps = dispatch => bindActionCreators(loginCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

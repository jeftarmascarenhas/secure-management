import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import FormLogin from '../../components/Forms/FormLogin'

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
    const { redirectToReferrer, authError } = this.props
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
          defaultTitle="Login"
        >
          <meta name="description" content="A app cedrotech Test" />
        </Helmet>
        <div style={{ width: '100%', maxWidth: 450 }} className="transform-center">
          <Card>
            <CardHeader className="card__header">
              <h1 className="h1 --text-align-certer">
                Autenticação
              </h1>
              {!!authError && <p className="--text-align-certer">{authError.message}</p> }
            </CardHeader>
            <CardBody className="card__body">
              <FormLogin
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
                email={email}
                password={password}
              />
              <p className="--text-align-certer --p-2">
                <Link to="/register">
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

Login.defaultProps = {
  authError: {},
}

Login.propTypes = {
  loginAuth: PropTypes.func.isRequired,
  redirectToReferrer: PropTypes.bool.isRequired,
  authError: PropTypes.objectOf(PropTypes.object),
}

const mapStateToProps = state => ({
  redirectToReferrer: state.login.isAuthenticated,
  authError: state.login.authError,
})

const mapDispatchToProps = dispatch => bindActionCreators(loginCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

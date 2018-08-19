import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, className }) => (
  <div className={`card card--shadow --card-radius ${className}`}>
    { children }
  </div>
)

Card.defaultProps = {
  className: '',
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Card

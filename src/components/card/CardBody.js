import React from 'react'
import PropTypes from 'prop-types'

const CardBody = ({ children }) => (
  <div className="card__body">
    { children }
  </div>
)

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardBody

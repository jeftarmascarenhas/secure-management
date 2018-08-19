import React from 'react'
import PropTypes from 'prop-types'

const CardFooter = ({ children }) => (
  <div className="card__Footer">
    { children }
  </div>
)

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardFooter

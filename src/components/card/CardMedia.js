import React from 'react'
import PropTypes from 'prop-types'

const CardMedia = ({
  image,
  title,
}) => (
  <div className="card card--shadow" title={title} style={{ backgroundImage: image }} />
)

CardMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default CardMedia

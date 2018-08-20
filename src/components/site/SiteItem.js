import React from 'react'
import PropTypes from 'prop-types'
import Button from '../commom/Button';

const SiteItem = ({
  logo,
  site,
  handerDetails,
  handerRemove,
  handerEdit,
}) => (
  <div className="row">
    <div className="col-xs-12">
      <div className="row">
        <div className="site__logo col-xs-12 col-sm-3">
          { !!logo && <img src={logo} className="img--radius" alt={site.title} style={{ width: 65 }} /> }
        </div>
        <div className="site__info col-xs-12 col-sm-9">
          <h3 className="info__title">{site.title}</h3>
          <p><strong> Url: </strong>{` ${site.url}`}</p>
          <p><strong>User: </strong> {` ${site.user}`}</p>
          <p><strong>Pass: </strong> {` ${site.password}`}</p>
        </div>
      </div>
    </div>
    <div className="col-xs-12">
      <Button
        label="Detalhes"
        handlerClick={() => handerDetails(site)}
        typeBtn="text"
      />
      <Button
        label="Editar"
        handlerClick={() => handerEdit(site.id)}
        typeBtn="text"
      />
      <Button
        label="Remover"
        handlerClick={() => handerRemove(site.id)}
        typeBtn="text"
      />
    </div>
  </div>
)

SiteItem.propTypes = {
  logo: PropTypes.string.isRequired,
  site: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    user: PropTypes.string,
    password: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
  handerDetails: PropTypes.func.isRequired,
  handerEdit: PropTypes.func.isRequired,
  handerRemove: PropTypes.func.isRequired,
}

export default SiteItem

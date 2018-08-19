import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ReactModal from 'react-modal'

import coreApi from '../../api/coreApi'
import Header from '../../components/commom/Header'
import SiteItem from '../../components/site/SiteItem'
import Card from '../../components/card/Card'
import CardBody from '../../components/card/CardBody'
import Navbar from '../../components/commom/Navbar'
import Button from '../../components/commom/Button'

const DataMock = [
  {
    id: 1,
    url: 'https://gmail.google.com',
    logo: 'https://images.vexels.com/media/users/3/140749/isolated/lists/4fb58265f9e1ad8d8dd7c35f06fa58d6-avatar-perfil-masculino-1.png',
    title: 'Meu Hotmail',
    user: 'jeftar.clientes@gmail.com',
    password: '*********',
  },
  {
    id: 2,
    url: 'https://gmail.google.com',
    logo: 'https://images.vexels.com/media/users/3/140749/isolated/lists/4fb58265f9e1ad8d8dd7c35f06fa58d6-avatar-perfil-masculino-1.png',
    title: 'Login do Facebook',
    user: 'jeftar.clientes@gmail.com',
    password: '*********',
  },
  {
    id: 3,
    url: 'https://gmail.google.com',
    logo: 'https://images.vexels.com/media/users/3/140749/isolated/lists/4fb58265f9e1ad8d8dd7c35f06fa58d6-avatar-perfil-masculino-1.png',
    title: 'Twitter Login',
    user: 'jeftar.clientes@gmail.com',
    password: '*********',
  },
  {
    id: 4,
    url: 'https://gmail.google.com',
    logo: 'https://images.vexels.com/media/users/3/140749/isolated/lists/4fb58265f9e1ad8d8dd7c35f06fa58d6-avatar-perfil-masculino-1.png',
    title: 'Instagram conta',
    user: 'jeftar.clientes@gmail.com',
    password: '*********',
  },
]

class SitesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false,
      details: {},
      siteLogo: '',
    }
    this.handleCloseDetails = this.handleCloseDetails.bind(this)
    this.handleShowDetails = this.handleShowDetails.bind(this)
    this.getLogoSite = this.getLogoSite.bind(this)
  }

  componentDidMount() {
    this.getLogoSite('meu.com')
  }

  getLogoSite(siteName) {
    coreApi.getLogoSite(siteName)
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        )
        this.setState({ siteLogo: `data:;base64,${base64}` })
        // return `data:;base64,${base64}`
      })
  }

  handleCloseDetails() {
    this.setState({ showDetails: false })
  }

  handleShowDetails(site) {
    this.setState({
      showDetails: true,
      details: site,
    })
  }

  render() {
    const {
      showDetails, details, siteLogo,
    } = this.state
    return (
      <section>
        <Helmet
          titleTemplate="%s Cedrotech soluções Tecnológicas"
          defaultTitle="Sites"
        >
          <meta name="description" content="A app cedrotech Test" />
        </Helmet>
        <Navbar className="card--shadow" />
        <div className="container-fluid">
          <Header title="Sites managment" subtitle="Safely store your logins" />
          <div className="row">
            {
              DataMock.map(site => (
                <div key={site.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <Card className="--margin-bottom card--hover">
                    <CardBody>
                      <SiteItem
                        site={site}
                        logo={siteLogo}
                        handerDetails={this.handleShowDetails}
                        handerRemove={meta => console.log(meta)}
                        handerEdit={meta => console.log(meta)}
                      />
                    </CardBody>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
        <ReactModal
          ariaHideApp={false}
          isOpen={showDetails}
          contentLabel="Detalhes do site"
        >
          <Button
            label="Fechar"
            typeBtn="text"
            handlerClick={this.handleCloseDetails}
          />
          <div>
            <p>{details.title}</p>
            <img src={details.logo} alt={details.title} />
            <p>{details.url}</p>
            <p>{details.user}</p>
            <p>{details.password}</p>
          </div>
        </ReactModal>
      </section>
    )
  }
}

export default SitesPage

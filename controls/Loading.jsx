import React from 'react'
const objectAssign = require('object-assign')
import Boton from './Boton.jsx'
import Container from 'muicss/lib/react/container'
export default class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.state = objectAssign(
      {},
      { color: '',
        span: 'Cargando...',
        title: 'mascocitas.com',
        image: 'images/Loading.gif',
        onClick: () => {}
      },
        props
      )
  }
  render () {
    return (
      <Container><Boton key="loading"
        {...this.state}
        /></Container>)
  }
}

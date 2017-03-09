import React from 'react'
const objectAssign = require('object-assign')
import Boton from './Boton.jsx'
export default class Medalla extends React.Component {
  constructor (props) {
    super(props)
    this.state = objectAssign({}, {
      span: 0,
      title: 'Tienes {c} medallas',
      color: null,
      click: null,
      image: 'images/medalla.png',
      count: 0
    }, props)
    this.state.span = this.state.count
  }
  render () {
    var count = this.state.count
    if (!this.state.color) {
      if (count < 7) {
        this.state.color = 'danger'
      } else if (count < 10) {
        this.state.color = 'warning'
      } else {
        this.state.color = 'success'
      }
    }
    return (<Boton {...this.state} />)
  }
}

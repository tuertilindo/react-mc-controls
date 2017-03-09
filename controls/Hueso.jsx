import React from 'react'
const objectAssign = require('object-assign')
import Boton from './Boton.jsx'
export default class Hueso extends React.Component {
  constructor (props) {
    super(props)
    this.state = objectAssign({}, {
      span: 0,
      title: 'Tienes {c} huesitos para dar',
      color: 'red',
      click: null,
      image: 'images/huesito.png',
      count: 0
    }, props)
  }
  render () {
    var color = 'success'
    if (this.state.count < 1) {
      color = 'danger'
    } else if (this.state.count < 10) {
      color = 'warning'
    }
    return (<Boton
      title={this.state.title}
      color={color}
      count={this.state.count}
      span={this.state.count}
      click={this.state.click}
      image="images/huesito.png"
      />)
  }
}

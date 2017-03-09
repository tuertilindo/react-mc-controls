
import React from 'react'
const objectAssign = require('object-assign')
import Boton from './Boton.jsx'
export default class Paybones extends React.Component {
  constructor (props) {
    super(props)
    this.state = objectAssign({huesos: 0}, props)
  }
  render () {
    var pay = Math.floor(this.state.huesos / 100) + 1
    var percent = 10
    if (pay > 10) {
      pay = 10
      percent = 90
    } else {
      percent = 10 + (this.state.huesos - (this.state.huesos * (pay - 1)))
      if (percent > 90) {
        percent = 90
      }
    }
    return (<Boton pull="right" icon="percent" span={percent + '/' + pay}
      title={'tiene el ' + percent + '% de obtener ' + pay + ' medallas'} />)
  }
}

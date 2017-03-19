import React from 'react'
import Boton from './Boton.jsx'
export default class Coin extends React.Component {
  constructor (props) {
    super(props)
    var type = props.coinType || 0
    switch (type) {
      case 1:
        this.state = {
          title: 'Tienes {c} monedas de plata',
          image: 'images/coin-silver.png'
        }
        break
      case 2:
        this.state = {
          title: 'Tienes {c} monedas de oro',
          image: 'images/coin-gold.png'
        }
        break
      case 3:
        this.state = {
          title: 'Tienes {c} monedas esmeralda',
          image: 'images/coin-esmerald.png'
        }
        break
      case 4:
        this.state = {
          title: 'Tienes {c} monedas rubi',
          image: 'images/coin-ruby.png'
        }
        break
      default:
        this.state = {
          title: 'Tienes {c} monedas de cobre',
          image: 'images/coin-copper.png'
        }
        break
    }
    this.state.count = props.count
    this.state.click = props.click
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
      image={this.state.image}
      />)
  }
}

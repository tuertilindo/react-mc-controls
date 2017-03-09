import React from 'react'
const objectAssign = require('object-assign')
export default class Boton extends React.Component {
  constructor (props) {
    super(props)
    this.state = objectAssign({}, {
      span: null,
      title: '',
      desc: null,
      color: 'primary',
      click: null,
      icon: null,
      image: null,
      count: 0,
      huge: false
    }, props)
  }
  render () {
    var title = this.state.title
    if (title) {
      title = title.replace('{c}', this.state.count)
    }
    // image
    var image = (<img src="images/logo32.png" />)
    if (this.state.image) {
      image = (<img className={this.state.color} src={this.state.image} alt="M" />)
    }
    // span
    var btn = null
    var spn = this.state.span
    if (spn !== null) {
      btn = <span className={this.state.color} >
        {spn}
      </span>
    }
    return (
      <span className={'boton  ' + this.state.color} onClick={this.state.click} title={title} >
      {image}
      {btn}
      </span>
    )
  }
}

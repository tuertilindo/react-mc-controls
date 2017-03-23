import React from 'react'
const objectAssign = require('object-assign')
export default class Listitem extends React.Component {
  constructor (props) {
    super(props)
    this.state = objectAssign({
      image: 'images/maze-i.png',
      title: 'Titulo del elemento'
    }, props)
  }
  render () {
    return (
      <li>
        <img onClick={this.props.click} src={this.state.image} />
        <h2>{this.state.title}</h2>
        <div>
           {this.props.children}
        </div>
      </li>)
  }
}

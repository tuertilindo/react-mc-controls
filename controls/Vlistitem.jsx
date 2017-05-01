import React from 'react'
const objectAssign = require('object-assign')
export default class Vlistitem extends React.Component {
  constructor (props) {
    super(props)
    this.state = objectAssign({
      image: 'images/maze-i.png',
      title: 'Titulo del elemento'
    }, props.item, props)
  }
  render () {
    var lclick = null
    if (this.state.callback instanceof Function) {
      lclick = () => { this.state.callback(this.state) }
    }
    return (
      <div className="vitem" key={this.state.id} style={this.state.style}>
        <img onClick={lclick} src={this.state.image} />
        <h2>{this.state.name || this.state.title}</h2>
        <h6>{this.state.desc}</h6>
      </div>)
  }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.item && nextProps.item && nextProps.item.id !== this.props.item.id
  }
  componentWillReceiveProps (nextProps) {
    this.setState(objectAssign(this.state, nextProps.item))
  }
}

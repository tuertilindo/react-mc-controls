import React from 'react'
import ObjectAssign from 'object-assign'
export default class InputBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = ObjectAssign({
      label: 'Verdadero o falso',
      name: 'checkbox',
      checked: false,
      disabled: false,
      type: 'slideOne',
      callback: (st) => { console.log(st) }
    }, props)
  }
  render () {
    return (<div
      className={this.state.type}>
      <input
        type="checkbox"
        value="None"
        id={this.state.name}
        name={this.state.name}
        disabled={this.state.disabled}
        checked={this.state.checked} />
      <label htmlFor={this.state.name}></label>
    </div>)
  }
}

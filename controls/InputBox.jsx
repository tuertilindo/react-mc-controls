import React from 'react'
import Loading from './Loading.jsx'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import Button from 'muicss/lib/react/button'
import ObjectAssign from 'object-assign'
import Container from 'muicss/lib/react/container'
export default class InputBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = ObjectAssign({
      label: 'Introduzca el texto',
      maxLength: 50,
      text: '',
      done: false,
      multiline: false,
      doneText: 'Guardando su entrada...',
      buttonText: 'Guardar',
      validate: (txt) => { return true },
      callback: (txt) => { console.log(txt) }
    }, props)
  }
  render () {
    if (this.state.done) {
      return (<Loading span={this.state.doneText} />)
    }
    var MyInput = null
    if (this.state.multiline) {
      MyInput = (<Textarea
        label={this.state.label}
        onChange={(e) => { this.state.text = e.target.value }}
        maxLength={this.state.maxLength}
        floatingLabel
        defaultValue={this.state.text} />)
    } else {
      MyInput = (<Input
        label={this.state.label}
        onChange={(e) => { this.state.text = e.target.value }}
        maxLength={this.state.maxLength}
        floatingLabel
        type="text"
        defaultValue={this.state.text} />)
    }
    return (
      <Container className="inputbox">
        <div>
          {MyInput}
          <Button
            color="primary"
            size="small"
            onClick={() => {
              if (this.state.validate instanceof Function &&
                this.state.validate(this.state.text)) {
                if (this.state.callback instanceof Function) {
                  this.state.callback(this.state.text)
                  this.setState({done: true})
                }
              }
            }}>
            {this.state.buttonText}
          </Button>
        </div>
      </Container>)
  }
}

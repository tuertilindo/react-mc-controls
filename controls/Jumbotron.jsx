import React from 'react'
import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'
export default class Jumbotron extends React.Component {
  render () {
    let image = null
    let button = null
    if (this.props.image) {
      image = (<img src={this.props.image} />)
    }
    if (this.props.action) {
      button = (<p><Button color="accent" onClick={this.props.click}>{this.props.action}</Button></p>)
    }
    return (<Container>
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        {image}
        <p>{this.props.description}</p>
        {button}
      </div>
    </Container>
    )
  }
}

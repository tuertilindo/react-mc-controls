import React from 'react'
import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'
export default class Jumbotron extends React.Component {
  render () {
    let image = null
    let button = null
    let title = null
    let description = null
    if (this.props.image) {
      image = (<img src={this.props.image} />)
    }
    if (this.props.action) {
      button = (<p><Button color="accent" onClick={this.props.click}>{this.props.action}</Button></p>)
    }
    if (this.props.title) {
      title = (<h1>{this.props.title}</h1>)
    }
    if (this.props.description) {
      description = (<p>{this.props.description}</p>)
    }
    return (<Container>
      <div className="jumbotron">
        {title}
        {image}
        {description}
        {this.props.children}
        {button}
      </div>
    </Container>
    )
  }
}

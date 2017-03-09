import React from 'react'
import Button from 'muicss/lib/react/button'
export default class Jumbotron extends React.Component {
  render () {
    let image = null
    if (this.props.image) {
      image = (<img src={this.props.image} />)
    }
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        {image}
        <p>{this.props.description}</p>
        <p><Button color="accent" onClick={this.props.click}>{this.props.action}</Button></p>
      </div>)
  }
}

import React from 'react'
import Container from 'muicss/lib/react/container'
export default class Jumbotron extends React.Component {
  render () {
    const img = this.props.image || 'images/cancel-i.png'
    return (<Container>
      <div className="error">
        <img src={img} />
        <span>
          <strong>{this.props.title} </strong>
           {this.props.desc}
        </span>

      </div>
    </Container>
    )
  }
}

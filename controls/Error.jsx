import React from 'react'
import Container from 'muicss/lib/react/container'
export default class Jumbotron extends React.Component {
  render () {
    return (<Container>
      <div className="error">
        <img src="images/cancel-i.png" />
        <span>
          <strong>{this.props.title} </strong>
           {this.props.desc}
        </span>

      </div>
    </Container>
    )
  }
}

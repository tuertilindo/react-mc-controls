import React from 'react'
import Container from 'muicss/lib/react/container'
import Boton from './Boton.jsx'
import Bar from './Bar.jsx'
export default class Panel extends React.Component {
  render () {
    let image = null
    let title = null
    let head = null
    if (this.props.image) {
      image = (<Boton
        title={this.props.title}
        image={this.props.image}
        color="mui--pull-left" // pull left
        />)
    }
    if (this.props.title) {
      title = (<h3>{this.props.title}</h3>)
    }
    if (image || title) {
      head = (<Bar>
        {image}
        {title}
      </Bar>)
    }
    return (<Container>
      <div className="panel">
        {head}
        <div className="panel-content">
          {this.props.children}
        </div>
      </div>
    </Container>
    )
  }
}

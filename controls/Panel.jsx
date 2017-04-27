import React from 'react'
import Container from 'muicss/lib/react/container'
import Boton from './Boton.jsx'
import Bar from './Bar.jsx'
export default class Panel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
    if (props.expandible) {
      this.state.iconclick = () => {
        this.setState({expanded: !this.state.expanded})
      }
    }
  }
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
        <div onClick={this.state.iconclick}>
          {image}
          {title}
        </div>
      </Bar>)
    }
    var visible = this.state.collapsed ? 'visible' : 'hidden'
    return (<Container>
      <div className="panel">
        {head}
        <div key={visible} className={'panel-content ' + visible}>
          {this.props.children}
        </div>
      </div>
    </Container>
    )
  }
}

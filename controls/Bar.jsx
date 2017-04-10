import React from 'react'
import Appbar from 'muicss/lib/react/appbar'
export default class Bar extends React.Component {
  render () {
    return (<Appbar className="bar mui--z1">
      {this.props.children}
    </Appbar>
    )
  }
}

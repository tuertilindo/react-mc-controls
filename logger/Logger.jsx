import React from 'react'
import Reflux from 'reflux'
import LogActions from './LogActions.jsx'
import Vlist from 'react-mc-controls/controls/Vlist.jsx'
import Vlistitem from 'react-mc-controls/controls/Vlistitem.jsx'
import LogStore from './LogStore.jsx'
export default class Logger extends Reflux.Component {
  constructor (props) {
    super(props)
    this.state = {
      lista: []
    }
    this.mapStoreToState(LogStore, (fromStore) => {
      var obj = {
        list: fromStore.list
      }
      return obj
    })
  }
  render () {
    return (<Vlist list={this.state.list} rowHeight={45} render={Vlistitem} title="Informes de estado" />)
  }

}

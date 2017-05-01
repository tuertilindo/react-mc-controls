import Reflux from 'Reflux'
import LogActions from './LogActions.jsx'
export default class LogStore extends Reflux.Store {

  constructor () {
    super()
    this.state = {}
    this.list = []
    this.listenables = LogActions
  }
  addMessage (desc, title, lvl) {
    var msg = {
      level: lvl || 0,
      title: title || this.MessageType(lvl),
      desc: desc || 'not description',
      image: 'images/help-i.png'
    }
    this.list.push(msg)
    this.setState({msg: msg, list: this.list})
  }
  MessageType (lvl) {
    switch (lvl) {
      case 0:
        return 'Info'
      case 1:
        return 'Success'
      case 2:
        return 'Warning'
      case 3:
        return 'Error'
      case 4:
        return 'System'
      case 5:
        return 'Debug'
      default:
        return 'Info'
    }
  }
  Info (desc, title) {
    this.addMessage(desc, title, 0)
  }
  Success (desc, title) {
    this.addMessage(desc, title, 1)
  }
  Warning (desc, title) {
    this.addMessage(desc, title, 2)
  }
  Error (desc, title) {
    this.addMessage(desc, title, 3)
  }
  System (desc, title) {
    this.addMessage(desc, title, 4)
  }
  Debug (desc, title) {
    this.addMessage(desc, title, 5)
  }
  Listfetch (callback) {
    if (callback instanceof Function) {
      callback(this.list)
    }
  }
  Listclean () {
    this.list = []
  }
}

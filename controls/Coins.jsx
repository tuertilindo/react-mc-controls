import React from 'react'
import Coin from './Coin.jsx'
export default class Coins extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.calcular = function calc (coins, list) {
      if (coins >= 10000 && props.ruby) {
        list.ruby = Math.floor(coins / 10000)
        coins = coins % 10000
      } else if (coins >= 2500 && props.esmerald) {
        list.esmerald = Math.floor(coins / 2500)
        coins = coins % 2500
      } else if (coins >= 1000 && props.gold) {
        list.gold = Math.floor(coins / 1000)
        coins = coins % 1000
      } else if (coins >= 100 && props.silver) {
        list.silver = Math.floor(coins / 100)
        coins = coins % 100
      } else {
        list.copper = coins
        return list
      }
      return calc(coins, list)
    }
  }
  render () {
    var mylist = this.state.calcular(this.props.coins, {
      'ruby': 0,
      'esmerald': 0,
      'gold': 0,
      'silver': 0,
      'copper': 0
    })
    return (<div className="Coins">
      {(mylist.ruby > 0) ? (<Coin coinType={4} count={mylist.ruby} />) : null}
      {(mylist.esmerald > 0) ? (<Coin coinType={3} count={mylist.esmerald} />) : null}
      {(mylist.gold > 0) ? (<Coin coinType={2} count={mylist.gold} />) : null}
      {(mylist.silver > 0) ? (<Coin coinType={1} count={mylist.silver} />) : null}
      {(mylist.copper > 0) ? (<Coin coinType={0} count={mylist.copper} />) : null}
    </div>)
  }
}

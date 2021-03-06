import React from 'react'
import Listitem from './Listitem.jsx'
import Coins from './Coins.jsx'
import Hueso from './Hueso.jsx'
import Medalla from './Medalla.jsx'
import Panel from './Panel.jsx'
import Error from './Error.jsx'
export default class Pets extends React.Component {
  render () {
    const pets = this.props.pets
    const title = this.props.title || 'Mis mascotas'
    const items = pets.map(pet =>
      <Listitem
        key={'pet' + pet.id}
        id={pet.id}
        image={pet.image || 'images/Cardsplay.png'}
        title={pet.name}
        callback={this.props.onClick}
        >
        <Coins coins={pet.medallas || 0} />
        <Hueso count={pet.huesos || 0} />
        <Medalla count={pet.rank || 0} title="Nivel {c}" />

      </Listitem>
    )
    if (pets && pets.length > 0) {
      return (<Panel title={title}><ul>{items}</ul></Panel>)
    }
    return (<Panel title={title}><Error title=":(" desc="Aun no tiene mascotas" /></Panel>)
  }
}

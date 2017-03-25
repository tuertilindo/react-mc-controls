import React from 'react'
import Listitem from './Listitem.jsx'
import Coins from './Coins.jsx'
import Hueso from './Hueso.jsx'
import Medalla from './Medalla.jsx'
import Container from 'muicss/lib/react/container'
export default class Pets extends React.Component {
  render () {
    const pets = this.props.pets
    const items = pets.map(pet =>
      <Listitem
        key={'pet' + pet.id}
        id={pet.id}
        image={pet.image}
        title={pet.name}
        callback={this.props.onClick}
        >
        <Coins coins={pet.medallas} />
        <Hueso count={pet.huesos} />
        <Medalla count={pet.rank} />

      </Listitem>
    )
    if (pets) {
      return (<Container><ul>{items}</ul></Container>)
    }
    return (<Container><div>Aun no tienes mascotas</div></Container>)
  }
}
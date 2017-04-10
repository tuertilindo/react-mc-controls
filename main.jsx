import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'muicss/lib/react/container'
import Loading from './controls/Loading.jsx'
import Boton from './controls/Boton.jsx'
import InputBox from './controls/InputBox.jsx'
import CheckBox from './controls/CheckBox.jsx'
import Medalla from './controls/Medalla.jsx'
import Hueso from './controls/Hueso.jsx'
import Coins from './controls/Coins.jsx'
import Pets from './controls/Pets.jsx'
import Crop from './controls/Crop.jsx'
import Error from './controls/Error.jsx'
import Marquesina from './controls/Marquesina.jsx'
import Jumbotron from './controls/Jumbotron.jsx'
const petes = [
        {id: 0, image: 'images/maze-i.png', name: 'Pet 1', huesos: 1582, rank: 4, medallas: 53000},
        {id: 1, image: 'images/maze-i.png', name: 'Pet 2', huesos: 312, rank: 43, medallas: 33},
        {id: 2, image: 'images/maze-i.png', name: 'Pet 3', huesos: 1242, rank: 2, medallas: 1223}

]
var lista = []
petes.forEach((i, x) => {
  lista.push(<div key={x}><img src={i.image} /></div>)
})
ReactDOM.render((
  <div>
    <Error title="Ups!"
      desc="Se ha producido un error" />
    <Container fluid >
      <Boton />
      <Medalla count={76} />
      <Hueso count={10} />
      <Coins coins={123456} />
      <Loading />
    </Container>
    <Container>
      <Jumbotron title="Titulo Principal de la sección"
        description="No hay descripcion"
        action="Presiona aqui"
        image="images/Cardsplay.png" />
      <InputBox />
      <InputBox multiline />
      <CheckBox name="check1" /><CheckBox name="check2" />
    </Container>
    <Marquesina list={lista} />
    <Jumbotron title="Jumbotron solo titulo" />
    <Jumbotron description="Jumbotron solo descripcion" />
    <Jumbotron image="images/Cardsplay.png" />
    <Pets pets={petes} onClick={(id) => console.log(id)} />
    <Pets pets={[]} title="Sin mascotas" onClick={(id) => console.log(id)} />
    <Crop />
  </div>
),
document.getElementById('root')
)

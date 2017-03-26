import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'muicss/lib/react/container'
import Loading from './controls/Loading.jsx'
import Boton from './controls/Boton.jsx'
import Medalla from './controls/Medalla.jsx'
import Hueso from './controls/Hueso.jsx'
import Coins from './controls/Coins.jsx'
import Pets from './controls/Pets.jsx'
import Crop from './controls/Crop.jsx'
import Jumbotron from './controls/Jumbotron.jsx'
const petes = [
        {id: 0, image: 'images/maze-i.png', name: 'Pet 1', huesos: 1582, rank: 4, medallas: 53000},
        {id: 1, image: 'images/maze-i.png', name: 'Pet 2', huesos: 312, rank: 43, medallas: 33},
        {id: 2, image: 'images/maze-i.png', name: 'Pet 3', huesos: 1242, rank: 2, medallas: 1223},
        {id: 3, image: 'images/maze-i.png', name: 'Pet 4', huesos: 3, rank: 41, medallas: 32},
        {id: 4, image: 'images/maze-i.png', name: 'Pet 5', huesos: 0, rank: 14, medallas: 4431},
        {id: 5, image: 'images/maze-i.png', name: 'Pet 6', huesos: 33, rank: 24, medallas: 0},
        {id: 6, image: 'images/maze-i.png', name: 'Pet 7', huesos: 1555682, rank: 43, medallas: 0}
]
ReactDOM.render((
  <div>
    <Loading />
    <Container fluid >
      <Boton />
      <Medalla count={76} />
      <Hueso count={10} />
      <Coins coins={123456} />
    </Container>
    <Container>
      <Jumbotron title="Titulo Principal de la sección"
        description="No hay descripcion"
        action="Presiona aqui"
        image="images/Cardsplay.png" />
    </Container>
    <Jumbotron title="Algún titulo" />
    <Jumbotron description="No hay descripcion" />
    <Jumbotron image="images/Cardsplay.png" />
    <Pets pets={petes} onClick={(id) => console.log(id)} />
    <Crop />
  </div>
),
document.getElementById('root')
)

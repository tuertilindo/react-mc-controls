import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'muicss/lib/react/container'
import Loading from './controls/Loading.jsx'
import Boton from './controls/Boton.jsx'
import Medalla from './controls/Medalla.jsx'
import Hueso from './controls/Hueso.jsx'
import Coins from './controls/Coins.jsx'
import Jumbotron from './controls/Jumbotron.jsx'
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
  </div>
),
document.getElementById('root')
)

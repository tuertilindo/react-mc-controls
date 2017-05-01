import React from 'react'
import ReactDOM from 'react-dom'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
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
import Panel from './controls/Panel.jsx'
import Marquesina from './controls/Marquesina.jsx'
import Jumbotron from './controls/Jumbotron.jsx'
import Tree from './controls/testtree.jsx'
import Vlist from './controls/Vlist.jsx'
import Vlistitem from './controls/Vlistitem.jsx'
const petes = [
  {id: 0, image: 'images/maze-i.png', name: 'Pet 1', desc: 'descripcion de pet 1', huesos: 1582, rank: 4, medallas: 53000},
  {id: 1, image: 'images/maze-i.png', name: 'Pet 2', desc: 'descripcion de pet 2', huesos: 312, rank: 43, medallas: 33},
  {id: 2, image: 'images/maze-i.png', name: 'Pet 3', desc: 'descripcion de pet 3', huesos: 1242, rank: 2, medallas: 1223}
]
const mytree = [
  {
    title: '`title`',
    subtitle: '`subtitle`',
    expanded: true,
    children: [
      {
        title: 'Child Node',
        subtitle: 'Defined in `children` array belonging to parent'
      },
      {
        title: 'Nested structure is rendered virtually',
        subtitle: (
          <span>
            The tree uses&nbsp;
            <a href="https://github.com/bvaughn/react-virtualized">
              react-virtualized
            </a>
            &nbsp;and the relationship lines are more of a visual trick.
          </span>
        )
      }
    ]
  },
  {
    expanded: true,
    title: 'Any node can be the parent or child of any other node',
    children: [
      {
        expanded: true,
        title: 'Chicken',
        children: [
          { title: 'Egg' }
        ]
      }
    ]
  },
  {
    title: 'Button(s) can be added to the node',
    subtitle: 'Node info is passed when generating so you can use it in your onClick handler'
  },
  {
    title: 'Show node children by setting `expanded`',
    subtitle: ({ node }) => `expanded: ${node.expanded ? 'true' : 'false'}`,
    children: [
      {
        title: 'Bruce',
        subtitle: ({ node }) => `expanded: ${node.expanded ? 'true' : 'false'}`,
        children: [
          { title: 'Bruce Jr.' },
          { title: 'Brucette' }
        ]
      }
    ]
  },
  {
    title: 'Advanced',
    subtitle: 'Settings, behavior, etc.',
    children: [
      {
        title: (
          <div>
            <div
              style={{
                backgroundColor: 'gray',
                display: 'inline-block',
                borderRadius: 10,
                color: '#FFF',
                padding: '0 5px'
              }}
              >
              Any Component
            </div>
            &nbsp;can be used for `title`
          </div>
        )
      },
      {
        expanded: true,
        title: 'Limit nesting with `maxDepth`',
        subtitle: 'It´s set to for this example',
        children: [
          {
            expanded: true,
            title: 'renderDepthTitle',
            children: [
              {
                expanded: true,
                title: 'renderDepthTitle',
                children: [
                  { title: 'renderDepthTitle' },
                  {
                    title: 'title'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Disable dragging on a per-node basis with the `canDrag` prop',
        subtitle: 'Or set it to false to disable all dragging.',
        noDragging: true
      },
      {
        title: 'You cannot give this children',
        subtitle: 'Dropping is prevented via the `canDrop` API using `nextParent`',
        noChildren: true
      },
      {
        title: 'When node contents are really long, it will cause a horizontal scrollbar' +
        ' to appear. Deeply nested elements will also trigger the scrollbar.'
      }
    ]
  }
]
var lista = []
petes.forEach((i, x) => {
  lista.push(<div key={x}><img src={i.image} /></div>)
})
ReactDOM.render((
  <div>
    <Panel title="Expansible" expandible>
      <Error title="Ups!"
        desc="Se ha producido un error" />
    </Panel>
    <Vlist list={petes} rowHeight={45} render={Vlistitem} title="mi lista" callback={(item) => {
      console.log(item)
    }} filtro={(item, str) => {
      var t = new RegExp(str, 'i')
      return item.name.match(t) || item.desc.match(t)
    }} />
    <Tree treeData={mytree} />
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

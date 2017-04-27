import React from 'react'
import Boton from './Boton.jsx'
import Loading from './Loading.jsx'
import Panel from './Panel.jsx'
import Bar from './Bar.jsx'

import SortableTree, { toggleExpandedForAll } from 'react-sortable-tree'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchString: '',
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: props.treeData
    }
    this.updateTreeData = this.updateTreeData.bind(this)
    this.expandAll = this.expandAll.bind(this)
    this.collapseAll = this.collapseAll.bind(this)
  }
  updateTreeData (treeData) {
    this.setState({ treeData })
  }
  expand (expanded) {
    this.setState({
      treeData: toggleExpandedForAll({
        treeData: this.state.treeData,
        expanded
      })
    })
  }
  expandAll () {
    this.expand(true)
  }
  collapseAll () {
    this.expand(false)
  }
  render () {
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount
    } = this.state
    const alertNodeInfo = ({
      node,
      path,
      treeIndex,
      lowerSiblingCounts: _lowerSiblingCounts
    }) => {
      const objectString = Object.keys(node)
      .map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
      .join(',\n   ')
      console.log( // eslint-disable-line no-alert
        'Info passed to the button generator:\n\n' +
        `node: {\n   ${objectString}\n},\n` +
        `path: [${path.join(', ')}],\n` +
        `treeIndex: ${treeIndex}`
      )
    }
    const selectPrevMatch = () => this.setState({
      searchFocusIndex: searchFocusIndex !== null
      ? ((searchFoundCount + searchFocusIndex - 1) % searchFoundCount)
      : searchFoundCount - 1
    })
    const selectNextMatch = () => this.setState({
      searchFocusIndex: searchFocusIndex !== null
      ? ((searchFocusIndex + 1) % searchFoundCount)
      : 0
    })
    const isVirtualized = true
    const treeContainerStyle = isVirtualized ? { height: 450 } : {}
    return (
      <Panel title="Arbol">
        <Bar className="ubar">
          <Boton span="Expandir" image="images/zoom-in-i.png" click={this.expandAll} />
          <Boton span="Contraer" image="images/zoom-out-i.png" click={this.collapseAll} />
          <input
            className="inline-input"
            placeholder="Buscar..."
            onChange={event => this.setState({ searchString: event.target.value })}
            type="text"
            defaultValue={this.state.searchString} />
          <Boton image="images/zoom-in-i.png" click={selectPrevMatch} />
          <Boton image="images/zoom-out-i.png" click={selectNextMatch} />
          <span>
            &nbsp
            {searchFoundCount > 0 ? (searchFocusIndex + 1) : 0}
            &nbsp/&nbsp
            {searchFoundCount || 0}
          </span>
        </Bar>
        <div style={treeContainerStyle}>
          <SortableTree
            treeData={treeData}
            onChange={this.updateTreeData}
            onMoveNode={({ node, treeIndex, path }) =>
            console.debug( // eslint-disable-line no-console
              'node:', node,
              'treeIndex:', treeIndex,
              'path:', path
            )
          }
            searchQuery={searchString}
            searchFocusOffset={searchFocusIndex}
            canDrag={false && (({ node }) => !node.noDragging)}
            canDrop={false && (({ nextParent }) => !nextParent || !nextParent.noChildren)}
            searchFinishCallback={matches =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex: matches.length > 0 ? searchFocusIndex % matches.length : 0
              })
            }
            isVirtualized={isVirtualized}
            generateNodeProps={rowInfo => ({
              buttons: [
                <button
                  style={{
                    verticalAlign: 'middle'
                  }}
                  onClick={() => alertNodeInfo(rowInfo)}
                  >
                  ℹ
                </button>
              ]
            })}
          />
        </div>
      </Panel>
    )
  }
}

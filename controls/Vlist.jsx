import React from 'react'
import Listitem from './Listitem.jsx'
import Panel from './Panel.jsx'
import List from 'react-virtualized/dist/commonjs/List'
import Bar from './Bar.jsx'
import Boton from './Boton.jsx'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'

export default class Vlist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    let timeoutHandle = null
    this.searchbar = (<Bar className="ubar">
      <input
        className="inline-input"
        placeholder="Buscar..."
        ref={(el) => { this.inputSearch = el }}
        onChange={event => {
          var t = event.target.value
          window.clearTimeout(timeoutHandle)
          if (t && t.length > 2) {
            if (t !== this.state.searchString) {
              this.state.searchString = t
              timeoutHandle = window.setTimeout(() => {
                if (this.props.filtro instanceof Function) {
                  this.setState({searched: this.props.list.filter((item) => { return this.props.filtro(item, t) })})
                  if (this.my) this.my.forceUpdateGrid()
                }
              }, 500)
            }
          } else {
            if (this.state.searched) {
              this.setState({searched: null})
            }
          }
        }}
        type="text"
        defaultValue={this.state.searchString} />
      <Boton span="" image="images/reset.png" click={() => {
        if (this.state.searched) {
          this.inputSearch.value = ''
          this.setState({searched: null, searchString: ''})
        }
      }} />
    </Bar>)
  }
  render () {
    const list = this.state.searched || this.props.list
    const sbar = this.props.filtro ? this.searchbar : null
    if (list) {
      var rowHeight = this.props.rowHeight || 20
      var height = this.props.height || 300
      var Ritem = this.props.render || Listitem
      return (
        <Panel title={this.props.title} expandible>
          {sbar}
          <div style={{ height: height, width: '100%' }}>
            <AutoSizer disableHeight>
                {newProps => (
                  <List
                    height={height}
                    width={newProps.width}
                    rowCount={list.length}
                    ref={(ref) => { this.my = ref }}
                    rowHeight={rowHeight}
                    rowRenderer={({
                    key,         // Unique key within array of rows
                    index,       // Index of row within collection
                    isScrolling, // The List is currently being scrolled
                    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
                    style        // Style object to be applied to row (to position it)
                  }) => {
                      const ret = {
                        key: key,
                        item: list[index],
                        isScrolling: isScrolling,
                        isVisible: isVisible,
                        style: style
                      }
                      return (
                        <Ritem callback={this.props.callback} {...ret} />
                    )
                    }}
              />
                )}
            </AutoSizer>
          </div>
        </Panel>
        )
    }
    return (<div />)
  }
}

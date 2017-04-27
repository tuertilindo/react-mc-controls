import React from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import List from 'react-virtualized/dist/commonjs/List'
export default class Tree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data || [],
      rowHeight: 20
    }
  }
  renderItem (item, keyPrefix) {
    var onClick = (event) => {
      event.stopPropagation()
      item.expanded = !item.expanded
      this.list.recomputeRowHeights()
      this.list.forceUpdate()
    }
    var props = { key: keyPrefix }
    var children = []
    var itemText
    if (item.expanded) {
      props.onClick = onClick
      itemText = '[-] ' + item.name
      children = item.children.map((child, index) => {
        return this.renderItem(child, keyPrefix + '-' + index)
      })
    } else if (item.children.length) {
      props.onClick = onClick
      itemText = '[+] ' + item.name
    } else {
      itemText = '    ' + item.name
    }
    children.unshift(
      React.DOM.div({
        className: 'item',
        key: 'label',
        style: {
          cursor: item.children.length ? 'pointer' : 'auto'
        }
      }, itemText)
    )
    return React.DOM.ul(null, React.DOM.li(props, children))
  }
  getExpandedItemCount (item) {
    var count = 1
    if (item.expanded) {
      count += item.children
        .map(this.getExpandedItemCount)
        .reduce(function (total, count) { return total + count }, 0)
    }
    return count
  }
  cellRenderer (params) {
    var renderedCell = this.renderItem(this.state.data[params.index], params.index)
    return React.DOM.ul(
      {
        key: params.key,
        style: params.style
      },
      renderedCell
    )
  }
  rowHeight (params) {
    return this.getExpandedItemCount(this.state.data[params.index]) * this.state.rowHeight
  }
  render () {
    return (<AutoSizer>
    {(params) => (
      <List
        height={params.height}
        overscanRowCount={10}
        ref={(ref) => { this.list = ref }}
        rowCount={this.state.data.length}
        rowHeight={this.rowHeight}
        rowRenderer={this.cellRenderer}
        width={params.width}
      />
    )}
    </AutoSizer>)
  }
}

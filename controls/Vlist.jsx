import React from 'react'
import Listitem from './Listitem.jsx'
import Panel from './Panel.jsx'
import List from 'react-virtualized/dist/commonjs/List'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
export default class Vlist extends React.Component {
  render () {
    const list = this.props.list
    if (list) {
      var rowHeight = this.props.rowHeight || 20
      var height = this.props.height || 300
      var Ritem = this.props.render || Listitem
      return (
        <Panel title={this.props.title} expandible>
          <div style={{ height: 200, width: '100%' }}>
            <AutoSizer disableHeight>
                {newProps => (
                  <List
                    height={height}
                    width={newProps.width}
                    rowCount={list.length}
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
                        <Ritem {...ret} />
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

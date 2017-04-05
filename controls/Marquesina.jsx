import React from 'react'
import Slider from 'react-slick'
import Container from 'muicss/lib/react/container'
import ObjectAssign from 'object-assign'
export default class Marquesina extends React.Component {
  constructor (props) {
    super(props)
    this.state = ObjectAssign({
      list: [],
      action: () => {}
    }, props)
    var cont = this.state.list.length
    cont = cont > 0 ? cont : 1
    var min1 = cont < 4 ? cont : 4
    var min2 = cont < 3 ? cont : 3
    var min3 = cont < 2 ? cont : 2
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: min1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: min2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: min3
        }
      }, {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      }]
    }
    this.state.settings = ObjectAssign(settings, props.settings)
  }
  render () {
    if (this.state.list.length === 0) {
      return <div />
    }
    return (
      <Container className="slickcontainer">
        <Slider {...this.state.settings}>{this.state.list}</Slider>
      </Container>
      )
  }
}

import React, { Component } from 'react'
import Input from 'muicss/lib/react/input'
import Boton from './Boton.jsx'
import Loading from './Loading.jsx'
import Panel from './Panel.jsx'
import Jumbotron from './Jumbotron.jsx'
import Bar from './Bar.jsx'
import Cropper from 'react-cropper'
import base64toblob from 'base64toblob'
const objectAssign = require('object-assign')
export default class Crop extends Component {
  constructor (props) {
    super(props)
    this.state = objectAssign({
      title: 'Crear una tarjeta',
      image: 'images/previmage.png',
      buttonText: 'Generar tarjeta',
      pet: null,
      cropcount: 0,
      cropResult: null,
      fromfile: !props.src,
      src: null,
      original: props.src,
      generando: false
    }, props)
    this.state.src = null
    this.cropImage = this.cropImage.bind(this)
    this.onChange = this.onChange.bind(this)
    this.useDefaultImage = this.useDefaultImage.bind(this)
  }

  onChange (e) {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files
    }
    this.generateImg(files[0])
  }
  generateImg (img) {
    const reader = new FileReader()
    var me = this
    me.setState({generando: true})
    reader.onload = () => {
      var img = new Image()
      img.onload = () => {
        var oc = document.createElement('canvas')
        var octx = oc.getContext('2d')
        var relacion = img.width / img.height
        oc.width = 640
        oc.height = 640 / relacion
        octx.drawImage(img, 0, 0, oc.width, oc.height)
        me.setState({src: oc.toDataURL(), generando: false})
      }
      img.src = reader.result
    }
    reader.readAsDataURL(img)
  }
  rebuild () {
    if (this.cropper) {
      var cr = this.cropper
      if (cr.getCanvasData()) {
        var container = cr.getContainerData()
        var width = container.width
        cr.setCropBoxData({width: width - 20})
        var left = (width / 2) - (cr.getCropBoxData().width / 2)
        var top = (container.height / 2) - (cr.getCropBoxData().height / 2)
        cr.setCropBoxData({left: left, top: top})
        cr.setCanvasData({width: width, left: 0})
        var cnv = cr.getCanvasData()
        cr.setCanvasData({top: (container.height / 2) - (cnv.height / 2)})
      }
    }
  }
  cropImage () {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return null
    }
    var img = this.cropper.getCroppedCanvas().toDataURL()
    return img
  }
  useDefaultImage () {
    this.setState({
      title: '',
      cropcount: this.state.cropcount + 1,
      cropResult: null,
      src: null,
      fromfile: false
    })
  }
  render () {
    if (this.state.generando) {
      return (<Panel title={this.state.title}><Loading span="Generando imagen..." /></Panel>)
    }
    if (this.state.original && !this.state.fromfile) {
      if (this.state.cropResult) {
        this.state.original = this.state.cropResult
      }
      return (<Jumbotron image={this.state.original} action="Cambiar" click={() => this.setState({fromfile: true})} />)
    }
    if (!this.state.src) {
      return (<Panel title={this.state.title} image="images/maze-i.png">
        <label>
          <input ref="fimage" className="fileInput" type="file" name="file" accept="image/" capture="camera" onChange={this.onChange} />
        </label>
      </Panel>)
    }
    var createCard = () => {
      var result = this.cropImage()
      if (this.state.onCreate) {
        this.state.onCreate({
          title: this.state.title,
          image: result
        })
      }
      this.setState({fromfile: false, cropResult: result})
    }
    var rotate = () => {
      this.cropper.rotate(30)
    }
    var zoom = (z) => {
      this.cropper.zoom(z)
    }
    var zoomin = () => { zoom(0.1) }
    var zoomout = () => { zoom(-0.1) }
    var stylew = document.body.clientWidth / 1.7777
    return (
    <Jumbotron buttonsize="small" title={this.state.title} action="generar imagen" click={createCard}>
      <Bar className="ubar">
        <Boton span="Rotar" image="images/rotate-i.png" click={rotate} />
        <Boton span="Agrandar" image="images/zoom-in-i.png" click={zoomin} />
        <Boton span="Achicar" image="images/zoom-out-i.png" click={zoomout} />
        <Boton span="Cancelar" image="images/cancel-i.png" click={this.useDefaultImage} />
      </Bar>
      <Cropper
        aspectRatio={16 / 9}
        guides={false}
        src={this.state.src}
        responsive={true}
        ref={cropper => { this.cropper = cropper }}
        minCanvasWidth={100}
        minCropBoxWidth={200}
        zoomOnWheel={false}
        dragMode="move"
        toggleDragModeOnDblclick={false}
        viewMode={0}
        cropBoxMovable={false}
        cropBoxResizable={false}
        autoCropArea={0.9}
        restore={false}
        highlight={false}
        style={{height: stylew, width: '100%'}}
        ready={this.rebuild}
      />
    </Jumbotron>
    )
  }
}

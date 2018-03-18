import WebGLVideo from './WebGLVideo.js'

class TerminatorVision extends WebGLVideo {
  constructor (canvasElem, videoElem) {
    super(canvasElem, videoElem)
  }

  drawFrame () {
    this._setRedFilter()
    super.drawFrame()
  }

  _setRedFilter () {
    this.gl.colorMask(true, false, false, true);
  }
}

export default TerminatorVision;

class WebGLVideo {
  constructor (canvasElem, videoElem) {
    this.gl = canvasElem.getContext('webgl')
    this.video = videoElem

    const gl = this.gl

    const vertexShader = this._createShader(gl.VERTEX_SHADER, WebGLVideo.vertexShaderSource)
    const fragmentShader = this._createShader(gl.FRAGMENT_SHADER, WebGLVideo.fragmentShaderSource)

    this.program = this._createProgram(vertexShader, fragmentShader)

    this.positionLocation = gl.getAttribLocation(this.program, 'a_position')
    this.texcoordLocation = gl.getAttribLocation(this.program, 'a_texcoord')

    this.matrixLocation = gl.getUniformLocation(this.program, 'u_matrix')
    this.textureLocation = gl.getUniformLocation(this.program, 'u_texture')

    this.positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer)

    const positions = [
      0, 0,
      0, 1,
      1, 0,
      1, 0,
      0, 1,
      1, 1
    ]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

    this.texcoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.texcoordBuffer)

    const texcoords = [
      0, 0,
      0, 1,
      1, 0,
      1, 0,
      0, 1,
      1, 1
    ]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW)
  }

  drawFrame () {
    const gl = this.gl

    WebGLVideo.resizeCanvasToDisplaySize(gl.canvas)
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    gl.clear(gl.COLOR_BUFFER_BIT)

    const tex = this._createTextureInfo(this.video)

    const params = {
      tex,
      texWidth: gl.canvas.width,
      texHeight: gl.canvas.height,
      dstX: 0,
      dstY: 0
    }

    this._drawImage(params)
  }

  _createShader (type, source) {
    const gl = this.gl

    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)

    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)

    if (success) {
      return shader
    }

    console.error('Не удалось скомпилировать шейдер', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
  }

  _createProgram (vertexShader, fragmentShader) {
    const gl = this.gl

    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    const success = gl.getProgramParameter(program, gl.LINK_STATUS)

    if (success) {
      return program
    }

    console.error('Не удалось связать шейдер с программой', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
  }

  static resizeCanvasToDisplaySize (canvas) {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
    }
  }

  _createTextureInfo () {
    const gl = this.gl
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)

    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.video)

    return texture
  }

  _drawImage ({tex, texWidth, texHeight, dstX, dstY}) {
    const gl = this.gl

    gl.bindTexture(gl.TEXTURE_2D, tex)

    gl.useProgram(this.program)

    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer)
    gl.enableVertexAttribArray(this.positionLocation)
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, this.texcoordBuffer)
    gl.enableVertexAttribArray(this.texcoordLocation)
    gl.vertexAttribPointer(this.texcoordLocation, 2, gl.FLOAT, false, 0, 0)

    let matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1)
    matrix = m4.translate(matrix, dstX, dstY, 0)
    matrix = m4.scale(matrix, texWidth, texHeight, 1)

    gl.uniformMatrix4fv(this.matrixLocation, false, matrix)
    gl.uniform1i(this.textureLocation, 0)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
  }
}

WebGLVideo.vertexShaderSource = `
  attribute vec4 a_position;
  attribute vec2 a_texcoord;

  uniform mat4 u_matrix;

  varying vec2 v_texcoord;

  void main() {
     gl_Position = u_matrix * a_position;
     v_texcoord = a_texcoord;
  }
`

WebGLVideo.fragmentShaderSource = `
  precision mediump float;

  varying vec2 v_texcoord;

  uniform sampler2D u_texture;

  void main() {
     gl_FragColor = texture2D(u_texture, v_texcoord);
  }
`

export default WebGLVideo

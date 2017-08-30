/**
 * Created by virus_zhh on 2017/8/28.
 */
let dots = []
const DOT_SIZE = 1.3
let canvas = null
let ctx = null

function getLogoData () {
  var osCtx = this.osCanvas.getContext('2d')
  osCtx.clearRect(0, 0, this.osCanvas.width, this.osCanvas.height)
  this.osCanvas.width = 500
  this.osCanvas.height = 100
  osCtx.fillStyle = '#5C5656'
  osCtx.fillRect(130, 20, 60, 60)
  osCtx.textAlign = 'center'
  osCtx.textBaseline = 'middle'
  osCtx.font = '65px 微软雅黑,黑体 bold'
  osCtx.fillStyle = '#e01a0a'
  osCtx.fillText('NIC', 416, this.osCanvas.height / 2)
  osCtx.font = '40px 微软雅黑,黑体 bold'
  osCtx.fillStyle = '#f5f5ff'
  osCtx.fillText('METRO', 280, this.osCanvas.height / 2)
  return osCtx.getImageData(0, 0, this.osCanvas.width, this.osCanvas.height)
}

(function () {
  var lastTime = 0
  var vendors = ['ms', 'moz', 'webkit', 'o']
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16 - (currTime - lastTime))
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
}())

class Dot {
  constructor (x, y, vx, vy, tox, toy, color) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.visible = false
    this.nextox = tox
    this.nextoy = toy
    this.color = color
    this.globleDown = false
    this.gravity = Math.random() * 3 + 6.8
    this.setEnd(tox, toy)
  }
  paint () {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x - DOT_SIZE / 2, this.y - DOT_SIZE / 2, DOT_SIZE, DOT_SIZE)
  }
  setEnd (tox, toy) {
    this.tox = tox
    this.toy = toy
  }
  update (time) {
    this.x += this.vx * time
    this.y += this.vy * time
    if (!this.globleDown) {
      var yc = this.toy - this.y
      var xc = this.tox - this.x
      this.jl = Math.sqrt(xc * xc + yc * yc)
      var za = 20
      var ax = za * (xc / this.jl)
      var ay = za * (yc / this.jl)
      this.vx = (this.vx + ax * time) * 0.95
      this.vy = (this.vy + ay * time) * 0.95
    } else {
      this.vy += this.gravity * time
      if (this.y > canvas.height) {
        dots.splice(dots.indexOf(this), 1, null)
      }
    }
  }
  loop (time) {
    this.update(time)
    this.paint()
  }
}

class Animate {
  constructor () {
    this.state = 'before'
  }
  init () {
    this.osCanvas = document.createElement('canvas')
    var osCtx = this.osCanvas.getContext('2d')
    this.osCanvas.width = 1000
    this.osCanvas.height = 200
    osCtx.textAlign = 'center'
    osCtx.textBaseline = 'middle'
    osCtx.font = '100px 微软雅黑,黑体 bold'
    osCtx.fillStyle = '#f5f5ff'
    osCtx.fillText('WELCOME', this.osCanvas.width / 2, this.osCanvas.height / 2 - 40)
    osCtx.fillText('TO METRONIC', this.osCanvas.width / 2, this.osCanvas.height / 2 + 50)
    var bigImageData = osCtx.getImageData(0, 0, this.osCanvas.width, this.osCanvas.height)
    dots = []
    for (var x = 0; x < bigImageData.width; x += 2) {
      for (var y = 0; y < bigImageData.height; y += 3) {
        var i = (y * bigImageData.width + x) * 4
        if (bigImageData.data[i + 3] > 128) {
          var dot = new Dot(
            canvas.width / 2 - 1 + 2 * Math.random(),
            canvas.height / 2 - 1 + 2 * Math.random(),
            0,
            0,
            x + (canvas.width / 2 - this.osCanvas.width / 2),
            y + (canvas.height / 2 - this.osCanvas.height / 2),
            'rgba(' + bigImageData.data[i] + ',' + bigImageData.data[i + 1] + ',' + bigImageData.data[i + 2] + ',1)'
          )
          dot.setEnd(canvas.width / 2, canvas.height / 2)
          dots.push(dot)
        }
      }
    }
  }
  changeState () {
    var bigImageData = getLogoData.call(this)
    var index = 0
    var d
    dots.sort(() => {
      return Math.random() - Math.random()
    })
    for (var x = 0; x < bigImageData.width; x += 1) {
      for (var y = 0; y < bigImageData.height; y += 2) {
        if (!(d = dots[index])) continue
        var i = (y * bigImageData.width + x) * 4
        if (bigImageData.data[i + 3] > 128) {
          d.setEnd(x + (canvas.width / 2 - 300), y + 50)
          d.color = 'rgba(' + bigImageData.data[i] + ',' + bigImageData.data[i + 1] + ',' + bigImageData.data[i + 2] + ',1)'
          index++
        }
      }
    }
    while (index < dots.length) {
      if (!(d = dots[index++])) continue
      d.globleDown = true
      d.vx = 0
    }
  }
  update (time, state, stateChange) {
    var i, d
    time /= 100
    var completeNum = 0
    for (i = 0; i < dots.length; i++) {
      if (!(d = dots[i])) continue
      d.loop(time)
      if (d.jl < 3) completeNum++
    }
    if (completeNum >= 5 * dots.length / 6) {
      switch (this.state) {
        case 'before':
          this.state = 'first'
          for (i = 0; i < dots.length; i++) {
            if (!(d = dots[i])) continue
            d.setEnd(d.nextox, d.nextoy)
          }
          break
        case 'first':
          this.state = 'second'
          this.changeState()
          break
        default :
          break
      }
      if (this.state !== state) {
        stateChange(this.state)
      }
    }
  }
}

class Stage {
  constructor (stage, stateChange) {
    canvas = stage
    ctx = canvas.getContext('2d')
    var self = this
    this.state = ''
    this.stateChange = function (newState) {
      self.state = newState
      if (typeof stateChange === 'function') {
        stateChange(self.state)
      }
    }
    this.animate = new Animate()
  }
  init () {
    this.animate.init()
  }
  loop () {
    var self = this
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.animate.update(16, this.state, this.stateChange)
    window.requestAnimationFrame(function () {
      self.loop()
    })
  }
}

export default Stage

class Circle {

  constructor(gameSize) {

    this.gameSize = gameSize

    this.circleSize = {
      w: 30,
      h: 30
    }

    this.circlePos = {
      left: 100,
      top: this.gameSize.h - this.circleSize.h - 100
    }

    this.circlePhysics = {
      speed: {
        top: -1,
        left: 5
      }
    }

    this.init()
  }

  init() {
    this.circleElement = document.createElement('div')

    this.circleElement.style.position = "absolute"
    this.circleElement.style.width = `${this.circleSize.w}px`
    this.circleElement.style.height = `${this.circleSize.h}px`
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
    this.circleElement.style.backgroundColor = `red`
    this.circleElement.style.borderRadius = '50%'

    document.querySelector('#game-screen').appendChild(this.circleElement)
  }

  move() {

    if (this.circlePos.left >= this.gameSize.w - this.circleSize.w) {
      this.turnHorizontal()
    }

    if (this.circlePos.left <= 0) {
      this.turnHorizontal()
    }

    if (this.circlePos.top <= 0) {
      this.turnVertical()
    }

    if (this.circlePos.top >= this.gameSize.h - this.circleSize.h) {
      this.turnVertical()
    }

    this.circlePos.top += this.circlePhysics.speed.top
    this.circlePos.left += this.circlePhysics.speed.left

    this.circleElement.style.top = `${this.circlePos.top}px`
    this.circleElement.style.left = `${this.circlePos.left}px`
  }

  turnHorizontal() {
    this.circlePhysics.speed.left *= -1
  }

  turnVertical() {
    this.circlePhysics.speed.top *= -1
  }

}
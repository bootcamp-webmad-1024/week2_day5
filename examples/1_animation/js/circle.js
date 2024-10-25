class Circle {

  constructor(gameSize) {

    this.gameSize = gameSize

    this.circleSize = {
      w: 30,
      h: 30
    }

    this.circlePos = {
      left: 100,
      top: this.gameSize.h - this.circleSize.h
    }

    this.circlePhysics = {
      speed: {
        top: -1,
        left: 1
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
    this.circlePos.top += this.circlePhysics.speed.top
    this.circlePos.left += this.circlePhysics.speed.left

    this.circleElement.style.top = `${this.circlePos.top}px`
    this.circleElement.style.left = `${this.circlePos.left}px`
  }

}
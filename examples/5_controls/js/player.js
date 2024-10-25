class Player {

  constructor(gameSize) {

    this.gameSize = gameSize

    this.playerSize = {
      w: 100,
      h: 100
    }

    this.playerPos = {
      left: 100,
      top: gameSize.h - this.playerSize.h
    }

    this.playerPhysics = {
      speed: {
        left: 10
      }
    }

    this.init()
  }

  init() {
    this.playerElement = document.createElement('div')

    this.playerElement.style.position = "absolute"
    this.playerElement.style.width = `${this.playerSize.w}px`
    this.playerElement.style.height = `${this.playerSize.h}px`
    this.playerElement.style.left = `${this.playerPos.left}px`
    this.playerElement.style.top = `${this.playerPos.top}px`
    this.playerElement.style.backgroundColor = `black`

    document.querySelector('#game-screen').appendChild(this.playerElement)
  }

  move() {
    this.playerElement.style.top = `${this.playerPos.top}px`
    this.playerElement.style.left = `${this.playerPos.left}px`
  }

  moveLeft() {
    this.playerPos.left += this.playerPhysics.speed.left
  }

  moveRight() {
    this.playerPos.left -= this.playerPhysics.speed.left
  }
}
const Game = {

  name: 'Videogame module 1',
  author: 'Ironhack',
  version: '1.0',
  license: undefined,

  ball: undefined,

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    document.querySelector("#game-screen").style.width = `${this.gameSize.w}px`
    document.querySelector("#game-screen").style.height = `${this.gameSize.h}px`
  },

  start() {
    this.createElements()
    this.startGameLoop()
  },

  createElements() {
    this.ball = new Circle(this.gameSize)
  },

  startGameLoop() {
    setInterval(() => {
      this.moveAll()
    }, 10)

  },

  moveAll() {
    this.ball.move()
  }

}
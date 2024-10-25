const Game = {

  name: 'Videogame module 1',
  author: 'Ironhack',
  version: '1.0',
  license: undefined,

  balls: [],

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
    this.setEventListeners()
    this.startGameLoop()
  },

  createElements() {
    // aqui creamos los elementos iniciales
  },

  setEventListeners() {
    document.onkeyup = event => {
      if (event.code === 'Space') {
        this.createBall()
      }
    }
  },

  createBall() {
    const newBall = new Circle(this.gameSize)
    this.balls.push(newBall)
  },

  startGameLoop() {
    setInterval(() => {
      this.clearAll()
      this.moveAll()
    }, 10)

  },

  moveAll() {
    this.balls.forEach(eachBall => {
      eachBall.move()
    })
  },

  clearAll() {

    this.balls.forEach((eachBall, index) => {

      if (eachBall.circlePos.left >= this.gameSize.w) {
        eachBall.circleElement.remove()     //remove from DOM
        this.balls.splice(index, 1)         //remove from array
      }

    })
  }

}
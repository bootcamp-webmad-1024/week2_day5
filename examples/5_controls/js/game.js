const Game = {

  name: 'Videogame module 1',
  author: 'Ironhack',
  version: '1.0',
  license: undefined,

  player: undefined,

  keys: {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    SHOOT: 'Space'
  },

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
    this.player = new Player(this.gameSize)
  },

  setEventListeners() {

    document.onkeydown = event => {

      switch (event.code) {
        case this.keys.LEFT:
          this.player.moveLeft()
          break;
        case this.keys.RIGHT:
          this.player.moveRight()
          break;
        case this.keys.SHOOT:
          alert('DISPARO VA')
          break;
      }
    }
  },

  startGameLoop() {
    setInterval(() => {
      this.clearAll()
      this.moveAll()
    }, 10)

  },

  moveAll() {
    this.player.move()
  },

  clearAll() {
    // aqui limpiamos el DOM y los arrays
  }

}
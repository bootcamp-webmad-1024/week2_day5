const Game = {
  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  background: undefined,

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
    this.background = new Background(this.gameSize)
  },

  startGameLoop() {
    setInterval(() => {
      this.clearAll()
      this.moveAll()
    }, 20)
  },

  moveAll() {
    this.background.move()
  },

  clearAll() {
    // limpieza :3
  }


}

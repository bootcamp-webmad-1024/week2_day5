const Game = {

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  framesCounter: 0,

  background: undefined,
  player: undefined,
  obstacles: [],

  obstacleDensity: 100,

  keys: {
    JUMP: 'ArrowUp',
    SHOOT: 'Space'
  },

  init() {
    this.setDimensions()
    this.setEventListeners()
    this.start()
  },

  setDimensions() {
    document.querySelector("#game-screen").style.width = `${this.gameSize.w}px`
    document.querySelector("#game-screen").style.height = `${this.gameSize.h}px`
  },

  setEventListeners() {

    document.addEventListener("keydown", e => {
      switch (e.code) {
        case this.keys.JUMP:
          this.player.jump()
          break;
        case this.keys.SHOOT:
          this.player.shoot()
          break;
      }
    })
  },

  start() {
    this.createElements()
    this.startGameLoop()
  },

  createElements() {
    this.background = new Background(this.gameSize)
    this.player = new Player(this.gameSize)
  },

  startGameLoop() {

    setInterval(() => {

      if (this.framesCounter > 5000) {
        this.framesCounter = 0
      } else {
        this.framesCounter++
      }

      this.moveAll()
      this.clearAll()

      this.generateObstacles()

      if (this.isCollision()) this.gameOver()
    }, 20)
  },

  moveAll() {
    this.background.move()
    this.player.move()
    this.obstacles.forEach(obs => obs.move())
  },

  generateObstacles() {
    if (this.framesCounter % this.obstacleDensity === 0) {
      const newObstacle = new Obstacle(this.gameSize, this.player.playerPos, this.player.playerSize)
      this.obstacles.push(newObstacle)
    }
  },

  clearAll() {
    this.obstacles.forEach((obs, idx) => {
      if (obs.obstaclePos.left <= 0) {
        obs.obstacleElement.remove()
        this.obstacles.splice(idx, 1)
      }
    })
  },

  isCollision() {

    for (let i = 0; i < this.obstacles.length; i++) {
      if (
        this.player.playerPos.left + this.player.playerSize.w >= this.obstacles[i].obstaclePos.left &&
        this.player.playerPos.top + this.player.playerSize.h >= this.obstacles[i].obstaclePos.top &&
        this.player.playerPos.left <= this.obstacles[i].obstaclePos.left + this.obstacles[i].obstacleSize.w
      ) {
        return true
      }
    }
  },

  gameOver() {
    alert('MORISTE')
  }
}
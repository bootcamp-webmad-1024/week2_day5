const Game = {

    name: 'Videogame module 1',
    author: 'Ironhack',
    version: '1.0',
    license: undefined,

    gameSize: {
        width: 600,
        height: 500
    },

    init() {
        this.setDimensions()
        this.createElements()
    },

    setDimensions() {
        document.querySelector('#game-screen').style.width = `${this.gameSize.width}px`
        document.querySelector('#game-screen').style.height = `${this.gameSize.height}px`
    },

    createElements() {
        const square = new Square(this.gameSize)
        square.init()

        const circle = new Circle(this.gameSize)
        circle.init()

        const image = new Image()
        image.init()
    }
}
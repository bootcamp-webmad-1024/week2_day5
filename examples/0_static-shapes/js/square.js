class Square {

    constructor(gameSize) {

        this.gameSize = gameSize

        this.squareSize = {
            w: 100,
            h: 100
        }

        this.squarePos = {
            left: gameSize.width / 2 - this.squareSize.w / 2,
            top: 100
        }

        this.squareSpecs = {
            color: 'red'
        }
    }

    init() {

        this.squareElement = document.createElement('div')

        this.squareElement.style.position = 'absolute'
        this.squareElement.style.backgroundColor = this.squareSpecs.color
        this.squareElement.style.top = `${this.squarePos.top}px`
        this.squareElement.style.left = `${this.squarePos.left}px`
        this.squareElement.style.width = `${this.squareSize.w}px`
        this.squareElement.style.height = `${this.squareSize.h}px`

        document.querySelector('#game-screen').appendChild(this.squareElement)
    }
}
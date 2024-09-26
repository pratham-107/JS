let canvas = document.querySelector('canvas')
let pen = canvas.getContext('2d')

let cell = 50;
let snakeC = [[0, 0]]
let direction = 'right'
let score = 0
let gameOver = false
let randomData = randomCell()

let id = setInterval(() => {
    if (!gameOver) {
        Draw()
        update()
    } else {
        clearInterval(id) // Stop the game when game over occurs
        drawGameOver() // Draw "Game Over" message
    }
}, 1000 / 10)

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        direction = 'left'
    }
    else if (e.key === 'ArrowRight') {
        direction = 'right'
    }
    else if (e.key === 'ArrowUp') {
        direction = 'up'
    }
    else{
        direction = 'down'
    }
})

function Draw() {
    pen.clearRect(0, 0, 1000, 600)

    // Draw snake
    for (let i of snakeC) {
        pen.fillStyle = 'red'
        pen.fillRect(i[0], i[1], cell, cell)
    }

    // Draw food
    pen.fillStyle = 'green'
    pen.fillRect(randomData[0], randomData[1], cell, cell)

    // Display score
    pen.font = '50px sans-serif'
    pen.fillStyle = 'yellow'
    pen.fillText(`${score}`, 500, 200)
}

function update() {
    let headX = snakeC[snakeC.length - 1][0]
    let headY = snakeC[snakeC.length - 1][1]

    let newX
    let newY

    if (direction === 'left') {
        newX = headX - cell
        newY = headY
        if (newX < 0) {
            gameOver = true
        }
    }
    else if (direction === 'right') {
        newX = headX + cell
        newY = headY
        if (newX === 1000) {
            gameOver = true
        }
    }
    else if (direction === 'up') {
        newX = headX
        newY = headY - cell
        if (newY < 0) {
            gameOver = true
        }
    }
    else {
        newX = headX
        newY = headY + cell
        if (newY === 600) {
            gameOver = true
        }
    }

    // Check for self-collision
    for (let i = 0; i < snakeC.length - 1; i++) {
        if (newX === snakeC[i][0] && newY === snakeC[i][1]) {
            gameOver = true
        }
    }

    // Collision with food
    if (newX === randomData[0] && newY === randomData[1]) {
        randomData = randomCell()
        score += 1
    } else {
        snakeC.shift()  // Remove tail if no food is eaten
    }

    snakeC.push([newX, newY])  // Add new head position
}

function randomCell() {
    return [
        Math.floor(Math.random() * (1000 - cell) / cell) * cell,
        Math.floor(Math.random() * (600 - cell) / cell) * cell
    ]
}

// Function to display "Game Over" on the canvas
function drawGameOver() {
    pen.clearRect(0, 0, 1000, 600)  // Clear the canvas
    pen.font = '60px sans-serif'
    pen.fillStyle = 'yellow'
    pen.fillText("Game Over", 400, 300)  // Display Game Over message
    pen.font = '30px sans-serif'
    pen.fillText(`Score: ${score}`, 450, 350)  // Display the final score
}

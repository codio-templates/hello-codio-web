let angle, val

function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)
    strokeWeight(5)
    colorMode(HSB)
    val = 0
    angle = 0
}

function draw() {
    background(255)
    stroke(val, 255, 255)
    translate(width / 2, height / 2)
    for (let i = -18; i < 18; i++) {
        angle += i* 0.3
        let x = cos(angle) * 150
        let y = -cos(angle) * 150
        line(x, i * 10 + 10, y, i* 10 + 10)
    }
    angle += 1 
}


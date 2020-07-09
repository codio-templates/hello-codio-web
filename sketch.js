let angle, val, slider

function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)
    strokeWeight(5)
    colorMode(HSB)
    val = 0
    angle = 0
    slider = createSlider(0, 255, 127)
    slider.style("display", "block")
    slider.style("margin", "auto")
}

function draw() {
    background(255)
    val = slider.value()
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
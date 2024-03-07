---
## Slider

You can create a `slider` element with the `createSlider` command. `createSlider` has four parameters; two of them are required, and two are optional.

![The parameters that are passed to the createSlider function are min, max, value and step. The first two parameters are required and the second two are optional](.guides/img/createSlider.png)

## Add a Slider

First create the variable `slider` to represent the slider.

```javascript
let angle, val, slider
```

Then, in the `setup` function, set the value of `slider` to `createSlider`. Since this slider will be used to control the color of the animated lines, the slider needs to go from 0 to 255. We want the actual slider to start in the middle, so set the third parameter to 127.

```javascript
function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)
    strokeWeight(5)
    colorMode(HSB)
    val = 0
    angle = 0
    slider = createSlider(0, 255, 127)
}
```

## Positioning the Slider

By default, the slider is all the way on the left of the page. Styling for a slider be done in JavaScript. After creating the slider, change the `display` to `block` and set the `margin` to `auto`.

```javascript
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
```

## Linking the Slider to the Animation

Refreshing the Preview panel will draw the slider to the page, but moving it does not affect the animation. The slider is going to control the color of the lines in the animation. In the `draw` function, create a blank line between setting the `background` color and setting the `stroke`. Set the value of the variable `val` to the value of the variable `slider`: `val = slider.value()`.

```javascript
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
```

Refresh the Preview panel. Moving the slider should now change the color of the animation.
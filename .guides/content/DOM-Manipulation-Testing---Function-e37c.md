### Our DOM Manipulation Function
For the sake of this guide, there is a function called `stringAdder` that manipulates the data object model (DOM). This function is given a jQuery object, a selector, and certain data that we want to put in the main `div`. 

### Function Breakdown
- `$`
In jQuery, the `$` sign is shorthand for the function `jQuery()`. `jQuery()` returns a collection of elements from the data object model (DOM) that match the passed arguments. It can also create these elements from a passed HTML string (which is what we do with Cheerio) 

- `selector`
`selector` gives the `jQuery` function a location to put the data using a selector expression.

- `str`
`str` is the data we want our stringAdder function to add to the DOM. 

- `.append()`
The `.append()` method is a jQuery method inserts data into the selected div.
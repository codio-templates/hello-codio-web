### Mocha 101
Mocha is one of the most popular JavaScript Unit Testing libraries. In our testing file, we have an `it()` nested in a `describe()`. These help provide clarity to the tests and an English-esque feel to the tests. 
In this case, we **describe** `stringAdder()`. **it** *'should add a paragraph element with the string "Hello, world", to the mydiv element'*. The person reading the unit tests knows exactly what they are testing.

### Test Setup
In this test file, we use Cheerio to load our HTML string into the variable `$`. We then specify what data we want injected into the DOM, and we state where we want to put it. 
Then we run our `stringAdder` function using the variables we just made as parameters, and we assign the result of our DOM manipulation to a variable.

### Test Execution
Next comes the fun part! We actually need to test if the DOM manipulation worked. This all happens on line 18. It is stated that we expect the text inside the paragraph element to equal "Hello, World". If this test passes, our DOM manipulation was successful. If it fails, our function did not complete its intended purpose.
Run this command in the terminal to execute the test: `mocha dom-manipulation-test.js`.
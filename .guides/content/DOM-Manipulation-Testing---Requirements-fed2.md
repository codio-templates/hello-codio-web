## Necessary Packages
The instructions below assume that the work is being done on a stack with Node installed. You can install Node by clicking `Tools` in the menu bar, then click on `Install Software`. Search for Node in the list of available software. You can also change the stack of your project. Go to `Project`, then `Stack`, and finally `Settings...`. You can select the Node stack. **Note**, changing the stack will cause a problem if you have installed any additional software.

- **NPM**
NPM stands for Node Package Manager. It enables us to install the rest of our necessary packages.
- **Mocha**
Mocha is our main unit testing library. It allows us to create tests for our DOM manipulation functions.
- **Chai**
Chai adds helpful features to Mocha that let us make more powerful assertions in our tests.
- **Cheerio**
Cheerio is important specifically for testing DOM manipulation. It allows us to create a virtual browser without needing to launch a headless instance of Chrome or Firefox. We construct and load our test webpage using Cheerio.

## Installation Instructions
- **NPM**
In the Codio Ubuntu boxes, NPM and NodeJS can both be installed with the following command: `sudo apt-get install npm`
- **Mocha**
Mocha can be installed with `npm`: `sudo npm install -g mocha`
- **Chai**
Chai can be installed with `npm` too: `npm install chai`
- **Cheerio**
Cheerio can also be installed with `npm`: `npm install cheerio`

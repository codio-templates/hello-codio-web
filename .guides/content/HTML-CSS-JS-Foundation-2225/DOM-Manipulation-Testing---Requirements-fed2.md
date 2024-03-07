---

This stack has this software already installed:

- **Selenium** for Test Automation
- **Chromium** to interact with Web Pages inside the box
- **X Server** to connect to the box and open Chromium

Additionally, the following `NPM` packages are installed *globally* to enable testing and not give students any code or hard requirements: 

- **mocha** for Unit Testing
- **selenium-webdriver** to connect Node with Chromium

These packages are installed globally so that learners don't need to worry about setting them in their project. If you decide to use them globally, consider the following:

To install them use the flag `-g`:

```
npm install -g <package_name> 
```

To use them in your tests, use the global folder as they are not available in the local project:

```
const package_name = require('/usr/lib/node_modules/package_name');
```
const { Builder, By, Key, until } = require('/usr/lib/node_modules/selenium-webdriver');
const chrome = require('/usr/lib/node_modules/selenium-webdriver/chrome');
const assert = require('assert');

const CODIO_PARTIAL_POINTS_V2_URL = process.env.CODIO_PARTIAL_POINTS_V2_URL;
let points = 0;
let total_tests = 0;
let feedback = "";

describe("HTML Grader", function () {
  let driver;
  this.timeout(0); // Prevent default timeout of 2 seconds.

  before(async () => {
    const options = new chrome.Options();
    // Start the Browser in headless mode
    options.addArguments('--headless=new');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    await driver.get('https://www.selenium.dev/selenium/web/inputs.html');
  });

  after(async () => {
    if (CODIO_PARTIAL_POINTS_V2_URL) {
      const percentage = Math.floor((points / total_tests) * 100);
      feedback += `<h2 style='color:rgb(50,20,200);'>${points} out of ${total_tests} passed!</h2>`;
      const res = await fetch(CODIO_PARTIAL_POINTS_V2_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ points: percentage, format: 'html', feedback }),
      });
    } else {
      console.log("Missing CODIO_PARTIAL_POINTS_V2_URL");
    }
    await driver.quit();
  });

  describe("#actions", () => {
    it('Check if element is displayed', async function () {
      total_tests += 1;
      // Resolves Promise and returns boolean value
      let result =  await driver.findElement(By.name("email_input")).isDisplayed();
      
      assert.equal(result,true);
      points += 1;
      feedback += `<p>Test ${total_tests} passed.</p>`;
    });
    
    it('Check if button is enabled', async function () {
      total_tests += 1;
      // Resolves Promise and returns boolean value
      let element =  await driver.findElement(By.name("button_input")).isEnabled();
    
      assert.equal(element, true);
      points += 1;
      feedback += `<p>Test ${total_tests} passed.</p>`;
    });
    
    it('Check if checkbox is selected', async function () {
      total_tests += 1;
      // Returns true if element ins checked else returns false
      let isSelected = await driver.findElement(By.name("checkbox_input")).isSelected();
    
      assert.equal(isSelected, true);
      points += 1;
      feedback += `<p>Test ${total_tests} passed.</p>`;
    });
    
    it('Should return the tagname', async function () {
      total_tests += 1;
      // Returns TagName of the element
      let value = await driver.findElement(By.name('email_input')).getTagName();
    
      assert.equal(value, "input");
      points += 1;
      feedback += `<p>Test ${total_tests} passed.</p>`;
    });
    
    it('Should be able to fetch element size and position ', async function () {
      total_tests += 1;
      // Returns height, width, x and y position of the element
      let object = await driver.findElement(By.name('range_input')).getRect();
      
      assert.ok(object.height!==null);
      assert.ok(object.width!==null);
      assert.ok(object.y!==null);
      assert.ok(object.x!==null);

      points += 1;
      feedback += `<p>Test ${total_tests} passed.</p>`;
      
    });
    
    it('Should be able to fetch attributes and properties ', async function () {
      total_tests += 1;
      // identify the email text box
      const emailElement = await driver.findElement(By.xpath('//input[@name="email_input"]'));
      
      //fetch the attribute "name" associated with the textbox
      const nameAttribute = await emailElement.getAttribute("name");
    
      assert.equal(nameAttribute, "email_input");
      points += 1;
      feedback += `<p>Test ${total_tests} passed.</p>`;
    });
  });
});

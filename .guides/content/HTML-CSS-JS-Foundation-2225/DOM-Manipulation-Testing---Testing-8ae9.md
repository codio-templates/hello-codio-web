----

To test an HTML page, the easiest way is to use Selenium already available functions. 

In the example on the left, we are performing 6 actions in a page: 

- Check if an element is displayed
- Check if a button is enabled
- Check if a checkbox is selected
- Search if a tagname exists
- Get size and position of an element
- Get attributes and properties of an element

Please notice some additional instructions/variables like `total_tests` to count how many tests we run, `points` to calculate how many tests are correct, and `feedback` to provide a custom feedback to Codio.

This example also uses our `CODIO_PARTIAL_POINTS_V2_URL` API to assign points and give feedback. 

|||info
## More Examples

Don't let yourself get intimidated by the syntax on the left, these are basic instructions you can easily get used to, just like you would if you were performing those actions on a page.

Go to Selenium's GitHub page for more examples. This example was adapted from [this page](https://github.com/SeleniumHQ/seleniumhq.github.io/blob/b0d6545cdd36acc1c56d23021afd5ff66eeba0f1/examples/javascript/test/elements/information.spec.js).

To learn more about partial points, go to [our docs](https://docs.codio.com/instructors/authoring/assessments/partial-points.html).
|||
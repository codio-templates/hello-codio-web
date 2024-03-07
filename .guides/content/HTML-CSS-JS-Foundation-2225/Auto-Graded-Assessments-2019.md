----------

## Auto-Graded Assessments
Here are some quick examples of the different types of auto-graded assessments available through Codio. For a more detailed set of examples, take a look at the [Demo Guides and Assessments](https://codio.com/home/starter-packs/cc68d38b-b0ea-4825-9814-46a3594c2b11) project. To add an assessment, from the library or one you created yourself, click the Assessments icon at the top.

![You can select an assessment by clicking on the Assessment icon in the top right corner. There are options for auto-graded assessments, manually graded and selecting assessments from the library](https://global.codio.com/content/assessments.png)

### Learning Insights
Auto-graded assessments are linked to Codio's [Learning Insights](https://www.codio.com/blog/codio-advanced-student-learning-insights) dashboard. The dashboard gives you and your students valuable feedback on performance.

### Assessment Library
Codio has an assessment library with hundreds of assessments (mostly Python and Java). You can search the assessments by entering a tag and its value. The tags are those topics in the gray boxes, and the value is what comes after. So if you wanted to see all of the Python assessments, you would use `Programming Language` as the tag and `Python` as the value. You can add additional parameters to make your search result more precise.

![A list of assessments available in the Codio assessments library](.guides/img/assessment-library.png)

### Multiple Choice
The default multiple-choice question only has two answers. You can add as many as you would like, and you can have multiple correct answers.

{Check It!|assessment}(multiple-choice-4217579451)


### Fill in the Blank
You can write whatever you like (sentences, code examples, etc.) for fill in the blank questions. Surround the "blanks" with `<<<` and `>>>`. You can tell Codio to show the students the possible answers. Each blank will have a drop-down menu with all of the choices. You can also use [regular expressions](https://docs.codio.com/instructors/authoring/assessments/fill-in-blanks.html#fill-in-blanks) to parse student answers for a more granular evaluation.

{Check It!|assessment}(fill-in-the-blanks-3213770126)


### Parson's Problems
For basic Parson's problems, type the correct code (in the correct order) in the text field above. If you stop here, the lines of code will be scrambled, and the student has to rearrange them. You can add incorrect code blocks (called distractors). Add these lines of code in the text field below. If you are using distractors, be sure to check the box that allows students to drag the correct code blocks into a new box. By default, indentation will be graded. If you do not want students to be penalized for indentation, be sure to check the box to disable indentation.

![The interface for setting up a Parson's problem assessment contains an area for entering the code in the correct order and an area to add distractor code. There are also check boxes to say whether you want the student to drag the code and whether you require indentation.](.guides/img/new_parsons_ui.png)

{Check It!|assessment}(parsons-puzzle-3227820982)


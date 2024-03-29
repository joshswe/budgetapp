## Budget App with JavaScript

The user can use this Budget Web Application ("app") to record the (1) income(s) and (2) expense(s) on a specific date. In addition, the app is able to calculate and return the budget balance (whether it is deficit or surplus), and show the overall expense percentage and the percentage of each individual expense.



## Languages/ Technologies used
- HTML
- CSS
- JavaScript
    - Software Design Principle - DRY: https://dzone.com/articles/software-design-principles-dry-and-kiss
    - Event reference: https://developer.mozilla.org/en-US/docs/Web/Events
    - Identify keycode for event listener: https://keycode.info/

## To-Do List
This project is broken down into three phases, where different features/functions will be built in each phase.
1. Phase 1:
- Get user input values
- Add the new item to the data structure (Note: the data won't be stored in a database but locally)
- Add the new item to the UI
- Calculate the budget
- Update the UI
2. Phase 2:
- Delete the item from the data structure
- Delete the item from the UI
- Re-calculate the budget
- Update the UI
3. Phase 3:
- Calculate percentages
- Update percentages in UI
- Display the current month and year
- Number formatting
- Improve input fields in terms of user experience


## Modules
The concept of Modules will be applied in this project. Please visit [here](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/) for more about Modules. We should have basic understanding of [Closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36) and [Immediately Invoked Function Expression (IIFE)](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174) before using Modules.

But why do we use modules?
1. Maintainability: As each module is self-contained, a well-designed module will lessen the dependencies on parts of the codebase as much as possible, so that it can grow and improve independently.
2. Namespacing: In JavaScript, variables outside the scope of a top-level function are global (meaning, everyone can access them). Because of this, it’s common to have “namespace pollution”, where completely unrelated code shares global variables. We can encapsulate private variables and methods in a closure scope by using Modules.
3. Reusability: A module can be reused over and over again.

The three modules that will be used are:
- UI Module
- Data Module
- Controller Module


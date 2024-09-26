# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.

- The user presses the 1 button.
- addOne handler is called which calls the dispatch function with addOne action as a parameter
- addOne is imported from actions which has an ADD_ONE type
- dispatch calls the reducer function which uses the ADD_ONE case to return state.total + 1
- the display shows the state.total value in App.js

...

- TotalDisplay shows the total plus 1.

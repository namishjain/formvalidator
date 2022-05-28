
# Form Validator

This is script which has a function named validateForm which will validate whether the form is valid or not

## How to Use

To use it, add this HTML code in your `.html file`

```bash
  <script src="https://namishjain.epizy.com/scripts/validateform.js">
  </script>
```
    



## How it Works

The process can be explained in the following steps :-

- The function `validateForm` takes two arguments (`formElements` and `errorFunction`)
- `formElements` is a mandatory argument which takes an array of all the input elements which have to be validated
- `errorFunction` is an optional argument which takes a function to show Error if the some fields are incomplete
- It then checks `formElements` is an array or not. If not, then it throws an error
- It runs a `for loop` and checks all the elements if the field is complete or not
- If any of the field is incomplete then an error will store the name of which field is incomplete and then the error is shown by an `alert`
- If `errorFunction` is defined, then that function will be called

## Features

- The Best Empty Form Validation Script
- Updated time to time
- No Complex Code
- Only a JS Function to be called


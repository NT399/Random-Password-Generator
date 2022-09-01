# Random-Password-Generator
A random password generator based on user specifications and preferences.

## Description

This website generates a random password based on the user's input in regards to character length, lowercase letters, uppercase letters, special characters and numbers. 

In creating this website the Javascript code was added to the starter code which:
- Variables were declared for the different types of preferences that users can input
- Windows confirm was used to provide a dialogue where users could enter information and windows alerts were used to validate inputs.
- Conditional if statements were used to prevent users from entering information not permitted (i.e. length of password below 8 characters or above 128 characters).
- The Concatenate function was used to add information to a pool of possible characters based on the users preference (if statements were used here).
- A for loop and math random function was used to randomly select from the pool of possible characters based on the length of the password stipulated by the user.
- The password is then displayed as a windows alert as well as in the password box of the website. 

Undertaking this project required drawing upon all the above concepts of Javascript and utilising extra research.


## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Usage

To view the website please follow this link: https://nt399.github.io/Random-Password-Generator/

To use the website, please follow the steps below:
1. Click 'Generate Password'.
2. You will be prompted to enter the character length of the password - please enter your desired length.
3. Click 'Ok' if you want to include lowercase letters.
4. Click 'Ok' if you want to include uppercase letters.
5. Click 'Ok' if you want to include special characters.
6. Click 'Ok' if you want to include numbers.
7. You will receive validation after each step.
8. Your password will be displayed at the end in a dialogue and also in the password box. 

![Screenshot of the website](https://github.com/NT399/Random-Password-Generator/blob/main/assets/Screenshot%20of%20Random%20Password%20Generator%20website.PNG)

## Credits

The following links were helpful for the completion of this project:
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- https://www.w3schools.com/js/js_loop_for.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
- https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- https://tutorial.eyehunts.com/js/javascript-array-length-0-zero-check-and-set-array-examples/

## License

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

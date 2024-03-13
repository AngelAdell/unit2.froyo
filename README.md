Psuedocode for Froyo project

Thoughts 
1. Create a li menu of flavors with buttons in the html with the word add
2. When the user adds the flavor it shows in the console
3. let the array continue as they add flavors
4. the start over button clears the console.

1. Create HTML structure:
   - Create a list (ul) element to display flavors.
   - Inside the list, create list items (li) for each flavor with an add button.

2. Event listener for add button click:
   - When an add button is clicked:
     - Retrieve the flavor text from the corresponding list item.
     - Log the flavor text to the console.
     - Add the flavor text to an array of flavors.
     - Update the display to show the array of flavors.

3. Initialize array to store flavors.

4. Event listener for start over button click:
   - When the start over button is clicked:
     - Clear the console.
     - Clear the array of flavors.
     - Update the display to remove all flavors.

Pseudocode:

HTML:
- <ul id="flavorsList">
  - <li>Vanilla<button class="addButton">Add</button></li>
  - <li>Chocolate<button class="addButton">Add</button></li>
  - ...
- </ul>
- <button id="startOver">Start Over</button>

JS:
- Create array: flavors = []

- For each addButton:
  - Add click event listener:
    - Get flavor text from the corresponding list item.
    - Log flavor text to the console.
    - Add flavor text to the flavors array.
    - Update display to show the flavors array.

    - Decided to add a for loop that iterattes the class name of buttons to give and assign them to the array.

- Get startOverButton element.
- Add click event listener:
  - Clear console.
  - Clear flavors array.
  - Update display to remove all flavors.

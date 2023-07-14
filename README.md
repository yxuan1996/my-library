# My-Library

Simple CRUD app for adding and viewing books

Data is stored in LocalStorage / Firebase

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/yxuan1996/my-library)

To preview this webpage, run a server
```
python -m http.server 8000
```

## Development Notes

#### Data Model
We create a factory function for the Book object. 

New books will be added to a list called `myLibrary`

#### Grid of Cards
We want to populate the main page with cards of books that we have read. We will use grid and tailwind / daisyUI cards to do that. 

We have a JSON list of books, and we will use `.map` to iterate through and list and apply the data to template literals. 

Template literals allow us to pass data into HTML, instead of creating elements individually.

https://stackoverflow.com/questions/67413357/javascript-loop-to-create-list-of-cards

#### If Else Conditionals in Template Literals
Using the following Syntax, we can selectively render components based on conditions. 

```
${ condition ? true action : false action }
```

This allows us to alternate between button colours depending on read status. 

https://gist.github.com/wiledal/1888a24fafc11cafba73a8c12ac9d8a0

#### Add Book Form
When the `Add Book` button is pressed, we want to show a modal that allows the user to input data about a new book. 

#### Book ID data onclick
When the read status and remove book buttons are pressed, we need to know exactly which book to edit / remove. 

First, we specify the data-attribute of each button as the book_id. 
When the button is clicked, we retrieve the data attribute using JS. 

https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

#### Remove object from JSON list using key

https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property

#### Modify object property in list of objects

This is useful for us to toggle the 'Read' state of a book

https://stackoverflow.com/questions/16691833/modify-object-property-in-an-array-of-objects

#### Storage
Use Firebase  or LocalStorage as a database (Future Todo)
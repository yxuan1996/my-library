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

#### Add Book Form
When the `Add Book` button is pressed, we want to show a modal that allows the user to input data about a new book. 

#### Firebase
Use Firebase as a database
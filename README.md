# My-Library

Simple CRUD app for adding and viewing books

Data is stored in LocalStorage / Firebase

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/yxuan1996/my-library)

To preview this webpage, run a server
```
python -m http.server 8000
```

## Development Notes

#### Grid of Cards
We want to populate the main page with cards of books that we have read. We will use grid and bootstrap / daisyUI cards to do that. 

We have a JSON list of books, and we will use `.map` to iterate through and list and apply the data to template literals. 

Template literals allow us to pass data into HTML, instead of creating elements individually.

https://stackoverflow.com/questions/67413357/javascript-loop-to-create-list-of-cards

https://stackoverflow.com/questions/63074270/create-a-loop-of-bootstrap-4-card-with-given-array 

#### Add Book Form
When the `Add Book` button is pressed, we want to show a modal that allows the user to input data about a new book. 

#### Firebase
Use Firebase as a database
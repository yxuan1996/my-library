let myLibrary = [];

const Book = (id, title, author, status) => {
  return { id, title, author, status };
};

function addBookToLibrary(newid, newtitle, newauthor, newstatus) {
  // use unix timestamp as ID
  let newBook = Book(newid, newtitle, newauthor, newstatus);
  myLibrary.push(newBook)

  console.log(myLibrary);

}

function removeBookFromLibrary(book_id) {
  console.log(book_id);
  console.log(book_id.dataset.attribute)
}

function toggleBookStatus(book_id) {
  console.log(book_id);
}

function openModalForm() {
  const modal = document.getElementById('add_book_modal');
  modal.showModal();

}

function closeModalForm() {
  const modal = document.getElementById('add_book_modal');
  modal.close();
}


function setData() {

}

function render() {
  const bookgrid = document.getElementById('bookgrid');
  // const valuesCards = [{
  //     image: '../img/image1.png',
  //     title: 'title 1',
  //     content: 'super content 1',
  //   },
  //   {
  //     image: '../img/image2.png',
  //     title: 'title 2',
  //     content: 'super content 2'
  //   },
  //   {
  //     image: '../img/image-3.png',
  //     title: 'title3',
  //     content: 'blablablablbalbalbabla blablaba'
  //   },
  // ]

  // the map function returns a list of objects separated by commas. To remove the commas we use .join('')
  function returnCards(valuesCards) {
    return `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-3 mx-3">` + valuesCards.map(valuesCard =>

    `<div class="card bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">${valuesCard.title}</h2>
        <p>${valuesCard.author}</p>
        <div class="card-actions justify-end join join-vertical">` 
        // if else statement. Render Green and Red buttons depending on Read Status
        + `
        ${(valuesCard.status == 'Read') ? `
        <button class="btn btn-accent join-item" data-attribute="${valuesCard.id}" onclick="toggleBookStatus(this)">${valuesCard.status}</button>
        ` : `
        <button class="btn btn-error join-item" data-attribute="${valuesCard.id}" onclick="toggleBookStatus(this)">${valuesCard.status}</button>
        `}
        ` + `
          <button class="btn btn-warning join-item" data-attribute="${valuesCard.id}" onclick="removeBookFromLibrary(this)">Remove</button>
        </div>
      </div>
    </div>
    `).join('')
    + `</div>`;
  }

  bookgrid.innerHTML = returnCards(myLibrary);
}

// Initialize Page
render()


document.querySelector("#add_book_form").addEventListener("submit", function(e){

      e.preventDefault();    //stop form from submitting

      let formdata = e.target;
      const newtitle = formdata.elements['newtitle'].value;
      const newauthor = formdata.elements['newauthor'].value;
      const checkstatus = formdata.elements['checkstatus'].checked;
      let newstatus;

      console.log(formdata.elements['checkstatus'].checked);

      if (checkstatus == true) {
        newstatus = 'Read';
      } else {
        newstatus = 'Not Read'
      }

      // Use UNIX timestamp as ID
      addBookToLibrary(Date.now(), newtitle, newauthor, newstatus)

      closeModalForm()

      render()

});
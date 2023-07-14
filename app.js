let myLibrary = [];

const Book = (id, title, author, status) => {
  return { id, title, author, status };
};

function addBookToLibrary() {
  // use unix timestamp as ID
  let newBook = Book(Date.now(), newtitle, newsauthor, newstatus);
  myLibrary.push(newBook)

  console.log(myLibrary);

}

function removeBookFromLibrary() {

}

function toggleBookStatus(editbook) {

}

function openModalForm() {

}

function closeModalForm() {

}


function setData() {

}

function render() {
  const bookgrid = document.getElementById('bookgrid');
  const valuesCards = [{
      image: '../img/image1.png',
      title: 'title 1',
      content: 'super content 1',
    },
    {
      image: '../img/image2.png',
      title: 'title 2',
      content: 'super content 2'
    },
    {
      image: '../img/image-3.png',
      title: 'title3',
      content: 'blablablablbalbalbabla blablaba'
    },
  ]

  // the map function returns a list of objects separated by commas. To remove the commas we use .join('')
  function returnCards(valuesCards) {
    return `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-3 mx-3">` + valuesCards.map(valuesCard =>

    `<div class="card bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">${valuesCard.title}</h2>
        <p>${valuesCard.author}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">${valuesCard.status}</button>
          <button class="btn btn-ghost">Remove</button>
        </div>
      </div>
    </div>
    `).join('')
    + `</div>`;
  }

  bookgrid.innerHTML = returnCards(valuesCards);
}

// Initialize Page
render()
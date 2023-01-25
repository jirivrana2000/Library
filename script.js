let myLibrary = [];
let title
let author
let checkboxprint
let read
let i = 0

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    print(title, author, pages, read)
}

function print(title, author, pages, read) {

      const container = document.querySelector('#container');

      if (read === "checked") {
        checkboxprint = `<input class="checkbox" type="checkbox" id="read" name="ticket_type" value="read" checked>`
      } else {
        checkboxprint = `<input class="checkbox" type="checkbox" id="read" name="ticket_type" value="read">`
      }

      let test = `<div id="bookContainer">
                    <p>Name: ${title} </p>
                    <p>Author: ${author}</p>
                    <p>Pages: ${pages}</p>
                    <p>Read: ${checkboxprint}</p>
                    <button class="closeButton" id="closeButton${i}">X</button>
                 </div>`

      container.insertAdjacentHTML('beforeend', test)

      document.querySelector('#closeButton' + i)
      .addEventListener('click', function(){
        let confirmQuestion = confirm("Do you realy want to remove this book?")
        let removeBookContainer = this.parentNode
        if(confirmQuestion)
          container.removeChild(removeBookContainer)
      })
      i++
}

function addBookToLibrary(title, author, pages, read) {
    return call = new Book(title, author, pages, read);
}

//here is problem with read/unread on first book show always unchacked. Every other works well
function adNewBook() {
    let bookName = document.getElementById('bookName').value;
    let authorName = document.getElementById('authorName').value;
    let pages = document.getElementById('pages').value;
    let checkbox = document.getElementById("checkbox");
    checkbox.addEventListener( "change", () => {
      if ( checkbox.checked ) {
        read = "checked"
      } else {
        read = "unchecked"
      }
    });
    title = bookName
    author = authorName
    pages = pages

    console.log(read)
    addBookToLibrary(title, author, pages, read)
  }
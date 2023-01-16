export default class StoreBooks {
  static getBooks() {
    let books;

    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'));
    } else {
      books = [];
    }

    return books;
  }

  static addBook(book) {
    const books = StoreBooks.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(element) {
    const books = StoreBooks.getBooks();
    const title = element.parentElement.firstElementChild.innerHTML;
    const index = books.findIndex((book) => book.title === title);
    books.splice(index, 1);

    localStorage.setItem('books', JSON.stringify(books));
  }
}

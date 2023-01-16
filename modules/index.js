import Book from './book.js';
import StoreBooks from './storage.js';
import UserInterface, { booksContainer } from './ui.js';
import { printDate } from './time.js';

const navLinks = document.querySelectorAll('.nav__link');
const addBookSection = document.querySelector('#add-book');
const contactSection = document.querySelector('#contact');
const bookListSection = document.querySelector('#books-list');
const form = document.querySelector('.form__content');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const authorText = document.querySelector('.book-author').value;
  const titleText = document.querySelector('.book-title').value;

  const book = new Book(authorText, titleText);

  UserInterface.addBook(book);
  StoreBooks.addBook(book);
  UserInterface.bookAddSuccess();
});

booksContainer.addEventListener('click', (e) => {
  UserInterface.removeBook(e.target);
  StoreBooks.removeBook(e.target);
});

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    if (index === 0) {
      if (bookListSection.classList.contains('close')) {
        bookListSection.classList.remove('close');
      }
      addBookSection.classList.add('close');
      contactSection.classList.add('close');
    } else if (index === 1) {
      if (addBookSection.classList.contains('close')) {
        addBookSection.classList.remove('close');
      }
      bookListSection.classList.add('close');
      contactSection.classList.add('close');
    } else if (index === 2) {
      if (contactSection.classList.contains('close')) {
        contactSection.classList.remove('close');
      }
      bookListSection.classList.add('close');
      addBookSection.classList.add('close');
    }
  });
});

window.addEventListener('load', () => {
  UserInterface.loadBooks();
  printDate();
});

document.addEventListener('DOMContentLoaded', Book.displayBooks);

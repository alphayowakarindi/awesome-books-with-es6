/* eslint-disable max-classes-per-file */
// Modules
import Book from "./modules/book.js";
import Store from "./modules/store.js";
import UI from "./modules/ui.js";
import { DateTime } from "./modules/luxon.js";

// Selectors
const addBtn = document.querySelector(".add-btn");
const booksList = document.querySelector(".books-list");
const allBooksSection = document.querySelector("#all-books-section");
const addBookSection = document.querySelector("#books-section");
const contactSection = document.querySelector("#contact-section");
const listNavLink = document.querySelector(".list-nav-link");
const addNavLink = document.querySelector(".add-nav-link");
const contactNavLink = document.querySelector(".contact-nav-link");
const currentDateTime = document.querySelector(".current-date-time");

// Adding Book
addBtn.addEventListener("click", () => {
  const titleInput = document.querySelector("#title-input").value;
  const authorInput = document.querySelector("#author-input").value;
  if (titleInput && authorInput) {
    const book = new Book(titleInput, authorInput);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearFields();
  }
});
// Removing Book
booksList.addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  console.log(e.target.previousElementSibling.children[2]);
  Store.removeBook(e.target.previousElementSibling.children[2].textContent);
});

// Event listener
document.addEventListener("DOMContentLoaded", UI.displayBooks);
listNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  allBooksSection.classList.add("show-section");
  allBooksSection.classList.remove("hide-section");
  addBookSection.classList.add("hide-section");
  contactSection.classList.add("hide-section");
  listNavLink.children[0].classList.add("active");
  contactNavLink.children[0].classList.remove("active");
  addNavLink.children[0].classList.remove("active");
});
addNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  addBookSection.classList.add("show-section");
  addBookSection.classList.remove("hide-section");
  contactSection.classList.add("hide-section");
  allBooksSection.classList.add("hide-section");
  addNavLink.children[0].classList.add("active");
  listNavLink.children[0].classList.remove("active");
  contactNavLink.children[0].classList.remove("active");
});
contactNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.classList.add("show-flex-section");
  contactSection.classList.remove("hide-section");
  addBookSection.classList.add("hide-section");
  allBooksSection.classList.add("hide-section");
  contactNavLink.children[0].classList.add("active");
  listNavLink.children[0].classList.remove("active");
  addNavLink.children[0].classList.remove("active");
});

// Set current date and time dynmaically
const dt = DateTime.now();
currentDateTime.innerHTML = `${dt.toLocaleString({
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
})}`;

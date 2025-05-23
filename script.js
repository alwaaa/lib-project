

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// function addBookToLibrary(title, author, year) {
//     let book = new Book(title, author, year);
//     book.id = crypto.randomUUID();
//     myLibrary.push(book);
//     return book;
// }

// function displayBooks(arr) {
//     let result = "";
//     for (let x of arr) {
//         result += `Название: ${x.title}, Автор: ${x.author}, Год выхода: ${x.year}\n`;
//     }
//     return result || `О, как. Библиотека пока пустая`;
// }


// addBookToLibrary("Count of the Monte-kristo", "Alexander Duma", 1890);
// addBookToLibrary("Harry Potter and the Philosopher Stone", "J.K. Rowling", 1997);
// addBookToLibrary("Ham on Rye", "Charles Bukowski", 1982);

// const displayLibrary = displayBooks(myLibrary);


const addBook = document.querySelector(".add");
const bookCard = document.querySelector(".add-book-card");
const submit = document.querySelector(".submit-button");
const clear = document.querySelector(".clear");

let bookName = "";
let bookAuthor = "";
let bookYear = null;

const bookNameInput = document.querySelector(".bookName");
const authorNameInput = document.querySelector(".authorName");
const releaseYearInput = document.querySelector(".releaseYear");
const bookCardsContainer = document.querySelector(".bookCardsContainer");

let myLibrary = []; 

// Кнопка добавления книги
addBook.addEventListener("click", () => {
    bookCard.classList.add("active");
})
// Кнопка очищения библиотеки и карточек внутри контейнера
clear.addEventListener("click", () => {
    myLibrary = [];
    bookCardsContainer.innerHTML = " ";
})
// Логика нажатия кнопки сабмит
submit.addEventListener("click", () => {
    bookName = bookNameInput.value;
    bookAuthor = authorNameInput.value;
    bookYear = releaseYearInput.value;

    function Book(bookName, bookAuthor, bookYear) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookYear = bookYear;
}
    function addBookToLibrary(bookName, bookAuthor, bookYear) {
        let book = new Book(bookName, bookAuthor, bookYear);
        book.id = crypto.randomUUID();
        myLibrary.push(book);
        return book;    
}
// Функция, создающая карточку внутри контейнера со всеми карточками книг
    function addBookCard() {
        let book = document.createElement("div");
        book.classList.add("bookCard");
        bookCardsContainer.appendChild(book);
        book.textContent = `${bookName}, ${bookAuthor}, ${bookYear}`;
    }
// Функции, вызывающиеся после нажатия кнопки
    addBookCard();
    addBookToLibrary(bookName, bookAuthor, bookYear);
    console.log(myLibrary);
})













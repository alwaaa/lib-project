const myLibrary = [];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(title, author, year) {
    let book = new Book(title, author, year);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    return book;
}

function displayBooks(arr) {
    let result = "";
    for (let x of arr) {
        result += `Название: ${x.title}, Автор: ${x.author}, Год выхода: ${x.year}\n`;
    }
    return result || `О, как. Библиотека пока пустая`;
}


addBookToLibrary("Count of the Monte-kristo", "Alexander Duma", 1890);
addBookToLibrary("Harry Potter and the Philosopher Stone", "J.K. Rowling", 1997);
addBookToLibrary("Ham on Rye", "Charles Bukowski", 1982);

const displayLibrary = displayBooks(myLibrary);

// console.log(displayLibrary);








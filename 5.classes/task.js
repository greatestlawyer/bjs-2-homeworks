//Задача 1

class PrintEditionItem{
  constructor(
    name,
    releaseDate,
    pagesCount,
    state,
    type
  ) {
   this.name = name;
   this.releaseDate = releaseDate;
   this.pagesCount = pagesCount;
   this.state = 100;
   this.type = null;
  }
  
  fix(){
     this.state = this.state * 1.5;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
  
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem{
  constructor(name,
    releaseDate,
    pagesCount,
    state,
    type) {
    super(name,
    releaseDate,
    pagesCount,
    state,
    type);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem{
  constructor(
    author, 
    name,
    releaseDate,
    pagesCount,
    state,
    type
    ) {
  super( 
    name,
    releaseDate,
    pagesCount,
    state,
    type
    );
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book{
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type
  ) {
  super(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type
  );
    this.author = author;
    this.type = 'novel';
  }
}

class FantasticBook extends Book{
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type
  ) {
  super(
    author,    
    name,
    releaseDate,
    pagesCount,
    state,
    type
  );
    this.author = author;
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book{
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type
  ) {
  super(
    author, 
    name,
    releaseDate,
    pagesCount,
    state,
    type
  );
    this.author = author;
    this.type = 'detective';
  }
}


//Задача 2
class Library{
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if (book.state > 30) {
    this.books.push(book);
    } 
  }

  findBookBy(type, value) {
    let findBook = this.books.find(book => book[type] === value);
    if(findBook) {
      return findBook;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let giveBook = this.books.findIndex(book => book.name === bookName);
    if(giveBook === -1) {
      return null;
    } else {
      return this.books.splice([giveBook], 1)[0];
    }
  }
}
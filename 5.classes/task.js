class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(state) {
	    if (state < 0) {
		    this._state = 0;
   	    } else if (state > 100) {
	   	    this._state = 100;
	    } else {
		    this._state = state;
	    }
	}

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
}

class Book extends PrintEditionItem {

	constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
	  this.author = author;
      this.type = "book";
    }
}

class NovelBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
	  this.type = 'novel';
	}
}

class DetectiveBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
	  this.type = 'detective';
	}
}

class FantasticBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
	  this.type = 'fantastic';
	}
}

class Library {

	constructor(name) {
        this.name = name;
        this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
    let counter = 0;
		for (let i = 0; i < this.books.length; ++i) {
			if (this.books[i][type] === value) {
				return this.books[i];
			} else {
				counter = counter + 1;
			}
		}
        if (counter = this.books.length) {
            return null;
	    }
	}
	
	giveBookByName(name) {
		let counter = 0;
		for (let i = 0; i < this.books.length; ++i) {
            if (this.books[i]['name'] === name) {
            	let needed_book = this.books[i];
            	this.books.splice(i, 1);
                return needed_book;
            } else {
            	counter = counter + 1;
            }
		}
		if (counter = this.books.length) {
            return null;
	    }
	}    
}
class Book{
    constructor(_title, _genre, _auther, _read) {
        this.title = _title;            // string
        this.genre = _genre;            // string
        this.auther = _auther;          // string
        this.read = _read;              // boolean
    }
}

class BookList{
    constructor(arr) {
        this.read = arr.filter(book => book.read).length;
        this.notRead = arr.filter(book => !book.read).length;
        this.nextBook = next(arr);
        this.currentBook = on(arr)
        this.lastBook = last(arr)
        this.allBook = arr;
    }
    addBook(title, genre, auther, read){
        this.allBook.push(new Book(title, genre, auther, read));
    }
    finishCurrentBook(){
        // list
        this.read +=1;
        this.notRead -=1;
        this.lastBook = this.currentBook;
        
        // book change 
        this.lastBook.read = true;
        this.lastBook.readDate = Date();
        
        // list change
        this.currentBook = this.nextBook;
        for (let book of this.allBook) {
           if (!book.read){
               this.nextBook = book;
           }
        }
    }
}


let books =[];

let myBook1 = new Book('my work' ,'workhard', 'yakov', true)
books.push(myBook1)

let myBook2 = new Book('my dogs' ,'animal', 'cohen', true)
books.push(myBook2)

let myBook3 = new Book('ya' ,'animal', 'yakov', false)
books.push(myBook3)

console.log(books)

let myList = new BookList(books)
myList.finishCurrentBook()
console.log(myList)



function next(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].read) {
            return arr[index];
        }
    }
    return arr[0];
}
function on(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].read) {
            return arr[index+1];
        }
    }
    return arr[0];
}
function last(arr){
    for (let index = 0; index < arr.length; index++) {
        if(!arr[index].read) {
            return arr[index];
        }
    }
    return arr[0];
}

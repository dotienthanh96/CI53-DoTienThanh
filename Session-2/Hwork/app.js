
class Book {
    id;
    name;
    price;
    publishedDate;
    update(data) {
        for(let key in data) {
            if(this[key] != undefined && key !="id") {
                this[key] = data[key]
            }
        }
    };
    constructor(name,price,publishedDate) {
        this.name = name;
        this.price = price;
        this.publishedDate = publishedDate;
        this.id = uuid.v4();
        console.log(this)
    }
    
}

class ComicBook extends Book {
    funny ; 
    pageNumber;
    constructor(name,price,publishedDate,funny,pageNumber) {
        super(name,price,publishedDate);
        this.funny = funny;
        this.pageNumber = pageNumber;
    }
}

class TextBook extends Book {
    subject ; 
    grade;
    constructor(name,price,publishedDate,subject,grade) {
        super(name,price,publishedDate) ;
        this.subject = subject;
        this.grade  = grade ; 
    }
}

class ScienceBook extends Book {
    major ; 
    constructor(name,price,publishedDate,major) {
        super(name,price,publishedDate);
        this.major = major ;
    }
}

class BookShelf {
    name ; 
    owner ;
    dateModified ;
    books;
    addBook(book) {
        if(book instanceof Book) {
            this.books.push(book);
        }
    };
    updateBook(id,data) {
        // for(let book of this.books) {
        //     if(book.id===id) { book.update(data)
        //         break;
        //     }
        // }
        let book = this.books.find(function(item) {
            return item.id === id ;
        })
        if(book != null) book.update(data);
    }; 
    deleteBook(id) {
        let bookIndex = this.books.findIndex(item => item.id === id );
        if(bookIndex > -1) this.books.splice(bookIndex,1);
    } ; 
    showBook() {
        console.log(this.books);
    };
    findBook(name) {
        return this.books.filter(item => item.name === name );
    };
    constructor(name,owner,dateModified) {
        this.name = name ;
        this.owner = owner;
        this.dateModified = dateModified ;
        this.book = [] ;
        console.log(this)
    }
}

let bookCase = new BookShelf("Truyện tranh","Thành","26.11.2020")

let book1 = new Book(01,"One Piece",20000,"20/11/1999")
let book2 = new ComicBook(02,"Quà Tặng Cuộc Sống",50000,"31/12/2009",5,150)
let book3 = new TextBook(03,"Toán Nâng Cao 10",56000,"20/11/2010","Toán",10)
let book4 = new ScienceBook(04,"Làm giàu không khó",100000,"20/12/1999","Kinh doanh")

// trả lời câu hỏi : Có thể truyền thể hiện  ComicBook, TextBook, ScienceBook vào addBook vì  ComicBook, TextBook, ScienceBook đều kế thừa từ class Book.

// bài 1 : 
// module là tập hợp những file được tách riêng ra với những chức năng cụ thể.
// import là nạp vào 
// export là xuất ra import
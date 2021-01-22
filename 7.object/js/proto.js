function Foo() {
    this.fx = 1;
};
let f1 = new Foo();
console.log(f1)
console.dir(Foo)


function Book(title,author,year){
    this.title = title;
    this.author = author
    this.year = year
}

Book.prototype.show = function(){
    return this.year
}
Book.prototype.showAge =function(){
    console.log(this.year)
    const years = new Date().getFullYear() - this.year
    return years
}

const book1 = new Book("cyclone","joker",1998)
console.log(book1.show())

const book2 = new Book("kamian","rider",2012)
console.log(book2.showAge())
/*
app de libros.
Los libros tienen que ser objetos con nombre ,autor y año release.
datos rrandom
3 libros already creados
fn constructora de libros.

html: 2 secciones
    1) grid con unas textarea que permitan introducir los datos del libro nuevo a agregar
    2) grid con la librearia myLibrary.

fn agregadora de libros a la biblioteca que, con un boton html,
3 libros already creados.


card:

*/

/*Go back to your “Library” example and refactor it to use class instead of plain constructors. Don’t forget to use the git workflow you learned in this foundations lesson to work on a new feature. You should get used to working like this!*/


class Book {

    constructor(name, author, releaseYear){
        this.name = name;
        this.author = author;
        this.releaseYear = releaseYear
    }    
  
}


const newBookForm = document.querySelector('.new-books-form');

//tomar los datos del formulario pa nuevo book
newBookForm.addEventListener( 'submit', (e) =>{

    e.preventDefault();

    let bookName = document.getElementById('new-book-title').value;
    let bookAuthor = document.getElementById('new-book-author').value;
    let bookYear = document.getElementById('new-book-year').value;  


    let newBook = new Book(bookName,bookAuthor,bookYear);

    myLibrary.push(newBook);

    cardCreator(newBook);

    addBooksToCards();



})

//boton en cada card que borre el libro creado
function deleteButtonCreator(){

    let deleteBtn = document.createElement('button');
    
    deleteBtn.classList.add('delete-book-button');

    deleteBtn.addEventListener('onclick', (e) =>{
        



    })


    return deleteBtn
}


function cardCreator(bookToAppend){

    let card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML += bookToAppend.name;
    card.innerHTML += '<br/>';

    card.innerHTML += bookToAppend.author;
    card.innerHTML += '<br/>';

    card.innerHTML += bookToAppend.releaseYear;
    card.innerHTML += '<br/>';

    board.appendChild(card);
    
}


function loopLibrary(){    

    for (let book in myLibrary){
        //que el 
        board.appendChild(cardCreator());


    }
}


let myLibrary = [];

const book1 = new Book('harry potter 7', 'kjrowlin', 1942);
const book2 = new Book('el padrino', 'ernesto', 2020);
const book3 = new Book('la disolucion', 'elmomo', 4444);

let board = document.querySelector('.card-container');
let cards = document.querySelectorAll('.card');

myLibrary.push(book1,book2,book3);

//para los ya existentes, quizas no haga falta volver a usarla, pues los new van en la fn del btn.listener
function addBooksToCards(books){

    for (let i=0; i<= cards.length; i++){

        if(!cards[i].innerHTML){

            cards[i].innerHTML += (myLibrary[i].name + ' ');
            cards[i].innerHTML += '<br/>';
        
            cards[i].innerHTML += (myLibrary[i].author + ' ');
            cards[i].innerHTML += '<br/>';
        
            cards[i].innerHTML += (myLibrary[i].releaseYear + ' ');

        }

       
    
    }
}

addBooksToCards();






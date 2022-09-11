import React, { Component } from "react";
import Book from "./book";
import Button from 'react-bootstrap/Button';
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  all_books = () => {
    fetch("http://127.0.0.1:8000/library/books/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => this.setState({ books: data }))
      .catch((error) => console.log(error));
  };

  render() {

    const check = this.state.books.length==0?false:true
    return (
      <div className="books">
        <h3>(please refresh/load Books list for viewing current books)</h3>
              
              {check?(
           
                this.state.books.map((book) => (
                    <Book key={book.id} book={book}/>
                  ))
            ):(<h3>No books in the table(there is a Form below to insert)</h3>)}


        

        <button variant="Dark" onClick={() => this.all_books()} style={{color:'red',font_size: '24px',}}> click to refresh/load Books</button>
      </div>
    );
  }
}

export default Books;

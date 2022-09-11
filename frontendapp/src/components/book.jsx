import React, { Component } from "react";

// //////////////////////////////////////DYNAMIC INPUT EDITOR FOR BOOKS ///////////////////////////////////


// class Book extends Component {
//   constructor(props) {
//     super(props);
//    this.state=this.props.book
//   }

//   changeUser = (event) => {
//     const book = this.state;
//     book[event.target.name]=event.target.value;
//     this.setState(book
//     );
//     console.log(this.state)
//   };

// edit_now = (id)=>{
//     fetch(`http://127.0.0.1:8000/library/books/${this.state.id}/`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(this.state),
//     })
//       .then((data) => data.json())
//       .then((data)=>console.log(data))
//       .catch((error) => console.log(error));
// console.log(this.state)

// }
//   render() {
    
//     const is_filter=(item)=> item!="book_created"?1:0
//     return (
//       <div className="book" key={this.state.id}>
//         <h1>splitter{}</h1>
//         {Object.keys(this.state).filter(is_filter).map((key)=>(
//             <label key={key}>{key} <br/>{this.state[key]}<br/><input type="text" name={key} value={this.state[key]} onChange={(key)=>this.changeUser(key)}/><br/></label>
//         ))
//         }

// <button type="submit" onClick={() => this.edit_now(this.state.id)}>
//           Edit now
//         </button>
       
       
        

//       </div>
//     );
//   }
// }





class Book extends Component {
    constructor(props) {
      super(props);
      
     this.state={
        book:{         title: this.props.book.title,
         description: this.props.book.description,
         price: this.props.book.price,
         book_created: this.props.book.book_created,
         author: this.props.book.author,
         id:this.props.book.id
     },
     msg:''
    }
    console.log(this.state)
}
    changeTitle = (event) => {
        const book = this.state.book;
        console.log(book)
    book[event.target.name]=event.target.value;
    this.setState({book:book,msg:''}
    );
      console.log(this.state.book)
    };
    changePrice = (event) => {
        const book = this.state.book;
        console.log(book)
    book[event.target.name]=event.target.value;
    this.setState({book:book,msg:''}
    );
      console.log(this.state.book)
    };
    changeAuthor = (event) => {
        const book = this.state.book;
        console.log(book)
    book[event.target.name]=event.target.value;
    this.setState({book:book,msg:''}
    );
      console.log(this.state.book)
    };
    changeDes = (event) => {
        const book = this.state.book;
        console.log(book)
    book['description']=event.target.value;
    this.setState({book:book,msg:''}
    );
      console.log(this.state)
    };
  
  edit_now = (id)=>{
      fetch(`http://127.0.0.1:8000/library/books/${this.state.book.id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state.book),
      })
        .then((data) => data.json())
        .then((data)=>this.setState({...this.state,msg:data}))
        .catch((error) => console.log(error));
  console.log(this.state)
  
  }
  delete_now = (id)=>{
    fetch(`http://127.0.0.1:8000/library/books/${this.state.book.id}/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.book),
    })
      .then((data) => data.json())
      .then((data)=>this.setState({...this.state,msg:data}))
      .catch((error) => console.log(error));
console.log(this.state)

}
    render() {
      
        const is_er = Object.keys(this.state.msg)[0]==='id'?true:false
        
        
      return (
        <div className="book" style={{padding:'5vh',border:'thin'}} >
          <h1>Book-{this.state.book.id}</h1>
          <label > <br/>Book Title<br/><input type="text" required name='title' value={this.state.book.title} onChange={(e)=>this.changeTitle(e)}/><br/></label>
          <label > <br/>Book Description<br/><textarea value={this.state.book.description} onChange={(e)=>this.changeDes(e)}/><br/></label>
          <label > <br/>Book <br/><input type="number" step='.1' name='price' min='5' value={this.state.book.price} onChange={(e)=>this.changePrice(e)}/><br/></label>
          <label > <br/>Book author<br/><input type="text" required name='author' value={this.state.book.author} onChange={(e)=>this.changeAuthor(e)}/><br/></label>
          {is_er?(<label>Success</label>):(<label style={{color:'red',}}> <br/>error msg:-{Object.keys(this.state.msg)[0]}{this.state.msg[Object.keys(this.state.msg)[0]]}</label>)}

     

          <br/>
  
  <button type="submit" onClick={() => this.edit_now(this.state.id)}>
            Edit now
          </button>&nbsp;&nbsp;
          <button type="submit" onClick={() => this.delete_now(this.state.id)}>
            Delete 
          </button>
         
         
          
  
        </div>
      );
    }
  }




export default Book;

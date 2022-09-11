import React, { Component } from "react";


class Insert extends Component{



    constructor(props) {
        super(props);
        
       this.state={
          book:{         title: '',
           description: '',
           price: '',
           book_created: '',
           author: ''
       },
       msg:''
      }
      console.log(this.state)
  }

      insertTitle = (event) => {
          const book = this.state.book;
          console.log(book)
      book[event.target.name]=event.target.value;
      this.setState({book:book,msg:''}
      );
        console.log(this.state.book)
      };
      insertPrice = (event) => {
          const book = this.state.book;
          console.log(book)
      book[event.target.name]=event.target.value;
      this.setState({book:book,msg:''}
      );
        console.log(this.state.book)
      };
      insertAuthor = (event) => {
          const book = this.state.book;
          console.log(book)
      book[event.target.name]=event.target.value;
      this.setState({book:book,msg:''}
      );
        console.log(this.state.book)
      };
      insertDes = (event) => {
          const book = this.state.book;
          console.log(book)
      book['description']=event.target.value;
      this.setState({book:book,msg:''}
      );
        console.log(this.state)
      };
    
    insert_now = (id)=>{
        fetch(`http://127.0.0.1:8000/library/books/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.state.book),
        })
          .then((data) => data.json())
          .then((data)=>this.setState({...this.state,msg:data}))
          .catch((error) => console.log(error));
    console.log(this.state)
    
    }




render(){


    const is_er = Object.keys(this.state.msg)[0]==='id'?true:false
    return(
            <div className='insert' style={{border: '1px solid red',borderWidth:'5vh',padding:'10vh'}}>



                    <div className="book" >
                            <h1>Fill and click insertnow to add Book to table(then refresh button){this.state.book.id}</h1>
                            <label > <br/>Book Title:<br/><input type="text" style={{height:'5vh',width:'50%'}} required name='title' value={this.state.book.title} onChange={(e)=>this.insertTitle(e)}/><br/></label>
                            <label > <br/>Book Description:<br/><textarea value={this.state.book.description} style={{height:'10vh',width:'70%'}} onChange={(e)=>this.insertDes(e)}/><br/></label>
                            <label > <br/>Book Price<br/><input type="number" step='.1' name='price' min='5' style={{height:'5vh',width:'30%'}} value={this.state.book.price} onChange={(e)=>this.insertPrice(e)}/><br/></label>
                            <label > <br/>Book author<br/><input type="text" required name='author' style={{height:'5vh',width:'70%'}} value={this.state.book.author} onChange={(e)=>this.insertAuthor(e)}/><br/></label>
                            {is_er?(<label>Success</label>):(<label style={{color:'red',}}> <br/>error msg:-{Object.keys(this.state.msg)[0]}{this.state.msg[Object.keys(this.state.msg)[0]]}</label>)}

                        

                            
                    <br/>
                    <button type="submit" onClick={() => this.insert_now()}>
                                 Insert now
                            </button>
                            
                            
                            
                    
                            </div>


            </div>





    )
}



}
export default Insert;




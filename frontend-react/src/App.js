import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    dataLoaded: false,
    books: [],
  }

  fetchData = () => {
    fetch('http://localhost:3000/books')
    .then(r => r.json())
    .then(resp => {
      this.setState({
        dataLoaded: true,
        books: resp
      })
    })
  }

  renderBooks = () => {
    let tags = []

    return this.state.books.map((book) => {

      book.tags.map((tag) => {
        tags.push(tag.title)
      })

      return (
        <div key={book.id}>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Publication year: {book.publication_year}</p>
          <p>Edited: {book.edited ? 'Yes' : 'No'}</p>
          <p>Tags: {tags.join(', ')}</p>
          <p>Place for picture</p>
        </div>
      )
    })
  }

  render(){
    return(
        <div>
          {this.state.dataLoaded ? null : this.fetchData()}
          {this.state.dataLoaded ? this.renderBooks() : null }
        </div>
    )
  }
}

export default App;

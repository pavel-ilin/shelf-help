import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
import '../App.css';
import Book from './Book'


const FrontPage = () => {
  const books = useSelector(state => state.books)


  const rootRender = () => {
    return  books.map(book => {
        return (<Book key={book.id} book={book}/>)
      })
  }
    return(
      <Fragment>
        {rootRender()}
        </Fragment>
    )
  }

export default FrontPage;

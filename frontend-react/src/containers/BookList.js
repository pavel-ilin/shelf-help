import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'

import Book from '../components/Book'


const BookList = (props) => {
  const data = useSelector(state => state)

  const booksRender = () => {
    if(data.tagClick){
      return data.books.map(book => {
        if (book.all_tags.includes(data.tagClick)){
          return (<Book key={book.id} book={book}/>)
        }
          })
        }
  }

  const rootRender = () => {
    return  data.books.map(book => {
        return (<Book key={book.id} book={book}/>)
      })
  }



    return(
      <Fragment>
        {data.tagClick ? booksRender() : rootRender()}
      </Fragment>
    )
}

export default BookList
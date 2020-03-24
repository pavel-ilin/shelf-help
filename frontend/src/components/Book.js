import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'


const Book = (props) => {
    return(
        <Fragment>
            <Link to={`/books/${props.book.id}`}>
              <div>{props.book.title}</div>
            </Link>
            <div>{props.book.author}</div>
        </Fragment>
    )
}

export default Book;
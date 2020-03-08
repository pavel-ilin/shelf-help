import React, { Fragment } from 'react';

const ShowPage = (props) => {
  // console.log(props)
    return(
        <Fragment>
            <p>Title: {props.book.title}</p>
            <p>Author: {props.book.author} </p>
            <p>Publication year: {props.book.publication_year}</p>
            <p>Edition: {props.book.edition}</p>
            <p>Edited: {props.book.edited? 'Yes' : 'No'}</p>
        </Fragment>
    )
}

export default ShowPage;

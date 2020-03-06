import React, { Fragment } from 'react';

const ShowPage = (props) => {
  console.log(props)
    return(
        <Fragment>
            <p>Title: </p>
            <p>Author: {props.book.author} </p>
            <p>Publication year: </p>
            <p>Edited: </p>
            <p>Tags: </p>
        </Fragment>
    )
}

export default ShowPage;

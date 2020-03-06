import React, { Fragment } from 'react';
import '../App.css';

const ShowPage = (props) => {
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

import React, { Fragment } from 'react';
import '../App.css';

const TagBooksList = (props) => {

    return(
        <Fragment>
            <p>Title: </p>
            <p>Author: {props.tag.tag} </p>
        </Fragment>
    )
}

export default TagBooksList;

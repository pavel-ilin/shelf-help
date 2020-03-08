import React, { Fragment } from 'react';

const NewBookForm = () => {

    return(
        <Fragment>
            <form>
              <lable>Title:</lable>
              <input type="text"></input>
              <lable>Author:</lable>
              <input type="text"></input>
              <lable>Publication Year:</lable>
              <input type="text"></input>
              <lable>Edited:</lable>
              <input type="text"></input>
              <lable>Tags:</lable>
              <input type="text"></input>

              <input type="submit"></input>
            </form>
        </Fragment>
    )
}

export default NewBookForm;

import React, { Component, Fragment } from 'react';
import '../App.css';

class ShowPage extends Component {

  render(){
    return(
        <Fragment>
            <p>Title: </p>
            <p>Author: </p>
            <p>Publication year: </p>
            <p>Edited: </p>
            <p>Tags: </p>
        </Fragment>
    )
  }
}

export default ShowPage;

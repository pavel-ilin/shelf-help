import React, { Component, Fragment } from 'react';
import '../App.css';

class Header extends Component {

  render(){
    return(
        <Fragment>
          <div>
            <form>
                <label>Search:<input type="text" name="search" /></label>
                <input type="submit" value="Search" />
            </form>
          </div>

          <div>
            <form>
                <label>Add new Book:<input type="text" name="add" /></label>
                <input type="submit" value="add new book" />
            </form>
          </div>
        </Fragment>
    )
  }
}

export default Header;

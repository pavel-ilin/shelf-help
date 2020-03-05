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
            Add new book
          </div>
        </Fragment>
    )
  }
}

export default Header;

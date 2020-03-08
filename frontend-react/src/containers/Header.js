import React, { Fragment } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Head = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.5em;
  background: #7B68EE;
  padding: 10px 10px 10px 10px;
`;


const Header = () => {


    return(
      <Fragment>
        <Head>
          <Link to='/'><div>Main menu</div></Link>

          <div>
            <form>
                <label>Search:<input type="text" name="search" /></label>
                <Link to='/search-results'><input type="submit" value="Search"/></Link>
            </form>
          </div>

          <Link to='/new'>Add new books</Link>
        </Head>
        </Fragment>
    )
  }

export default Header;

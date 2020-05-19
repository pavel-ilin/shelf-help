import React, { Fragment } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core';


import styled from 'styled-components';


const Head = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.5em;
  background: linear-gradient(43deg, black, transparent);
  padding: 10px 10px 10px 10px;
`;

const Header = () => {

    return(
      <Fragment>
        <Head>
          <Link to='/'><div>Main menu</div></Link>
            <div>
              <TextField className={'input'} id="outlined-basic" label="Search" variant="outlined" />
              <Link to='/search-results'>
                <Button className={'button'} variant="contained" color="primary" >
                   Search
                </Button>
              </Link>
            </div>
          <Link to='/new'>Add new books</Link>
        </Head>
        </Fragment>
    )
  }

export default Header;

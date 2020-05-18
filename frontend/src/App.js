import React, { Fragment } from 'react';
import styled from 'styled-components';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { Container } from '@material-ui/core';

import { setData, setTags } from "./redux/actions";

import Header from './containers/Header'
import NewBookForm from './containers/NewBookForm'
import Menu from './containers/Menu'
import BookList from './containers/BookList'
import SearchResults from './containers/SearchResults'
import ShowPage from './containers/ShowPage'

import FrontPage from './components/FrontPage'

const Wrapper = styled.section`
 padding: 1%;
 display: flex;
`;

const Item = styled.div`
 font-size: 1.5em;
 text-align: left;
 color: #F0FFF0;
 margin-right: 10px;
 border-style: solid;
 padding: 10px;
 idth: -webkit-fill-available;
`;

const Form = styled.div`
 display: flex;
 flex: auto;
 font-size: 1.5em;
 text-align: left;
 color: #F0FFF0;
 margin-right: 10px;
 border-style: solid;
 padding: 10px;
 idth: -webkit-fill-available;
`;

const MenuStyle = styled.div`
 font-size: 1.5em;
 text-align: left;
 color: #F0FFF0;
 margin-right: 10px;
 border-style: solid;
 padding: 10px;
 idth: -webkit-fill-available;
`;


const App = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state)
  const loading = data.dataLoaded

  const renderBook = (renderParams) => {
      const slug = parseInt(renderParams.match.params.slug)
      const book = data.books.find(item => item.id === slug)
      return <Item><ShowPage book={book}/></Item>
  }

  const renderTags = () => {
    return <Item><BookList /></Item>
  }


  function onLoad () {
    dispatch(setTags())
    dispatch(setData())
  }

  return (
    <Fragment>
        {!loading && onLoad()}
        <Header/>
          <Wrapper>
            {!loading ? <Item><div>Loading</div></Item> :

            <Fragment>
            <MenuStyle><Menu/></MenuStyle>
            <Switch>
              <Route path="/new"><Form><NewBookForm /></Form></Route>
              <Route path="/search-results"><Item><SearchResults /></Item></Route>
              <Route path="/tags/:slug" render={ renderTags } />
              <Route path="/books/:slug" render={ renderBook } />
              <Route path="/"><Item><FrontPage /></Item></Route>
            </Switch>
          </Fragment>
          }
          </Wrapper>
    </Fragment>
  )
}

export default App

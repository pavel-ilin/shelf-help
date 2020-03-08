import React, { Fragment } from 'react';
import styled from 'styled-components';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setData } from "./redux/actions";

import Header from './containers/Header'
import NewBookForm from './containers/NewBookForm'
import Menu from './containers/Menu'
import BookList from './containers/BookList'
import SearchResults from './containers/SearchResults'
import ShowPage from './containers/ShowPage'

import FrontPage from './components/FrontPage'

const Wrapper = styled.section`
 padding: 3em;
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


const App = () => {

  const data = useSelector(state => state)
  const loading = data.dataLoaded
  const dispatch = useDispatch()

  const renderBook = (renderParams) => {
    const slug = parseInt(renderParams.match.params.slug)
    const book = data.books.find(item => item.id === slug)
    return <Item><ShowPage book={book}/></Item>
  }

  const renderTags = (renderParams) => {
    const slug = parseInt(renderParams.match.params.slug)
    return <Item><BookList /></Item>
  }


  function onLoad () {
    dispatch(setData())
  }


  return (
    <Fragment>

        {loading ? null : onLoad()}

        <Header/>
          <Wrapper>
            {!loading ? <Item><div>Loading</div></Item> :

            <Fragment>
            <Item><Menu/></Item>

            <Switch>
              <Route path="/new"><Item><NewBookForm /></Item></Route>
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

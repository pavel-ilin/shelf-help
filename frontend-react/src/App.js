import React, { Fragment } from 'react';
import styled from 'styled-components';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from './containers/Header'
import NewBookForm from './containers/NewBookForm'
import Menu from './containers/Menu'
import FrontList from './containers/FrontList'
import SearchResults from './containers/SearchResults'

import ShowPage from './containers/ShowPage'
import TagBooksList from './containers/TagBooksList'


const Wrapper = styled.section`
 padding: 3em;
 background: #191970;
 display: flex;
`;

const Item = styled.h1`
 font-size: 1.5em;
 text-align: center;
 color: #F0FFF0;
 margin-right: 10px;
 border-style: solid;
 padding: 10px;
`;


const App = () => {

  const data = useSelector(state => state.books)

  const state = {
    books: [
      {
      id: 1,
      author: "Gillian"
    },
    {
    id: 2,
    author: "Pavel"
  }
  ],
    tags: [
      {
        id: 1,
        tag: 'Feminism'
      }
    ]
  }

  const renderBooks = (renderParams) => {
    const slug = parseInt(renderParams.match.params.slug)
    const book = state.books.find(item => item.id === slug)
    return <Item><ShowPage book={book}/></Item>
  }

  const renderTags = (renderParams) => {
    const slug = parseInt(renderParams.match.params.slug)
    const tag = state.tags.find(item => item.id === slug)
    return <Item><TagBooksList tag={tag}/></Item>
  }


  return (
    <Fragment>
        <Header/>

        <Wrapper>
          <Item><Menu/></Item>

          <Switch>
            <Route path="/book"></Route>
            <Route path="/new"><Item><NewBookForm /></Item></Route>
            <Route path="/search-results"><Item><SearchResults /></Item></Route>
            <Route path="/tags/:slug" render={ renderTags } />
            <Route path="/books/:slug" render={ renderBooks } />
            <Route path="/"><Item><FrontList /></Item></Route>
          </Switch>

        </Wrapper>
    </Fragment>
  )
}

export default App

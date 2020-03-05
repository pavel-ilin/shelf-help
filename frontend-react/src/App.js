import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import './App.css';

import Header from './containers/Header'
import Menu from './containers/Menu'
import ShowPage from './containers/ShowPage'
import PicturePlaceHolder from './containers/PicturePlaceHolder'


const Wrapper = styled.section`
 padding: 2em;
 background: #191970;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Item = styled.h1`
 font-size: 1.5em;
 text-align: center;
 color: #F0FFF0;
 margin-right: 10px;
 border-style: solid
`;


const Head = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  background: #7B68EE;
`;


class App extends Component {

  render(){
    return(
      <Fragment>

        <Head>
          <Header />
        </Head>

        <Wrapper>
          <Item>
            <Menu />
          </Item>
          <Item>
            <ShowPage />
          </Item>
          <Item>
            <PicturePlaceHolder />
          </Item>
        </Wrapper>
      </Fragment>
    )
  }
}

export default App;




// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component {
//
//   state = {
//     dataLoaded: false,
//     books: [],
//   }
//
//   fetchData = () => {
//     fetch('http://localhost:3000/books')
//     .then(r => r.json())
//     .then(resp => {
//       this.setState({
//         dataLoaded: true,
//         books: resp
//       })
//     })
//   }
//
//   renderBooks = () => {
//     let tags = []
//
//     return this.state.books.map((book) => {
//
//       book.tags.map((tag) => {
//         tags.push(tag.title)
//       })
//
//       return (
//         <div key={book.id}>
//           <p>Title: {book.title}</p>
//           <p>Author: {book.author}</p>
//           <p>Publication year: {book.publication_year}</p>
//           <p>Edited: {book.edited ? 'Yes' : 'No'}</p>
//           <p>Tags: {tags.join(', ')}</p>
//           <p>Place for picture</p>
//         </div>
//       )
//     })
//   }
//
//   render(){
//     return(
//         <div>
//           {this.state.dataLoaded ? null : this.fetchData()}
//           {this.state.dataLoaded ? this.renderBooks() : null }
//         </div>
//     )
//   }
// }
//
// export default App;

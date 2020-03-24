import { filterTags } from '../services/internalServices'

const localhostUrl = 'http://localhost:3000/'

export function setData () {
  return (dispatch) => fetch(localhostUrl + 'books')
    .then(r => r.json())
    .then(resp => {
      let tags = filterTags(resp)
      dispatch({
        type: "LOAD_DATA",
        data: {
          books: resp,
          tags: tags,
          dataLoaded: true
        }
      })
    })
}

export function setTags () {
  return (dispatch) => fetch(localhostUrl + 'tags')
    .then(r => r.json())
    .then(resp => {
      dispatch({
        type: "SET_TAGS",
        tags: resp,
        tagsLoaded: true
      })
    })
}

export function createTag (data) {
  return (dispatch) => fetch(localhostUrl + 'tags', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tag: {
        title: data
      }
    })
  })
  .then(r => r.json())
  .then(resp => {
    if (resp.errors){
      dispatch({
        type: 'CREATE_TAG',
        tag: {
          errors: resp.errors
        }
      })
    }
    else {
      dispatch({
        type: 'CREATE_TAG',
        tag: resp
      })
    }
  })
}

export function createBook(data){
  return (dispatch) => fetch(localhostUrl + 'books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      book: {
        title: data.title,
        author: data.author,
        publication_year: data.setPubYear,
        edition: data.edition,
        edited: data.edited,
        tags: data.tags
      }
    })
  })
  .then(r => r.json())
  .then(resp => {
    console.log(resp)
  })
}

export function tagClick (data) {
  return {
    type: 'TAG_CLICK',
    tagClick: data
  }
}

export function tagClickReset (data) {
  return {
    type: 'TAG_CLICK_RESET',
    tagClick: null
  }
}

const actions = {
  setData,
  setTags,
  tagClick,
  createTag,
  createBook
}

export default actions
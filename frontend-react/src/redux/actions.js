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
  tagClick
}

export default actions
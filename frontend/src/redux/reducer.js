const initialState = {
  errors: null,
  dataLoaded: false,
  tagsLoaded: false,
  tagClick: null,
  tagClickReset: false,
  allTags: [],
  books: [],
  tags: [],
  searchRequest: ''
}

const reducer = (oldState = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...oldState,
        dataLoaded: action.data.dataLoaded,
        books: action.data.books,
        tags: action.data.tags
      }
    case 'SET_TAGS':
      return {
        ...oldState,
        allTags: action.tags,
        tagsLoaded: action.tagsLoaded
      }
    case 'TAG_CLICK':
      return {
        ...oldState,
        tagClick: action.tagClick,
      }
    case 'TAG_CLICK_RESET':
      return {
        ...oldState,
        tagClick: action.tagClick
      }
    case 'CREATE_TAG':
      return {
        ...oldState,
        allTags: [...oldState.allTags, action.tag],
        errors: action.tag.errors
      }
    case 'CREATE_BOOK':
      return {
        ...oldState,
        books: [...oldState.books, action.book],
        tags: [...oldState.tags, ...action.book.all_tags],
        errors: action.book.errors
      }
    default:
      return oldState
  }
}
export default reducer
const initialState = {
  errors: null,
  dataLoaded: false,
  tagClick: null,
  tagClickReset: false,
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
          tags: [...oldState.tags, action.tag.title],
          errors: action.tag.errors
        }
    default:
      return oldState
  }
}
export default reducer
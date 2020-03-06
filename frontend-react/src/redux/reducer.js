const initialState = {
  dataLoaded: false,
  books: [],
  tags: []
}

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...oldState,
        dataLoaded: action.dataLoaded,
        books: action.books,
        tags: action.tags
      }
    default:
      return oldState
  }
}

export default reducer
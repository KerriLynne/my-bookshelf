
//mechanism to update the book reducer/ book store to the array of books that we get back from our backend
function bookReducer(state = { all: [] }, action) {
    console.log("reducer was called" + action.type)
    switch(action.type) {
        case "FETCH_BOOKS_SUCCESS":
            //think of spread operator as restructuring and overriding books property from state to maintain state only 
            //changing speciic information. take the existing value of state and override the books property from that object
            return { ...state, all: action.payload };

        case "CREATE_BOOK_SUCCESS":
            return { ...state, all: [...state.all, action.payload] }

        case "DELETE_BOOK":
            return { ...state, all: state.all.filter(book => book.id !== action.payload) }

        case "SHOW_BOOK":
            // const books = state.all.filter(book => book.id == action.payload)
            // console.log("showbook reducer was called" + books.length)
            // console.log("showbook reducer was called" + state.all.length)
            // return { ...state, all: state.all.filter(book => book.id == action.payload) }
            // return { ...state, all: [...state.all], selected: state.all.filter(book => book.id == action.payload)};
            return { ...state, all: [...state.all], selected: action.payload};

        case "SHOW_BOOKSHELF":
            return { ...state, bookshelves: action.payload};

        default:
            return state;
    }
}

export default bookReducer
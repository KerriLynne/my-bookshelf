
//takes the data you get from the action and appends it to the state
function bookReducer(state = { all: [] }, action) {
    console.log("reducer was called" + action.type)
    switch(action.type) {
        case "FETCH_BOOKS_SUCCESS":
            return { ...state, all: action.payload };

            //add this to the array - attribute all will update with the new array and what was existing
            //appending the book that you get back to ...state, all: - 
        case "CREATE_BOOK_SUCCESS":
            return { ...state, all: [...state.all, action.payload] }

        case "DELETE_BOOK":
            //only let things through that don't have the id of the book we deleted
            return { ...state, all: state.all.filter(book => book.id !== action.payload) }

        case "SHOW_BOOK":
            return { ...state, all: [...state.all], selected: action.payload};

        case "SHOW_BOOKSHELF":
            return { ...state, bookshelves: action.payload};

        case "GET_BOOKSHELF_LIST":
            return { ...state, bookshelfList: action.payload};

        case "UPDATE_BOOK":
            return { ...state, selected: action.payload}

        default:
            return state;
    }
}

export default bookReducer
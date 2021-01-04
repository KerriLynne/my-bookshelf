

function bookReducer(state = { all: [] }, action) {
    console.log("reducer was called" + action.type)
    switch(action.type) {
        case "FETCH_BOOKS_SUCCESS":
            return { ...state, all: action.payload };

        case "CREATE_BOOK_SUCCESS":
            return { ...state, all: [...state.all, action.payload] }

        case "DELETE_BOOK":
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
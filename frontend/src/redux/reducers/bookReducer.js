
//mechanism to update the book reducer/ book store to the array of books that we get back from our backend
function bookReducer(state = { all: [] }, action) {
    switch(action.type) {
        case "FETCH_BOOKS_SUCCESS" :
            //think of spread operator as restructuring and overriding books property from state to maintain state only 
            //changing speciic information. take the existing value of state and override the books property from that object
            return { ...state, books: action.payload };
        default:
            return state;
    }
}

export default bookReducer
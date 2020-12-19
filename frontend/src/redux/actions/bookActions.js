//want to make a request to an external API which is why we return a function
export const getBooks = () => {
    return (dispatch) => {
        fetch(`http://localhost:3001/books`)
            .then((res) => res.json())
            .then((books) => 
                dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: books })
        );
    };
};

export const createBook = (data) => {
    return (dispatch) => {
        //book is the key and data is the balance data
        fetch(`http://localhost:3001/books`, {
            method: "POST", 
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({ book: data }),
        })
            .then((res) => res.json())
            .then((book) => 
                dispatch({ type: 'CREATE_BOOK_SUCCESS', payload: book })
            );
    }
}

export const deleteBook = (bookId, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/books/${bookId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(({ id }) => { dispatch({ type: 'DELETE_BOOK', payload: id })
        // history.push('/books')
        });
    };
};

export const showBook = (bookId) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/books/${bookId}`)
            .then((res) => res.json())
            .then(({ id }) => { dispatch({ type: 'SHOW_BOOK', payload: id })
        });
    };
};
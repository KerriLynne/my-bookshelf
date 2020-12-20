import React from 'react'
// import { FaRegTrashAlt } from "react-icons/fa";
// import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"
import BookshelfBookItem from './BookshelfBookItem';
// import { Link } from 'react-router-dom'

function BookshelfItem( { bookshelf } ) {
    // const submitDelete = () => {
    //     // debugger
    //     deleteBook(book.id);
    // }
    return (
        <div>
            {/* <Link to={`/books/${book.id}`}> */}
            <h1>{bookshelf.name}</h1>
                {bookshelf.books.map((book) => (
                <BookshelfBookItem key={book.id} book={book} />
                ))}
             {/* </Link> */}
             {/* <button><FaRegTrashAlt onClick={submitDelete} style={{curser: "pointer"}}/></button> */}
        </div>
    );
}

export default connect(null)(BookshelfItem)
import React from 'react'
// import { FaRegTrashAlt } from "react-icons/fa";
// import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"
import BookshelfBookItem from './BookshelfBookItem';
// import { Link } from 'react-router-dom'

function BookshelfItem( { bookshelf } ) {

    return (
        <div>
           
            <h1 className="subtitle">{bookshelf.name}</h1>
                {bookshelf.books.map((book) => (
                <BookshelfBookItem key={book.id} book={book} />
                ))}
   
        </div>
    );
}

export default connect(null)(BookshelfItem)
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
// import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"
// import { Link } from 'react-router-dom'

function BookshelfBookItem( { book } ) {
    // const submitDelete = () => {
    //     // debugger
    //     deleteBook(book.id);
    // }
    return (
        <div>
            {/* <Link to={`/books/${book.id}`}> */}
            <p>{book.title}</p>
        </div>
    );
}

export default connect(null)(BookshelfBookItem)
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

function BookListItem({ book, deleteBook }) {
    const submitDelete = () => {
        // debugger
        deleteBook(book.id);
    }
    return (
        <div>
            <Link to={`/books/${book.id}`}>
            {book.title} 
            </Link>
            <button><FaRegTrashAlt onClick={submitDelete} style={{curser: "pointer"}}/></button>
        </div>
    );
}

export default connect(null, { deleteBook })(BookListItem)
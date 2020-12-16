import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"

function BookListItem({ book, deleteBook }) {
    const submitDelete = () => {
        // debugger
        deleteBook(book.id, this.props.history);
    }
    return (
        <div>
            {book.title} 
            <button><FaRegTrashAlt onClick={submitDelete} style={{curser: "pointer"}}/></button>
        </div>
    );
}

export default connect(null, { deleteBook })(BookListItem)
import React from 'react'
// import { FaRegTrashAlt } from "react-icons/fa";
// import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"
// import { Link } from 'react-router-dom'

function Book( book ) {
//     const submitDelete = () => {
//         // debugger
//         deleteBook(book.id);
//     }
    return (
        <div>
            {book.title}
            {/* <button><FaRegTrashAlt onClick={submitDelete} style={{curser: "pointer"}}/></button> */}
        </div>
    );
}

export default connect()(Book)
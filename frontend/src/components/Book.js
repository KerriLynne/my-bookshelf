//add function to get book by ID here?

import React from 'react'
// import { FaRegTrashAlt } from "react-icons/fa";
// import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"
import { showBook } from "../redux/actions/showBook";
import { BsArrowRepeat } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

function BookCategory({ book, showBook }) {
    const submitProgress = () => {
        // debugger
        inProgress(book.id, this.props.history);
    }
        const submitForLater = () => {
        // debugger
        forLater(book.id, this.props.history);
    }
        const submitCompleted = () => {
        // debugger
        completed(book.id, this.props.history);
    }
    return (
        <div>
            {book.title} - {book.author} - {book.genre}
            <button><BsArrowRepeat onClick={submitProgress} style={{curser: "pointer"}}/>In Progress</button>
            <button><FiClock onClick={submitForLater} style={{curser: "pointer"}}/>For Later</button>
            <button><AiOutlineCheckCircle onClick={submitCompleted} style={{curser: "pointer"}}/>Completed</button>
        </div>
    );
}

export default connect(null, { deleteBook })(Book)
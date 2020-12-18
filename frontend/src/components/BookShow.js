//add function to get book by ID here?

import React from 'react'
// import { FaRegTrashAlt } from "react-icons/fa";
// import { deleteBook } from "../redux/actions/bookActions";
import { connect } from "react-redux"
// import { getBooks } from "../redux/actions/bookActions";
// import { showBook } from "../redux/actions/bookActions";
// import { useParams } from "react-router-dom";
// import { BsArrowRepeat } from "react-icons/bs";
// import { FiClock } from "react-icons/fi";
// import { AiOutlineCheckCircle } from "react-icons/ai";

class BookShow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {book_id: props.match.params.id}
    // }
    render() {
        return (
            <h1>Book {this.props.book.title} </h1>
        )
    }
}

const mapStateToProps = ({books}, ownProps) => {
    //destructiure books and return an object where book is the key but books.all is the value 
    //(book index receoves a prop called books which will be equal to books.all and will be available to us as a prop)
    return {
        book: books.all.find(book => book.id == ownProps.match.params.id)
    };
};

// function BookCategory({ book, showBook }) {
//     // const submitProgress = () => {
//     //     // debugger
//     //     inProgress(book.id, this.props.history);
//     // }
//     //     const submitForLater = () => {
//     //     // debugger
//     //     forLater(book.id, this.props.history);
//     // }
//     //     const submitCompleted = () => {
//     //     // debugger
//     //     completed(book.id, this.props.history);
//     // }
//     return (
//         <div>
//             {book.title} - {book.author} - {book.genre}
//             {/* <button><BsArrowRepeat onClick={submitProgress} style={{curser: "pointer"}}/>In Progress</button>
//             <button><FiClock onClick={submitForLater} style={{curser: "pointer"}}/>For Later</button>
//             <button><AiOutlineCheckCircle onClick={submitCompleted} style={{curser: "pointer"}}/>Completed</button> */}
//         </div>
//     );
// }

export default connect(mapStateToProps)(BookShow)
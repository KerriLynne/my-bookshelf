//add function to get book by ID here?

import { showBook } from "../redux/actions/bookActions";
import Book from './Book';
import React from "react";
import { connect } from "react-redux";
// import { BsArrowRepeat } from "react-icons/bs";
// import { FiClock } from "react-icons/fi";
// import { AiOutlineCheckCircle } from "react-icons/ai";

class BookShow extends React.Component {
    // constructor() {
    //     super();
    //     this.props.showBook(this.props.match.params.id);
    // }
    componentDidMount() {
        console.log("component did mount was called")
        this.props.showBook(this.props.match.params.id);
    }

    // componentDidUpdate() {
    //     this.props.showBook(this.props.match.params.id);
    // }
    // componentDidMount() {
    //     this.props.getBooks();
    // }
    render() {
        console.log(this.props.book)
        if (!this.props.book) {
            return (
                <div>
                <h1>Book</h1>
                    {/* <h1>{this.props.book[0].title}</h1>
                    <h1>{this.props.book[0].author}</h1>
                    <h1>{this.props.book[0].genre}</h1> */}
                </div> 
            )
        }
        return (
            <div>
            <h1>Book</h1>
                <h1>{this.props.book.title}</h1>
                <h1>{this.props.book.author}</h1>
                <h1>{this.props.book.genre}</h1>
            </div> 
        )
    }
}

const mapStateToProps = ({ books }) => {
    //destructiure books and return an object where book is the key but books.all is the value 
    //(book index receoves a prop called books which will be equal to books.all and will be available to us as a prop)
    return {
        book: books.selected,
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

export default connect(mapStateToProps, { showBook } )(BookShow);
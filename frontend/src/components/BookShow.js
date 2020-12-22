//add function to get book by ID here?

import { showBook, getBookshelfList, updateBook } from "../redux/actions/bookActions";
// import Book from './Book';
import React from "react";
import { connect } from "react-redux";
import { BsArrowRepeat } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

class BookShow extends React.Component {
    // constructor() {
    //     super();
    //     this.props.showBook(this.props.match.params.id);
    // }
    componentDidMount() {
        console.log("component did mount was called")
        this.props.showBook(this.props.match.params.id);
        this.props.getBookshelfList();
    }

    bookshelfIcon(bookshelfName) {
        switch (bookshelfName) {
            case "In Progress":
            return (
                <BsArrowRepeat style={{curser: "pointer"}}/>
            )
            case "For Later":
                return (
                <FiClock style={{curser: "pointer"}}/>
                )
            case "Completed":
                return (
                <AiOutlineCheckCircle style={{curser: "pointer"}}/>
                )        
            default:
                break;
        }
    }

    // componentDidUpdate() {
    //     this.props.showBook(this.props.match.params.id);
    // }
    // componentDidMount() {
    //     this.props.getBooks();
    // }
        // const moveBooktoBookshelf = updateBook(this.props.book.id, {bookshelf_id: bookshelf.id})

    render() {
        console.log(this.props.book)
        if (!this.props.book) {
            return (
                <div>
                <h1>Book</h1>
                </div> 
            )
        }
        return (
            <div>
            <h1 className="title">You Selected</h1>
                <h3>Title: {this.props.book.title}</h3> - <h3>Author: {this.props.book.author}</h3> - <h3>Genre: {this.props.book.genre}</h3>
                 {this.props.book.bookshelf_id && this.props.bookshelfList && 
                    <h3>On Your {this.props.bookshelfList.find((bookshelf) => bookshelf.id === this.props.book.bookshelf_id).name} Bookshelf
                    <button onClick={() => this.props.updateBook(this.props.book.id, {bookshelf_id: ""})}> Remove </button></h3>
                }

                {(this.props.bookshelfList || [] ).map((bookshelf) => ( bookshelf.id !== this.props.book.bookshelf_id && 
                    <button onClick={() => this.props.updateBook(this.props.book.id, {bookshelf_id: bookshelf.id})}> {this.bookshelfIcon(bookshelf.name)} Move To {bookshelf.name}</button>
                ))}
             {/* 
             <button><FiClock onClick={submitForLater} style={{curser: "pointer"}}/>For Later</button>
             <button><AiOutlineCheckCircle onClick={submitCompleted} style={{curser: "pointer"}}/>Completed</button> */}
            </div> 
        )
    }
}

const mapStateToProps = ({ books }) => {
    //destructiure books and return an object where book is the key but books.all is the value 
    //(book index receoves a prop called books which will be equal to books.all and will be available to us as a prop)
    return {
        book: books.selected,
        bookshelfList: books.bookshelfList
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

export default connect(mapStateToProps, { showBook, getBookshelfList, updateBook } )(BookShow);
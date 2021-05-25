//add function to get book by ID here?

import { showBook, getBookshelfList, updateBook } from "../redux/actions/bookActions";
import React from "react";
import { connect } from "react-redux";
import { BsArrowRepeat } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'

class BookShow extends React.Component {

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
            //jsx- lets you write html in javascript (syntax extension to JS)
            <div>
            <h1 className="title">You Selected</h1>
                <h4>Title:</h4>{this.props.book.title}  <h4>Author: </h4>{this.props.book.author}  <h4>Genre: </h4>{this.props.book.genre} <h4>Rating: </h4>{this.props.book.rating}
                <br></br>
                <br></br>

                 {this.props.book.bookshelf_id && this.props.bookshelfList && 
                    <h4>On Your "{this.props.bookshelfList.find((bookshelf) => bookshelf.id === this.props.book.bookshelf_id).name}" Bookshelf
                    <br></br>
                    <br></br>
                    <button onClick={() => this.props.updateBook(this.props.book.id, {bookshelf_id: ""})}> Remove from bookshelf </button></h4>
                }
                    <br></br>
                {(this.props.bookshelfList || [] ).map((bookshelf) => ( bookshelf.id !== this.props.book.bookshelf_id && 
                    <button onClick={() => this.props.updateBook(this.props.book.id, {bookshelf_id: bookshelf.id})}> {this.bookshelfIcon(bookshelf.name)} Move To "{bookshelf.name}"    </button>
                ))}
                    <br></br>
                    <br></br>
                    <h4><Link to={`/books/${this.props.book.id}/edit`} >
                    Edit Book
                    </Link></h4>
                    <h4><Link to={`/books/bookshelf`}>
                    My Bookshelf 
                    </Link></h4>
            </div> 
        )
    }
}
//whenever we want access to the state
const mapStateToProps = ({ books }) => {
    //destructiure books and return an object where book is the key but books.select is the value 
    //(book show receoves a prop called books which will be equal to books.select and will be available to us as a prop)
    return {
        book: books.selected,
        bookshelfList: books.bookshelfList
    };
};



export default connect(mapStateToProps, { showBook, getBookshelfList, updateBook } )(BookShow);
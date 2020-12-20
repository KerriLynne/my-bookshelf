//add function to get book by ID here?

import { showBookshelf } from "../redux/actions/bookActions";
// import Book from './Book';
import React from "react";
import { connect } from "react-redux";
import BookshelfItem from "./BookshelfItem";
// import { BsArrowRepeat } from "react-icons/bs";
// import { FiClock } from "react-icons/fi";
// import { AiOutlineCheckCircle } from "react-icons/ai";

class Bookshelf extends React.Component {

    componentDidMount() {
        console.log("component did mount was called bookshelf")
        this.props.showBookshelf();
    }


    
    // render() {
    //     const inprogress = this.props.books.map(book => {
    //         return (
    //             <BookListItem key={book.id} book={book}/>
    //         )
    //     })
    //     return(
    //         <ul>
    //           {inprogress}
    //         </ul>
    //       );
    // }

    render() {
        console.log(this.props)
        if (!this.props.bookshelves)
            return (
                <div>
                    <h1>Loading bookshelves</h1>
                </div>
            )
        return (
            <div>
                <h1>Your Bookshelves</h1>
                {/* {this.props.bookshelves.length} */}
                {this.props.bookshelves.map((bookshelf) => (
                <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />
                ))}
            </div>
        )
    }
}


const mapStateToProps = ({ books }) => {
    //destructiure books and return an object where book is the key but books.all is the value 
    //(book index receoves a prop called books which will be equal to books.all and will be available to us as a prop)
    return {
        // books: books.all,
        bookshelves: books.bookshelves
    };
};

export default connect(mapStateToProps, { showBookshelf } )(Bookshelf);
  
import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/actions/bookActions";
import BookListItem from "./BookListItem";


class BookIndex extends React.Component {
    //in react when you want to show or do something when it loads
    //the table arrived - ok now you are ready to set the table
    componentDidMount() {
        //calling getBooks() function
        this.props.getBooks();
    }
//using state so different things can be updated from different places
    state = {
        titleSearch: ""
    };

    filterBooks(book) {
        if (!this.state || this.state.titleSearch === "") {
            return true
        }
        return (
            book.title.toLowerCase().match(this.state.titleSearch.toLowerCase())
        )
    }
//calls render, then component did mount and THEN it will re-render if needed
    render() {
        console.log(this.props.books)
        return (
            <div>
                <h1 className="title">Books</h1>
                <input
                type="text"
                onChange={e => this.setState({titleSearch: e.target.value})}/>

                {this.props.books.filter(this.filterBooks.bind(this)).map((book) => (
                <BookListItem key={book.id} book={book} />
                ))}
            </div>
        );
    }
}

//now set as a prop
const mapStateToProps = ({ books }) => {
    return {
        books: books.all,
    };
};


export default connect(mapStateToProps, { getBooks })(BookIndex);
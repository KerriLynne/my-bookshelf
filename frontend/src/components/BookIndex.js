  
import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/actions/bookActions";
import BookListItem from "./BookListItem";


class BookIndex extends React.Component {
    componentDidMount() {
        this.props.getBooks();
    }

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

const mapStateToProps = ({ books }) => {
    return {
        books: books.all,
    };
};


export default connect(mapStateToProps, { getBooks })(BookIndex);
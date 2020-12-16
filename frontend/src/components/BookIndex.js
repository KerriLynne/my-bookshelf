  
import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/actions/bookActions";
import BookListItem from "./BookListItem";
import { Link } from 'react-router-dom'

//turned into a class to take advantage of a lifecycle method bc we're working with asynchronous and fetch- otherwise could have stayed fucntional component.
//once we cover hooks we won't need this to be a class component?

class BookIndex extends React.Component {
    //where we make asynchronous requests
    //now BookIndex has access to getBooks as a prop which will then kick off the API request to the backend
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        console.log(this.props.books)
        return (
            <div>
                <h1>Books</h1>
                <Link to='/books/${book.id}'>
                {this.props.books.map((book) => (
                <BookListItem key={book.id} book={book} />
                ))}
                </Link>
            </div>
        );
    }
}

const mapStateToProps = ({ books }) => {
    //destructiure books and return an object where book is the key but books.all is the value 
    //(book index receoves a prop called books which will be equal to books.all and will be available to us as a prop)
    return {
        books: books.all,
    };
};

/* //invoke my action that I created (added import at top from getBooks)
//passing this action (getBooks) into BookIndex as a prop 

//below is saying- give BookIndex a prop nameed gegtBooks and map that prop to the getBooks action that we're importing.  It will automatically dispatch that action once we invoke this method.
//whenever it gets executed it will dispatch getBooks, once it dispatches redux thunk is going to inspect and determine is that action returning a function or an object.  If object go and send that object over to the reducer.
//if returning a function, we know that we need to pause dispatching until we get what3ever response we're waiting for. */

export default connect(mapStateToProps, { getBooks })(BookIndex);
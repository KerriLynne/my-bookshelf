import React, { Component } from 'react'
import { createBook, showBook, updateBook } from '../redux/actions/bookActions';
import { connect } from 'react-redux'
// import {reduxForm} from 'redux-form';

class BookForm extends Component {

    componentDidMount() {
        console.log("component did mount was called")
        if (this.props.match.params.id) {
            this.props.showBook(this.props.match.params.id)
        }
    }

    isAdding = !this.props.match.params.id

    submit = (e) => {
        e.preventDefault()
        const values = {
            title: this.bookTitle.value,
            author: this.bookAuthor.value,
            genre: this.bookGenre.value,
            rating: this.bookRating.value
        }
        if (this.isAdding) {
            this.props.createBook(values)
            this.props.history.push('/books');
        } else {
            this.props.updateBook(this.props.match.params.id, values) //first argument is the :id in the url, second argument is the params
            this.props.history.push(`/books/${this.props.match.params.id}`);
        }
    };

    render() {
        return (
            <div key={this.props.match.params.id}>
                <h1 className="title">{this.isAdding ? "Add" : "Edit" } a book</h1>
                <form onSubmit={this.submit.bind(this)}>
                    Title:{" "} 
                    <input 
                    ref={(input) => this.bookTitle = input}
                    //storing a reference to that formfield
                    defaultValue={this.props.book && this.props.book.title}
                    type="text" 
                    /> 
                    Author:{" "} 
                    <input 
                    ref={(input) => this.bookAuthor = input}
                    defaultValue={this.props.book && this.props.book.author}
                    type="text" 
                    /> 
                    Genre:{" "} 
                    <input 
                    ref={(input) => this.bookGenre = input}
                    defaultValue={this.props.book && this.props.book.genre}
                    type="text" 
                    /> 
                    <br></br>
                    <br></br>
                    Rating:{" "} 
                    <input 
                    ref={(input) => this.bookRating = input}
                    defaultValue={this.props.book && this.props.book.rating}
                    type="integer" 
                    />     
                    <input type="submit" value={this.isAdding ? "Add" : "Update" } />
                </form>
            </div>
        );
    }
}


const mapStateToProps = ({ books }) => {
    return {
        book: books.selected
    };
};

export default connect(mapStateToProps, { createBook, showBook, updateBook })(BookForm)
import React, { Component } from 'react'
import { createBook } from '../redux/actions/bookActions';
import { connect } from 'react-redux'

class BookForm extends Component {
    state = {
        title: "",
        author: "",
        genre: "",
    };

    submit = e => {
        e.preventDefault()
        this.props.createBook(this.state)
        this.setState({
            title: "",
            author: "",
            genre: "",
        });
        this.props.history.push('/books');
    };

    render() {
        return (
            <div>
                <h1>Add a book</h1>
                <form onSubmit={this.submit}>
                    Title:{" "} 
                    <input 
                    onChange={e => this.setState({title: e.target.value})}
                    type="text" 
                    value={this.state.title} 
                    /> 
                    Author:{" "} 
                    <input 
                    onChange={e => this.setState({author: e.target.value})}
                    type="text" 
                    value={this.state.author}
                    /> 
                    Genre:{" "} 
                    <input 
                    onChange={e => this.setState({genre: e.target.value})}
                    type="text" 
                    value={this.state.genre}
                    /> 
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}

export default connect(null, { createBook })(BookForm)
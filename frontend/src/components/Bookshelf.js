//add function to get book by ID here?

import { showBookshelf } from "../redux/actions/bookActions";
import React from "react";
import { connect } from "react-redux";
import BookshelfItem from "./BookshelfItem";

class Bookshelf extends React.Component {

    componentDidMount() {
        console.log("component did mount was called bookshelf")
        this.props.showBookshelf();
    }


    

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
                <h1 className="text-center title">Your Bookshelf</h1><br></br>
                
                <div class="row">
                {this.props.bookshelves.map((bookshelf) => (
             
                <div class="col-sm-4">   
                <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />
                </div>
                ))}
                </div>
            </div>
        )
    }
}






const mapStateToProps = ({ books }) => {
    return {
        bookshelves: books.bookshelves
    };
};

export default connect(mapStateToProps, { showBookshelf } )(Bookshelf);
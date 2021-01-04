import React from 'react'
import { connect } from "react-redux"
import BookshelfBookItem from './BookshelfBookItem';


function BookshelfItem( { bookshelf } ) {

    return (
        <div>
           
            <h1 className="subtitle">{bookshelf.name}</h1>
                {bookshelf.books.map((book) => (
                <BookshelfBookItem key={book.id} book={book} />
                ))}
   
        </div>
    );
}

export default connect(null)(BookshelfItem)
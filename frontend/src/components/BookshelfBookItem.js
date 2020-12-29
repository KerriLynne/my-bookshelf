import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

function BookshelfBookItem( { book } ) {

    return (
        <div>
            <Link to={`/books/${book.id}`}>
            <p>{book.title}</p>
            </Link>
        </div>
    );
}

export default connect(null)(BookshelfBookItem)
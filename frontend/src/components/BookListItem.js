import React from 'react'

export default function BookListItem({ book }) {
    return (
        <li key={book.id}>
            {book.title}
        </li>
    );
}
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/books'> Books </Link>
                </li>
                <li>
                    <Link to='/books/new'> Add a Book </Link>
                </li>
            </ul>
        </div>
    )
}
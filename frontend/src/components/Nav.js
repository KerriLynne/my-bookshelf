import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
           {/* <ul>
               <li>
                   <Link to='/'> Home </Link>
               </li>
               <li>
                   <Link to='/books'> Books </Link>
               </li>
               <li>
                   <Link to='/books/new'> Add a Book </Link>
               </li>
               <li>
                   <Link to='/books/bookshelf'> My Bookshelf </Link>
               </li>
           </ul> */}
        </div>
    )
}

// export default function Home() {
//     return (

//     <nav class="mainmenu">
//         <div class="container">
//             <div class="dropdown">
//                 <button type="button" class="navbar-toggle" data-toggle="dropdown"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
//                 <a data-toggle="dropdown" href="/#">Dropdown trigger</a>
//                 <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
//                     <li><Link to='/'> Home </Link></li>
//                     <li><Link to='/books'> Books </Link></li>
//                     <li><Link to='/books/new'> Add a Book </Link></li>
//                     <li><Link to='/books/bookshelf'> My Bookshelf </Link></li>
//                 </ul>
//             </div>
//         </div>
//     </nav>

//     )
// }
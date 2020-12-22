//add function to get book by ID here?

import { showBookshelf } from "../redux/actions/bookActions";
// import Book from './Book';
import React from "react";
import { connect } from "react-redux";
import BookshelfItem from "./BookshelfItem";
// import { BsArrowRepeat } from "react-icons/bs";
// import { FiClock } from "react-icons/fi";
// import { AiOutlineCheckCircle } from "react-icons/ai";

class Bookshelf extends React.Component {

    componentDidMount() {
        console.log("component did mount was called bookshelf")
        this.props.showBookshelf();
    }


    
    // render() {
    //     const inprogress = this.props.books.map(book => {
    //         return (
    //             <BookListItem key={book.id} book={book}/>
    //         )
    //     })
    //     return(
    //         <ul>
    //           {inprogress}
    //         </ul>
    //       );
    // }

    render() {
        console.log(this.props)
        if (!this.props.bookshelves)
            return (
                <div>
                    <h1>Loading bookshelves</h1>
                </div>
            )
        // return (
        //     <div>
        //         <h1 className="title">Your Bookshelf</h1>
        //         {/* {this.props.bookshelves.length} */}
        //         {this.props.bookshelves.map((bookshelf) => (
        //         <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />
        //         ))}
        //     </div>
        // )
        return (
            <div>
                <h1 className="text-center title">Your Bookshelf</h1>
                {/* {this.props.bookshelves.length} */}
                <div class="row">
                {this.props.bookshelves.map((bookshelf) => (
                /* <div class="col-sm-4 col-sm-offset-2">    */
                <div class="col-sm-4">   
                <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />
                </div>
                ))}
                </div>
            </div>
        )
    }
}

/* <section class="section" id="about">
	<div class="container">
	
		<h2 class="text-center title">About me</h2>
		<div class="row">
			<div class="col-sm-4 col-sm-offset-2">    
				<h5><strong>Where's my lorem ipsum?<br></strong></h5>
				<p>Well, here it is: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ullam, ducimus, eaque, ex autem est dolore illo similique quasi unde sint rerum magnam quod amet iste dolorem ad laudantium molestias enim quibusdam inventore totam fugit eum iusto ratione alias deleniti suscipit modi quis nostrum veniam fugiat debitis officiis impedit ipsum natus ipsa. Doloremque, id, at, corporis, libero laborum architecto mollitia molestiae maxime aut deserunt sed perspiciatis quibusdam praesentium consectetur in sint impedit voluptates! Deleniti, sequi voluptate recusandae facere nostrum?</p>    
			</div>
			<div class="col-sm-4">
				<h5><strong>More, more lipsum!<br></strong></h5>    
				<p>Tempore, eos, voluptatem minus commodi error aut eaque neque consequuntur optio nesciunt quod quibusdam. Ipsum, voluptatibus, totam, modi perspiciatis repudiandae odio ad possimus molestias culpa optio eaque itaque dicta quod cupiditate reiciendis illo illum aspernatur ducimus praesentium quae porro alias repellat quasi cum fugiat accusamus molestiae exercitationem amet fugit sint eligendi omnis adipisci corrupti. Aspernatur.</p>    
				<h5><strong>Author links<br></strong></h5>    
				<p><a href="http://be.net/pozhilov9409">Behance</a> / <a href="https://twitter.com/serggg">Twitter</a> / <a href="http://linkedin.com/pozhilov">LinkedIn</a> / <a href="https://www.facebook.com/pozhilov">Facebook</a></p>
			</div>
		</div>
	</div>
</section> */






const mapStateToProps = ({ books }) => {
    //destructiure books and return an object where book is the key but books.all is the value 
    //(book index receoves a prop called books which will be equal to books.all and will be available to us as a prop)
    return {
        // books: books.all,
        bookshelves: books.bookshelves
    };
};

export default connect(mapStateToProps, { showBookshelf } )(Bookshelf);
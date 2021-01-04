//add function to get book by ID here?

// import { showBookshelf } from "../redux/actions/bookActions";
import React from "react";
// import { connect } from "react-redux";
// import BookshelfItem from "./BookshelfItem";

class IncrementClick extends React.Component {

    state = {
        count: 0
    }

    increment = () => {
        // let newCount = this.state.count + 1
        // this.setState({
        //     count: newCount
        // })

        console.log('a');

        fetch(`http://localhost:3001/booksfdjkdsjflkdsjfkldsjfs`)
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp)
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e');

        // a, e, d
    }

    

    render() {
        // console.log(this.props)
        // if (!this.props.bookshelves)
        //     return (
        //         <div>
        //             <h1>Loading bookshelves</h1>
        //         </div>
        //     )

        return (
            <div>
                <button onClick={this.increment} >Click Me </button>
                {this.state.count}
            </div>
        )
    }
}






// const mapStateToProps = ({ books }) => {
//     return {
//         bookshelves: books.bookshelves
//     };
// };

export default (IncrementClick);
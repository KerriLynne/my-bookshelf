
import React from "react";


class IncrementClick extends React.Component {

    state = {
        count: 0
    }

    increment = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })


        // tested at end of review:
        // console.log('a');

        // fetch(`http://localhost:3001/booksfdjkdsjflkdsjfkldsjfs`)
        //     .then(resp => {
        //         if(resp.status !== 200) {
        //             throw new Error(resp.statusText);
        //         }
        //         console.log('b', resp)
        //         return resp.json();
        //     })
        //     .then(data => console.log('c', data))
        //     .catch(errors => console.log('d', errors))

        // console.log('e');

        // a, e, d

        // tested at end of review:
    }

    

    render() {

        return (
            <div>
                <button onClick={this.increment} >Click Me </button>
                {this.state.count}
            </div>
        )
    }
}


export default (IncrementClick);
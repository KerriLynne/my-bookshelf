import React from 'react'
import { connect } from "react-redux"


function Book( book ) {

    return (
        <div>
            {book.title}
            {/* <button><FaRegTrashAlt onClick={submitDelete} style={{curser: "pointer"}}/></button> */}
        </div>
    );
}

export default connect()(Book)
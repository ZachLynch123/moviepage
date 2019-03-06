import React from 'react';

const Review = (props) => {
    

    if (props.data.length === 0) {
        return <h3>No reviews yet =(</h3>
    }
    else {
        return(
            <div>Hello from Review</div>
        );
    }
}

export default Review;
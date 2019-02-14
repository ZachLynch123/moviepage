import React from 'react';

const Trailers = (props) => {
    const BASE_URL = 'https://www.youtube.com/embed/'

    const { key } = props.data;
    return(
        
        <iframe title="1" width="420" height="190" src={BASE_URL+key}></iframe>
    );
}

export default Trailers;
import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: escape(window.location.pathname.split('/').slice(-1)[0])
        }
    }
    

    render() {
        console.log(this.props.location);
        return(
            <div>Hello from Search</div>
        )
    }
}

export default Search;
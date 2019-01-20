import React from 'react';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.pathname.slice(-6),
            backdrop: '',
            poster: '',
            title: '',
            genres: [],
            overview: '',
            voteAverage: 0,
            isLoaded: false
        }
}

async getDetails() {
    try {
        const data = await fetch(`
        https://api.themoviedb.org/3/movie/${this.state.id}?api_key=f8be595d434ed3dc41d8c73f0760f653&language=en-US`);
        const jsonData = await data.json();
        console.log(jsonData);
        

    } catch(e) {
        console.log(e);
        
    }
}

componentDidMount() {
    this.getDetails();
}

    render() {
        return(
            <div>
            <h1 className="red">hello world!</h1>
            </div>
        )
    }
}


export default Details
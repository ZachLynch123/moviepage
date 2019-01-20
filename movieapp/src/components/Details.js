import React from 'react';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backdropUrl: 'https://image.tmdb.org/t/p/original',
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
        this.setState({
            backdrop: jsonData.backdrop_path,
            poster: jsonData.poster_path,
            title: jsonData.original_title,
            genres: jsonData.genres,
            overview: jsonData.overview,
            voteAverage: jsonData.vote_average,
            isLoaded: true
        });
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
            <img src={this.state.backdropUrl + this.state.backdrop} alt="hi"></img>
            </div>
        )
    }
}


export default Details
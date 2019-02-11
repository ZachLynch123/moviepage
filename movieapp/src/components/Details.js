import React from 'react';
import './styles.css'

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
        console.log(this.props.match.params);
        
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
        const headerStyle = {
            background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(https://image.tmdb.org/t/p/original${this.state.backdrop}) center top no-repeat rgb(255, 255, 255)`
        }
        return(
            <div className="item-details">
            <div className="item-details-header" style={headerStyle}>

            </div>
            </div>
        )
    }
}


export default Details
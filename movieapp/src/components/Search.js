import React from 'react';
import keys from '../keys';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: unescape(window.location.pathname.split('/').slice(-1)[0]),
        }
    }


    componentDidMount() {
        this.getMovieList();
    }

    async getMovieList() {
         try {
             const data = await fetch(`
             https://api.themoviedb.org/3/search/movie?api_key=${keys.apiKey}&language=en-US&query=${this.state.movie}&page=1&include_adult=false`);
             const jsonData = await data.json();
             console.log(this.state.movie);
             
             console.log(jsonData.results);
             

         } catch (e) {
             console.log(e);
         }
    }
    

    render() {
        return(
            <div>Hello from Search</div>
        )
    }
}

export default Search;
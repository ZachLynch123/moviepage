import React from 'react';
import keys from '../../keys';
import Navbar from '../Navbar';
import SearchResults from './SearchResults'
import Footer from '../Footer';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieSearched: unescape(window.location.pathname.split('/').slice(-1)[0]),
            movieArray: []
        }
    }


    componentDidMount() {
        this.getMovieList();
    }

    async getMovieList() {
         try {
             const data = await fetch(`
             https://api.themoviedb.org/3/search/movie?api_key=${keys.apiKey}&language=en-US&query=${this.state.movieSearched}&page=1&include_adult=false`);
             const jsonData = await data.json();             
             console.log(jsonData.results);
             this.setState({
                 movieArray: jsonData.results
             })
             

         } catch (e) {
             console.log(e);
         }
    }
    

    render() {
        const { movieArray, movieSearched } = this.state;
        return(
            <div>
                <Navbar />
                <h1>Results for {movieSearched}</h1>
                <hr />
                <div className="search-results-main">
                    {
                        movieArray.map((movie, key) => 
                            <SearchResults data={movie} />
                        )
                    }
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default Search;
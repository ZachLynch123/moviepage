import React, { Component } from 'react';
import axios from 'axios';
import keys from '../keys';
import settings from '../sliderSettings';
import NavBar from './Navbar';
import Slider from 'react-slick'
import Footer from './Footer'
import MovieImageSlider from './MovieImageSlider';
import Header from './Header'
import { Link, Redirect } from 'react-router-dom';

class Home extends Component {
state = {
    upcoming: [],
    nowPlaying: [],
    topRated: [],
    movieId: 0,
    genres: [],
    isLoaded: false,
    BASE_URL: 'https://image.tmdb.org/t/p/original',
    searchMovie: '',
    redirect: false
  }

  setMovieId = id => {
    this.setState({
      movieId: id
    })
  }

  // put every keystroke into state's search key
  handleSearch = event => {
    this.setState({
      searchMovie: event.target.value
    });
    console.log(this.state.searchMovie);
    
  }

  // sets state of redirect to true to handle submit
  handleSubmit = event => {
    event.preventDefault();
    console.log('SUBMITTED');
    this.setState({
      redirect: true
    })
    
    return <Link to={`search/${this.state.searchMovie}`}/>
  }

  // React lifecycle component (initial) that fetches all the data needed on this page in 1 axious request
  componentDidMount() {
    axios.all([
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1`),
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keys.apiKey}&language=en-US`),
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${keys.apiKey}&language=en-US&page=1`)
    ])
      .then(axios.spread((upcomingRes, nowPlayingRes, topRatedRes) => {
        const upC = upcomingRes.data.results;
        const nowPlay = nowPlayingRes.data.results;
        const topRate = topRatedRes.data.results;  
        this.setState({
          upcoming: upC,
          nowPlaying: nowPlay,
          topRated: topRate,
          isLoaded: true
        });
        
               
      }));

 
      
  }
  render() {
    const { isLoaded, nowPlaying, topRated, upcoming } = this.state;
    if (isLoaded){
      // Uses react router redirect to mount search component
      if(this.state.redirect) {
        return <Redirect to={{
          pathname: `/search/${this.state.searchMovie}`,
          data: this.state.searchMovie
        }} />
      }
      
    return (
      <div className="App">
      {/* <NavBar value={this.state.searchMovie} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} /> */}
      <Header data={nowPlaying} setMovieid={this.setMovieId} />      

        <div className="container">
          <h2 style={{'marginTop': '20px'}}>UPCOMING</h2>
          <Slider {...settings.defaultSetting}>
          {
              upcoming.map(movie => <MovieImageSlider data={movie} key={movie.id}/>
              
                )
          }
          </Slider>
          <h2>TOP RATED</h2>
          <Slider {...settings.defaultSetting}>
          {
            topRated.map(movie => <MovieImageSlider data={movie} key={movie.id} />)
          }
          </Slider>
           </div>
          <Footer />
      </div>

    );
          } else {
            return(<div>loading...</div>)
          }
}

}

export default Home;

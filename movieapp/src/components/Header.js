import React from 'react'
import { Carousel } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        const BASE_URL = "https://image.tmdb.org/t/p/original";
        return(
          <Carousel id="header" showControles={false} showIndicators={false}>
          {
            this.props.data.map((movie, index) => <Carousel.Item>
              <a href={`/details/movie/${movie.id}`}><img src={BASE_URL + movie.backdrop_path} alt="" /></a>
              <Carousel.Caption>
                <h4>Latest</h4>
                <h3>{movie.title}</h3>
                <h4>{movie.vote_average}</h4>
              </Carousel.Caption>
            </Carousel.Item>)
          }
        </Carousel>
        )
    }
}


export default Header;
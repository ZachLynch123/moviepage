import React from 'react'
import { Carousel } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        const BASE_URL = "https://image.tmdb.org/t/p/original";
        console.log(this.props.data.backdrop_path)
        return(
              <Carousel.Item>
                <img width={900} height={500} alt="img/test.jpg" src={BASE_URL + this.props.data.backdrop_path} />
                <Carousel.Caption>
                  <h3>{this.props.data.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
        )
    }
}


export default Header;
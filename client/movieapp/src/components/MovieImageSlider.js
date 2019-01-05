import React from 'react';
import { CarouselItem, Col } from 'mdbreact';
import './styles.css';


const MovieImageSlider = (props) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w780";
    const { backdrop_path, id, poster_path, title, voter_average} = props.data;
    let {index} = props.index;
    console.log(props.index % 4)
    // https://mdbootstrap.com/docs/react/advanced/carousel/

    return (
        <CarouselItem itemId={props.index}>
            <Col md="4">
                <div className="card" id="card">
                    <img className="card-img-top" src={BASE_URL + poster_path} alt="#" />
                    <div className="card-title">
                        {title}
                    </div>
                    <div className="card-body">genre goes here</div>
                </div>
            </Col>
        </CarouselItem>
    );
    
}
export default MovieImageSlider;
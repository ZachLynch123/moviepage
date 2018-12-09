import React, { Component } from 'react';
/* import { Carousel } from 'react-bootstrap';
 */import axios from 'axios';
import keys from './keys';
import './App.css';
import MovieImageSlider from './components/MovieImageSlider';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText,
Button } from "mdbreact";


class App extends Component {

  state = {
    upcoming: [],
    nowPlaying: [],
    topRated: [],
    genres: [],
    isLoaded: false,
    index: 0,
    BASE_URL: 'https://image.tmdb.org/t/p/original'
  }

  // Sets new index for carousel, moving it to the right by 1
  nextMovie = (movieArray) => {
    if (this.state.index >= 20) {
      // use setState instead of mutating state directly
      this.state.index = 0;
    }
    const newIndex = this.state.index + 1;
    let [first, ...rest] = movieArray;
    let movies = [...rest, first];
    this.setState({
      index: newIndex,
      upcoming: movies
    });
    console.log(this.state.index);

  }

  previousMovie = (movieArray) => {
    const newIndex = this.state.index - 1;
    let last = movieArray.slice(-1);
    let rest = movieArray.slice(0,-1);
    let movies = [last, ...rest];
    this.setState({
      index: newIndex,
      movieArray: movies
    });
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
        })

      }));

      
  }
  render() {
    const { index, isLoaded, nowPlaying, topRated, upcoming } = this.state;
    let x = 1;
    if (isLoaded){
    return (
      <div className="App">
     {/*  <button onClick={() => this.previousMovie(topRated)}>Prev</button>
      <button onClick={() => this.nextMovie(topRated)}>Next</button> */}


      <Container>
        <Carousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
                <Col md="4">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="2">
                <Col md="4">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="3">
                <Col md="4">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>
      </div>
    );
          } else {
            return(<div>loading...</div>)
          }
}

}

export default App;
/*  style={
            {
               'transform': `translateX(-${index*(100/upcoming.length) + 3}%)`
           }
          }>
          {
              upcoming.map(movie => <MovieImageSlider data={movie} key={movie.id}/>)
           }*/
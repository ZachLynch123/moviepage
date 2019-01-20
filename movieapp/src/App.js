import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import axios from 'axios';
import keys from './keys';
import Slider from 'react-slick'
import './App.css';
import Footer from './components/Footer'
import MovieImageSlider from './components/MovieImageSlider';
import Details from './components/Details';
import Header from './components/Header'
import Home from './components/Home'


class App extends Component {
  render() {
    return(
      <Home />
    )
  }
  
}


export default App;

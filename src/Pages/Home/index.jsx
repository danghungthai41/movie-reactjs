import React, { Component } from "react";
import { Fragment } from "react";
import Banner from "../../Component/Banner";
import Carousel from "../../Component/Carousel";
import Header from "../../Component/Header";
import MovieList from "../../Component/MovieList";
import News from "../../Component/News";
import ShowTime from "../../Component/ShowTimeHome";
import Layout from "../../HOCS/layout";
import img from "../../Theme/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../../Component/Loading";

class Home extends Component {
  // settings = {
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
    
  // };
  render() {

    return (
      <div>
        <Carousel />
       
        <MovieList />
        <ShowTime />
        <News />

        <Banner/>

      </div>
    );
  }
}

export default Home;

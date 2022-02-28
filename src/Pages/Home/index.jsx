import React, { Component } from "react";
import Banner from "../../Component/Banner";
import Carousel from "../../Component/Carousel";
import MovieList from "../../Component/MovieList";
import News from "../../Component/News";
import ShowTime from "../../Component/ShowTimeHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoHome } from "react-icons/io5";
import BookingMobile from "../../Component/Carousel/BookingMobile";
import useWindowSize from "../../HOCS/useWindowSize";

const Home = () => {
  const isMobile = useWindowSize();
  return (
    <div>
      <Carousel />
      {isMobile.width <= 992 && <BookingMobile />}
      <MovieList />
      <ShowTime isMobile={isMobile}/>
      <News />
      <Banner />
    </div>
  );
};

export default Home;

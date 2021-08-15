import React from "react";
import Carousel from "../Carousel/Carousel";
import FeaturedMovies from "./FeaturedMovies/FeaturedMovies";
import data from "../../data/db";
import FeaturedTvShows from "./FeaturedTvShows/FeaturedTvShows";
import SpotlightBanner from "./SpotlightBanner/Banner";

const featuredMovies = data.FeaturedMovies;
const featuredTvShows = data.FeaturedTvShows;

const HomePage = ({ allData }) => {
  return (
    <div style={{ minHeight: "500px" }}>
      <Carousel allData={allData} />
      <FeaturedMovies featuredMovies={featuredMovies} />
      <FeaturedTvShows featuredTvShows={featuredTvShows} />
      <SpotlightBanner />
    </div>
  );
};

export default HomePage;

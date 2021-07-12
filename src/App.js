import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobileNav from "./components/MobileNav/MobileNav";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import RegistrationForm from "./components/Registration/RegistrationForm";
import SignIn from "./components/SignIn/SignIn";
import data from "./data/db";
import MovieListing from "./components/MoviListing/MovieListing";
import MovieDetails from "./components/MoviListing/MovieDetail";
import "./data/db";
import TvListing from "./components/TvListing/TvListing";
import TvDetails from "./components/TvListing/TvDetail";
import FeaturedTvDetail from "./components/HomePage/FeaturedTvShows/FeaturedTvDetail";
import FeaturedMovieDetail from "./components/HomePage/FeaturedMovies/FeaturedMovieDetail";

const movies = data.Movies;
const tvShows = data.TVShows;
const featuredTv = data.FeaturedTvShows;
const featuredMovie = data.FeaturedMovies;
// import { posts } from "./newData";

export default function App() {
  const allData = data;
  // console.log(posts);

  return (
    <div>
      {/* <img src={posts[0].img} /> */}
      {/* <img src={`./images/Tv/image/${data.Tv[0].img_name}.jpg`} /> */}
      <BrowserRouter>
        <Header className="topNave" />
        <MobileNav cassName="mobileNav" />
        <div style={{ minHeight: "600px" }}>
          <Switch>
            <Route path="/" exact>
              <HomePage allData={allData} style={{ position: "relative" }} />
            </Route>
            <Route path="/about" />
            <Route path="/sign-up">
              <RegistrationForm />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/movies">
              <MovieListing data={allData} />
            </Route>
            <Route exact path="/tv">
              <TvListing data={allData} />
            </Route>
            <Route path="/contact" />
            <Route path="/seach" />
            <Route exact path="/movies/:id">
              <MovieDetails movie={movies} />
            </Route>
            <Route exact path="/tv/:id">
              <TvDetails tvShows={tvShows} />
            </Route>
            <Route exact path="/featuredTv/:id">
              <FeaturedTvDetail featuredTv={featuredTv} />
            </Route>
            <Route exact path="/featuredMovie/:id">
              <FeaturedMovieDetail featuredMovie={featuredMovie} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

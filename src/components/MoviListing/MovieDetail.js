import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";

// const MovieDetail = ({ movie }) => {
//   console.log(movie);
//   const { id } = useParams();
//   console.log(id);
  // const movieDetail = movie.filter((m) => {
  //   return m.id === id;
  // });s
  // console.log(movieDetail);

  const MovieDetail = ({ movie }) => {
    const { id } = useParams();
    const movieDetail = movie.filter((m) => {
      return m.id === id;
    });




  const MovieDetail = movie.filter((m) => {
    console.log(id);
    return m.id === id;
  });
  console.log(movieDetail);
  const fields = [];
  for (let i = 1; i <= 5; i++) {
    fields.push(<StarIcon id={i} key={i} style={{ color: "orange" }} />);
  }

  return (
    <div className="main_container">
      {movieDetail.map((m) => {
        return (
          <>
            <div>
              <img src={m.img_name} alt={m.name} className="movieImage" />
            </div>
            <div>
              <h1>{m.name}</h1>
              <p>Adventure | 2020</p>
              {fields}
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gridGap: "5px",
                }}
              >
                <Button variant="outlined" color="primary">
                  Trailer
                </Button>
                <Button variant="outlined" color="primary">
                  List
                </Button>
                <Button variant="outlined" color="primary">
                  Redeem
                </Button>
              </div>
              <p>{m.description}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gridGap: "5px",
                }}
              >
                <Button variant="contained" color="primary">
                  Rent ${m.rent}
                </Button>
                <Button variant="contained" color="primary">
                  Buy ${m.purchase}
                </Button>
              </div>
            </div>
            <div>
              <img src={m.poster_name} alt={m.name} className="img" />
            </div>
          </>
        );
      })}
    </div>
  );
};
export default MovieDetail;

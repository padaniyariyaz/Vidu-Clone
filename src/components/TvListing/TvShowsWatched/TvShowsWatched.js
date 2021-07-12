import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import data from "../../../data/db";
import { Link } from "react-router-dom";

const tvShows = data.TVShows;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "500px"
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function TvShows({ tvShows }) {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container spacing={3}>
        {tvShows.map((movie) => {
          return (
            <Grid key={movie.id} item xs={4}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/tv/${movie.id}`}
                tvShows={tvShows}
              >
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={movie.img_name}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {movie.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

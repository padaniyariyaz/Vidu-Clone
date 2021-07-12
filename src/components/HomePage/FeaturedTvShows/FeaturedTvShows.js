import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import data from "../../../data/db";

const tvShows = data.TVShows;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    maxWidth: 345,
    backgroundColor: "#333399"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function FeaturedTvShows({ featuredTvShows, featuredTv }) {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <h1 style={{ padding: "10px" }}>Featured Tv Shows</h1>
      <Grid container style={{ justifyContent: "center" }}>
        {featuredTvShows.map((movie) => {
          return (
            <Grid
              key={movie.id}
              item
              xs={5}
              sm={35}
              md={2}
              style={{ margin: "5px" }}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={`/featuredTv/${movie.id}`}
                featuredTv={featuredTv}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={movie.img_name}
                    title="Paella dish"
                  />
                  <CardContent style={{ height: "80px" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      style={{ fontWeight: 600 }}
                    >
                      {movie.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      style={{ fontWeight: 600 }}
                    >
                      ${movie.purchase}
                    </Typography>
                  </CardContent>

                  {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse> */}
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

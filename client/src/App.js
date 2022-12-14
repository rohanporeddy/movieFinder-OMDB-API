import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import movieImage from "../src/images/movieImage.jpg";
import useStyles from "./styles";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Movie Finder
        </Typography>
        <img
          classNmae={classes.image}
          src={movieImage}
          alt="movieImage"
          height="120"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

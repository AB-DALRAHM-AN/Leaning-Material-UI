import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Button,
  Grid,
  CssBaseline,
  Toolbar,
  Container,
  styled,
  Collapse,
  Avatar,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButtonProps } from "@material-ui/core/IconButton";

import useStyles from './Styles'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const App = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae
              accusamus dicta odit saepe rem dolorem cum suscipit.
            </Typography>
            <div>
              <Container maxWidth="md" className={classes.PostsContainer}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  className={classes.Buttons}
                >
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my Posts
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Upload new Posts
                    </Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Card sx={{ maxWidth: 150 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            style={{ backgroundColor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image="https://source.unsplash.com/random"
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>Method:</Typography>
                          <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering,
                            add saffron and set aside for 10 minutes.
                          </Typography>
                          <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a
                            large, deep skillet over medium-high heat. Add
                            chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes.
                            Transfer shrimp to a large plate and set aside,
                            leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt
                            and pepper, and cook, stirring often until thickened
                            and fragrant, about 10 minutes. Add saffron broth
                            and remaining 4 1/2 cups chicken broth; bring to a
                            boil.
                          </Typography>
                          <Typography paragraph>
                            Add rice and stir very gently to distribute. Top
                            with artichokes and peppers, and cook without
                            stirring, until most of the liquid is absorbed, 15
                            to 18 minutes. Reduce heat to medium-low, add
                            reserved shrimp and mussels, tucking them down into
                            the rice, and cook again without stirring, until
                            mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t
                            open.)
                          </Typography>
                          <Typography>
                            Set aside off of the heat to let rest for 10
                            minutes, and then serve.
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item></Grid>
                </Grid>
              </Container>
            </div>
          </Container>
            <div>
              <Container maxWidth="md" className={classes.cardsContainer}>
                <Grid container spacing={4}>
                  {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.cardsContainer}>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          alt="random"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Heading
                          </Typography>
                          <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint, quibusdam.
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">View</Button>
                          <Button size="small">Edit</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
        </div>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          A.A.A
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          all rights reserved 2021 @ A.A.A  |  Terms of Service | Privacy Policy
        </Typography>
      </footer>
    </>
  );
};

export default App;

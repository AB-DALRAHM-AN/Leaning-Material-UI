import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  PostsContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  Buttons: {
    marginBottom: "20px",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardsContainer: {
    marginTop: "30px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    padding: "20px 0",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  }
}));

export default useStyles;

import React from "react";
import {
  makeStyles,
  Button,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import BackgroundImage from "../illustrations/question_background_image.svg";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "400px 400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "98% 100%",
  },
  title: {
    fontFamily: "Luckiest Guy",
    fontSize: "5vh",
  },
  inputBox: {
    fontFamily: "Roboto Mono",
    fontSize: "15px",
    borderRadius: "10px",
    outline: "none",
    background: "#FF6363",
    color: "white",
    maxWidth: "70vw",
    minWidth: "70vw",
    padding: "10px",
    "&::placeholder": {
      fontFamily: "Roboto Mono",
      fontWeight: "300",
      fontSize: "20px",
      textAlign: "center",
      transform: "translateY(4vh)",
    },
    marginBottom: "10px",
  },
  steps: {
    display: "block",
    fontFamily: "Roboto Mono",
    marginBottom: "20px",
    color: "grey",
  },
  button: {
    fontFamily: "Roboto Mono",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

function Question({ title, placeholder, count, setSteps, steps }) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      
    >
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      <TextareaAutosize
        rows={10}
        className={classes.inputBox}
        placeholder={placeholder}
      />
      <Typography variant="span" className={classes.steps}>
        Step Left - {count}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        onClick={()=>{setSteps(steps+1)}}
      >
        next
      </Button>
    </div>
  );
}

export default Question;

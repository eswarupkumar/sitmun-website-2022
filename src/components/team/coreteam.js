import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from "../common/Heading";
import D_genoios from "../../img/Director General OIOS.jpeg";
import sec_gen from "../../img/Secretary General.jpg";
import d_gen from "../../img/Director General.jpg";
import cda from "../../img/CHARGE D' AFFAIRS.jpg";
import dsg from "../../img/Deputy Secretary General(Annada Gumansingh).jpg";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import CardComponent from "../common/card";
import CardComponent2 from "../common/card2";

const useStyles = makeStyles({
  gridContainer: {
    left: 0,
    top: 0,
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  root: {
    minWidth: 340,
    maxWidth: 340,
    transition: "transform 0.15s ease-in-out",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
});

function CoreTeam() {
  const CoreTeam = [
    {
      name: "Isha Bharadwaj",
      img: sec_gen,
      desg: "Secretary General",
    },
    {
      name: "Annada Gumansingh",
      img: dsg,
      desg: "Deputy Secretary General",
    },
    {
      name: "Nikita Behera",
      img: d_gen,
      desg: "Director General",
    },
  ];
  const CoreTeam2 = [
    {
      name: "Soumya Kanta Panda",
      img: cda,
      desg: "Charge D’ Affairs",
    },
    {
      name: "Sanjog Samuel Samantaray",
      img: D_genoios,
      desg: "Director General OIOS",
    },
  ];
  const classes = useStyles();
  const clickMe = (event) => {
    console.log(event);
  };
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
  return (
    <div>
      <Heading head="Core Team" />
      <Container fluid m={4} p={4}>
        <Grid container spacing={6} className={classes.gridContainer}>
          <CardComponent details={CoreTeam} />
        </Grid>
        <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent2 details={CoreTeam2} />
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default CoreTeam;

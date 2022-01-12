
import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from "../common/Heading";
import usg_dm from "../../img/USG(Digital Marketing).jpg";
import D_dm from "../../img/Director(DigitalMarketing).jpg";
import { useState } from "react";
import dummy from "../../img/d1.jpg";
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

function Webteam() {
  const CoreTeam = [
    {
      name: "E Swarup Kumar",
      img: usg_dm,
    },
    {
      name: "Swaugat Beura",
      img: D_dm,
    },
    {
      name: "Smruti Dash",
      img: dummy,
    },
  ];
  const CoreTeam2 = [
    {
      name: "Partha Sarathi Praharaj",
      img: dummy,
    },
    {
      name: "Raj Kishore Patra",
      img: dummy,
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
      <Heading head="Web-Dev Team" />
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

export default Webteam;

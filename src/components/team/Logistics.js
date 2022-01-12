import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from "../common/Heading";
import { useState } from "react";
import USG_log1 from "../../img/USG (Logistics).jpg";
import USG_log2 from "../../img/IMG-20220106-WA0019.jpg";
import D_log from "../../img/Director (logistics).jpg";
import DD_log from "../../img/Deputy Director (Logistics).JPG";
import Container from "react-bootstrap/Container";
import CardComponent from "../common/card";
import CardComponent3 from "../common/card3";

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

function SponsorshipTeam() {
  const logistic = [
    {
      name: "Swastik Senapati",
      img: USG_log1,
      desg: "Under Secretary General",
    },
    {
      name: "Durgashish Panigrahi",
      img: USG_log2,
      desg: "Under Secretary General",
    },
    {
      name: "Sumeet Parida",
      img: D_log,
      desg: "Director",
    },
  ];
  const logistic1 = [
    {
      name: "Devidutta Sahoo",
      img: DD_log,
      desg: "Deputy Director",
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
      <Heading head="Logistics" />
      <Container fluid m={4}>
        <Container fluid m={4}>
          <Grid container spacing={9} className={classes.gridContainer}>
            <CardComponent details={logistic} />
          </Grid>
        </Container>
        <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent3 details={logistic1} />
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default SponsorshipTeam;

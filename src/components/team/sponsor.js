import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from "../common/Heading";
import { useState } from "react";
import USG_spon from "../../img/USG (Sponsorship).jpg";
import D_spon1 from "../../img/Director(Sponsorship).jpeg";
import D_spon2 from "../../img/Director Sponsorship.jpg";
import DD_spon from "../../img/Deputy Director Sponsorship.jpg";
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
  const sponsorteam = [
    {
      name: "Nikhil Mohanty",
      img: USG_spon,
      desg: "Under Secretary General",
    },
    {
      name: "Prabhudatta Mishra",
      img: D_spon1,
      desg: "Director",
    },
    {
      name: "Avinash Prasad",
      img: D_spon2,
      desg: "Director",
    },
  ];
  const sponsorteam1 = [
    {
      name: "Pratyush Ranjan Pani",
      img: DD_spon,
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
      <Heading head="Sponsorship" />
      <Container fluid m={4}>
        <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent details={sponsorteam} />
          </Grid>
        </Container>
        <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent3 details={sponsorteam1} />
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default SponsorshipTeam;

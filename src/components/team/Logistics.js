import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from '../common/Heading';
import D_genoios from "../../img/Director General OIOS.jpeg";
import sec_gen from "../../img/Secretary General.jpg";
import d_gen from "../../img/Director General.jpg";
import cda from "../../img/CHARGE D' AFFAIRS.JPG";
import dsg from "../../img/Deputy Secretary General(Annada Gumansingh).jpg";
import { useState } from "react";
import dummy from "../../img/d1.jpg";
import USG_log from "../../img/IMG-20220106-WA0019.jpg"
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
    const logistic=[
        {
          name:"Swastik Senapati",
          img:dummy,
          desg:"Under Secretary General"
        },
        {
          name:"Durgashish Panigrahi",
          img:USG_log,
          desg:"Under Secretary General"
        },
        {
          name:"Sumeet Parida",
          img:dummy,
          desg:"Director"
        }
      ];
      const logistic1=[
        {
          name:"Devidutta Sahoo",
          img:DD_log,
          desg:"Deputy Director"
        }
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
        <div >
            <Heading head="Logistics" />
            <Container fluid m={4}>
        <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent details={logistic}/>  
          </Grid>
        </Container>
        <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent3 details={logistic1}/>  
          </Grid>
        </Container>
      </Container>
            
        </div>
    )
}

export default SponsorshipTeam;
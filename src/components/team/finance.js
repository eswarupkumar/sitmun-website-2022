import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from '../common/Heading';
import { useState } from "react";
import Container from "react-bootstrap/Container";
import CardComponent3 from "../common/card3";
import D_finance from "../../img/Director Finance (Auditor).jpg";


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

function Finance() {
    const fiannce=[
        {
            name:"Akash Pandit",
            img:D_finance,
            desg:"Director"
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
            <Heading head="Finance" />
            <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent3 details={fiannce}/>  
          </Grid>
      </Container>
            
        </div>
    )
}

export default Finance;
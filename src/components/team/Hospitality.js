import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from '../common/Heading';
import { useState } from "react";
import dummy from "../../img/d1.jpg";
import Container from "react-bootstrap/Container";
import CardComponent2 from "../common/card2";
import D_hosp from "../../img/Director (Hospitality).jpg";


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

function Hospitality() {
    
const hospitality=[
    {
      name:"Aakansha Sharma",
      img:dummy,
      desg:"Director"
    },
    {
      name:"Sai Jyotirmayee Rout",
      img:D_hosp,
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
            <Heading head="Hospitality" />
            <Container fluid m={4}>
          <Grid container spacing={6} className={classes.gridContainer}>
            <CardComponent2 details={hospitality}/>  
          </Grid>
      </Container>
            
        </div>
    )
}

export default Hospitality;
import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from '../common/Heading';
import { useState } from "react";
import Container from "react-bootstrap/Container";
import CardComponent from "../common/card";
import usg_da from "../../img/USG(Delegate Affairs).jpg";
import D_da from "../../img/Director del affairs.jpg";
import DD_da from "../../img/Deputy Director(Del Affairs).jpg";


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

function DATeam() {
    const daTeam=[
        {
          name:"Sparsha Acharya",
          img:usg_da,
          desg:"Under Secretary General"
        },
        {
          name:"Geetansa",
          img:D_da,
          desg:"Director"
        },
        {
          name:"Sreelaxmi Sukhari",
          img:DD_da,
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
            <Heading head="Delegate Affairs" />
            <Container fluid m={4} p={4}>
              <Grid container spacing={6} className={classes.gridContainer}>
             
                <CardComponent details={daTeam}/>  
                
              </Grid>
                
            </Container>
            
        </div>
    )
}

export default DATeam;
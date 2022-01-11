import Grid from "@mui/material/Grid";
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { useState } from 'react';
import img from "../../img/logo.png";


const useStyles=makeStyles({
  gridContainer: {
    left: 0,
    top: 0,
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  root: {
    minWidth: 340,
    maxWidth: 340,
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
});

const CardComponent = (props) => {

  const classes=useStyles();

  const [state, setState] = useState({
    raised:false,
    shadow:1,
    
  })
  
  return (
    <>
    {props.details.map((value,index)=>(
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      className={classes.outerColumn}
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Barlow', sans-serif",
        marginTop:"10px"
      }}
    >
    <Card
      sx={{
        minWidth: 310,
        maxWidth: 340,
        elevation: 10,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        borderRadius: 5,
        boxShadow: 20,
      }}>
      <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={value.img}
            alt="green iguana"
            object-fit="cover"
          />
          <CardContent style={{ backgroundColor: "#29A0D3" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="white"
              style={{ fontFamily: "Barlow"}}
            >
              {value.name}
            </Typography>
            <Typography variant="body2" color="white" style={{ fontFamily: "Barlow",fontSize:"16px"}}>
              {value.desg}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    ))};
    </>
    
  );
};
export default CardComponent;
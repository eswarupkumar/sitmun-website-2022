import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from "../../img/munkee.png";
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import img from "../../img/logo.png";


const useStyles=makeStyles({
  gridContainer:{
    left:0,
    top:0,
    paddingLeft:'30px',
    paddingRight:'30px',
  },
  root: {
    maxWidth: 410,
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  }
});
const CardComponent = ( props ) => {
  const card = this.props.card;
  const classes=useStyles();
  const clickMe = (event) => {
    console.log(event);
  }

  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  return (
    <Card sx={{ maxWidth: 350 }} className={classes.root} classes={{root: state.raised ? classes.cardHovered : ""}} onMouseOver={()=>setState({ raised: true, shadow:3})} onMouseOut={()=>setState({ raised:false, shadow:1 })} raised={state.raised} zdepth={state.shadow} onClick={(event) => {clickMe(event)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={card.img}
          alt="green iguana"
        />
        <CardContent style={{backgroundColor: "#29A0D3"}}>
          <Typography gutterBottom variant="h5" component="div" color="white" >
            {card.title}
          </Typography>
          <Typography variant="body2" color="white">
            {card.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardComponent;
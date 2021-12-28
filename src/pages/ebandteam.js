import Navbar from "../components/common/navbar";
import "../css/ourteam.css";
import Grid from "@mui/material/Grid";
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import img1 from "../img/d1.jpg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from "../img/logo.png";
import img2 from "../img/team.svg";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";
import { useState} from "react";



const useStyles=makeStyles({
  gridContainer:{
    left:0,
    top:0,
    paddingLeft:'30px',
    paddingRight:'30px',
  },
  root: {
    maxWidth: 310,
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  }
});
function EbandTeampage() {
  const classes=useStyles();
  const clickMe = (event) => {
    console.log(event);
  }
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  return (
    <div>
      <Navbar />  
      <ScrollTop />
        <section className='heroeb' >
          <Row>
            <Col>
            <Container fluid>
            <div className="row">
              
              <div className="col-sm-6 d-flex align-item-center justify-content-center">
                <img className='img-fluid' src={img2} alt=""></img>
              </div>
              <div className="col-sm-6 d-flex flex-column text-center align-item-center justify-content-center">
                <div className="headerText">Our Team </div>
                <div className="taglineText">United we stand divided we fall</div>  
              </div>
            </div>
            </Container>
            </Col>
          </Row>
          
        </section>
        <br></br>
        <br></br>
        <br></br>

        <Container><div className="GalleryHeading"><center>Team Gallery</center></div></Container>

        <br></br>
        <br></br>
        <br></br>
        <Container fluid m={4}>
          <Grid container spacing={6}  className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4} className={classes.outerColumn} style={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ maxWidth: 350,elevation: 10, ':hover': {boxShadow: 20},borderRadius: 5,boxShadow:8}} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image={img}
                    alt="green iguana"
                  />
                  <CardContent style={{backgroundColor: "#29A0D3"}}>
                    <Typography gutterBottom variant="h5" component="div" color="white" >
                      Munkee
                    </Typography>
                    <Typography variant="body2" color="white">
                      Munkee are a widespread group of squamate reptiles
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.outerColumn} style={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ maxWidth: 350,elevation: 10, ':hover': {boxShadow: 20},borderRadius: 5,boxShadow:8 }} >
                <CardActionArea >
                  <CardMedia
                  component="img"
                  height="350"
                  image={img1}
                  alt="green iguana"
                  />
                <CardContent style={{backgroundColor: "#29A0D3"}}>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    Munkee
                  </Typography>
                  <Typography variant="body2" color="white">
                    Munkee are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.outerColumn} style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 350,elevation: 10, ':hover': {boxShadow: 20},borderRadius: 5,boxShadow:8 }} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={img}
                  alt="green iguana"
                />
                <CardContent style={{backgroundColor: "#29A0D3"}}>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    Munkee
                  </Typography>
                  <Typography variant="body2" color="white">
                    Munkee are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.outerColumn} style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 350,elevation: 10, ':hover': {boxShadow: 20},borderRadius: 5,boxShadow:8 }} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={img}
                  alt="green iguana"
                />
                <CardContent style={{backgroundColor: "#29A0D3"}}>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    Munkee
                  </Typography>
                  <Typography variant="body2" color="white">
                    Munkee are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.outerColumn} style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 350,elevation: 10, ':hover': {boxShadow: 20},borderRadius: 5,boxShadow:8}} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={img1}
                  alt="green iguana"
                />
                <CardContent style={{backgroundColor: "#29A0D3"}}>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    Munkee
                  </Typography>
                  <Typography variant="body2" color="white">
                    Munkee are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          
        </Grid>     
          </Container>
        <br></br>
        <br></br>
        <br></br>
      <Footer />
    </div>
  );
}

export default EbandTeampage;




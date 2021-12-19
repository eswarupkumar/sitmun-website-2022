import Navbar from "../components/common/navbar";
import "../css/ourteam.css";
import Grid from "@mui/material/Grid";
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import img1 from "../img/d1.jpg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from "../img/logo.png";
import img2 from "../img/team.svg";
import Footer from "../components/common/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';



const useStyles=makeStyles({
  gridContainer:{
    left:0,
    top:0,
    paddingLeft:'60px',
    paddingRight:'60px'
  }
});
function EbandTeampage() {
  const classes=useStyles();
  return (
    <div>
      <Navbar />  
      <section className='heroeb' >
        <Container fluid>
          <Row>
            <Col>
            <Container fluid>
            <div className="row">
              <div className="col-sm-6 d-flex flex-column text-center align-item-center justify-content-center">
                <h1 className="headerText" >Our Team</h1>           
              </div>
              <div className="col-sm-6 d-flex align-item-center justify-content-center">
                <img className='img-fluid' src={img2} alt=""></img>
              </div>
            </div>
            </Container>
            </Col>
          </Row>
        </Container>
          
        </section>
        <br></br>
        <br></br>
        <br></br>

        <Container><h1 className="GalleryHeading"><center>Team Gallery</center></h1></Container>

        <br></br>
        <br></br>
        <br></br>
        <div className='container-fluid'>
          <Container fluid>
          <Grid container spacing={6} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4} >
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
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
            <Grid item xs={12} sm={6} md={4} >
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea >
                  <CardMedia
                  component="img"
                  height="400"
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
          <Grid item xs={12} sm={6} md={4} >
          <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
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
          <Grid item xs={12} sm={6} md={4} >
          <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={img1}
                  p="20"
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
          <Grid item xs={12} sm={6} md={4} >
          <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
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
        </Grid>     
          </Container>
         
        
      </div>
      <Footer />
    </div>
  );
}

export default EbandTeampage;

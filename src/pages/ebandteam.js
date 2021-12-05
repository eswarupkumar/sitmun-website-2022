import Navbar from "../components/common/navbar";
import "../css/ourteam.css";
import Grid from "@mui/material/Grid";
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from "../img/d1.jpg";
import img from "../img/logo.png";


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
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Our Team
          </h1>
          <h2 class="hero-subtitle">
            United We Stand Divided We Fall
          </h2>
          {/* <button type="button" class="hero-button" onclick="location.href='tours.html'">teamtour &raquo;</button> */}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <h1><center>Team Section</center></h1>

      <br></br>
      <br></br>
      <br></br>
      <div className='teamContainer'>
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
        
      </div>

    </div>
  );
}

export default EbandTeampage;

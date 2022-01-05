import Navbar from "../components/common/navbar";
import "../css/ourteam.css";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img2 from "../img/team.svg";
import { CardActionArea } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import usg_pr from "../img/USG(PR).jpg";
import D_pr from "../img/Director(PR).jpg";
import DD_pr from "../img/Deputy Director (Public Relations) .jpg";
import usg_da from "../img/USG(Delegate Affairs).jpg";
import D_da from "../img/Director del affairs.jpg";
import DD_da from "../img/Deputy Director(Del Affairs).jpg";
import D_spon from "../img/Director(Sponsorship).jpeg";
import DD_spon from "../img/Deputy Director Sponsorship.jpg";
import D_finance from "../img/Director Finance (Auditor).jpg";
import usg_cd from "../img/USG (Creativity and Designing).jpg";
import D_cd from "../img/Director (Creativity and Designing).jpg";
import usg_dm from "../img/USG(Digital Marketing).jpg";
import D_dm from "../img/Director(Digital Marketing).jpg";
import D_eb from "../img/Director(EB affairs).png";
import D_eb1 from "../img/Director (EB Affairs).JPG";
import D_hosp from "../img/Director (Hospitality).jpg";
import D_genoios from "../img/Director General OIOS.jpeg";
import dummy from "../img/d1.jpg";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";
import { useState } from "react";
import UnderLine from "../components/common/UnderLine";

const useStyles = makeStyles({
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
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
});
function EbandTeampage() {
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
      <Navbar />
      <ScrollTop />
      <section className="heroeb">
        <Row>
          <Col>
            <Container fluid>
              <div className="row">
                <div className="col-sm-6 d-flex align-item-center justify-content-center">
                  <img className="img-fluid" src={img2} alt=""></img>
                </div>
                <div className="col-sm-6 d-flex flex-column text-center align-item-center justify-content-center">
                  <div className="headerText">Our Team </div>
                  <div className="taglineText">
                    United we stand divided we fall
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </section>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        <div className="GalleryHeading">
          <center>Team Gallery</center>
        </div>
        <UnderLine></UnderLine>
      </Container>

      <br></br>
      <br></br>
      <br></br>
      <Container fluid m={4}>
        <Grid container spacing={6} className={classes.gridContainer}>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Isha Bharadwaj
                  </Typography>
                  <Typography variant="body2" color="white">
                    Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Annada Gumansingh
                  </Typography>
                  <Typography variant="body2" color="white">
                    Deputy Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Nikita Behera
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Soumya Kanta Panda
                  </Typography>
                  <Typography variant="body2" color="white">
                    Charge D’ Affairs
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_genoios}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Sanjog Samuel Samantaray
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director General OIOS
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Container>
            <div className="TeamHeading">
              <center>Creativity and Designing</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={usg_cd}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Debadutta Pattanayak
                  </Typography>
                  <Typography variant="body2" color="white">
                    Under Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_cd}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Manasi Sahoo
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Container>
            <div className="TeamHeading">
              <center>Delegate Affairs</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={usg_da}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Sparsha Acharya
                  </Typography>
                  <Typography variant="body2" color="white">
                    Under Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_da}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Geetansa
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={DD_da}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Sreelaxmi Sukhari
                  </Typography>
                  <Typography variant="body2" color="white">
                    Deputy Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Container>
            <div className="TeamHeading">
              <center>Finance</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={11.8}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_finance}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Akash Pandit
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Container>
            <div className="TeamHeading">
              <center>Sponsorship</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Nikhil Mohanty
                  </Typography>
                  <Typography variant="body2" color="white">
                    Under Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_spon}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Prabhudatta Mishra
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Avinash Prasad
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={12}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={DD_spon}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Pratyush Ranjan Pani
                  </Typography>
                  <Typography variant="body2" color="white">
                    Deputy Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          

          <Container>
            <div className="TeamHeading">
              <center>Digital Marketing</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={usg_dm}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    E Swarup Kumar
                  </Typography>
                  <Typography variant="body2" color="white">
                    Under Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_dm}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Swaugat Beura
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Container>
            <div className="TeamHeading">
              <center>Logistics</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Swastik Senapati
                  </Typography>
                  <Typography variant="body2" color="white">
                    Under Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Durgashish Panigrahi
                  </Typography>
                  <Typography variant="body2" color="white">
                    Under Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Sumeet Parida
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={12}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Devidutta Sahoo
                  </Typography>
                  <Typography variant="body2" color="white">
                    Deputy Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Container>
            <div className="TeamHeading">
              <center>Public Relations</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={usg_pr}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Smaraki Praharaj
                  </Typography>
                  <Typography variant="body2" color="white">
                    Under Secretary General
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_pr}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Arpita Mohanty
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={DD_pr}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Monalisha
                  </Typography>
                  <Typography variant="body2" color="white">
                    Deputy Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          

          <Container>
            <div className="TeamHeading">
              <center>Hospitality</center>
            </div>
            <UnderLine></UnderLine>
          </Container>
          
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_hosp}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Aakansha Sharma
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={dummy}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Sai Jyotirmayee Rout
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          

          <Container>
            <div className="TeamHeading">
              <center>EB Affairs</center>
            </div>
            <UnderLine></UnderLine>
          </Container>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_eb}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Sonam Acharya
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.outerColumn}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                minWidth: 340,
                maxWidth: 340,
                elevation: 10,
                ":hover": { boxShadow: 20 },
                borderRadius: 5,
                boxShadow: 8,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={D_eb1}
                  alt="green iguana"
                />
                <CardContent style={{ backgroundColor: "#29A0D3" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                  >
                    Nishtha Das
                  </Typography>
                  <Typography variant="body2" color="white">
                    Director
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

import React,{useState} from "react";
import "../../css/gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UnderLine from "../common/UnderLine";
import { Modal } from "react-bootstrap";
import Italy from "../../img/Italy.png";
import mountain from "../../img/mountain.jpg";
import mountain2 from "../../img/mountain2.jpg";
import mountain3 from "../../img/mountain3.jpg";
import mountain4 from "../../img/mountain4.webp";
import mountain5 from "../../img/mountain5.jpg";
import mountain6 from "../../img/mountain6.jpg";
import mountain7 from "../../img/mountain7.webp";
import mountain8 from "../../img/mountain8.jpg";
import mountain9 from "../../img/mountain9.jpeg";
import mountain10 from "../../img/mountain10.jpg";
import mountain11 from "../../img/mountain11.jpg";
import mountain12 from "../../img/mountain12.jpg";
import mountain13 from "../../img/mountain13.jpeg";
import mountain14 from "../../img/mountain14.jpg";
// import { tns } from "./node_modules/tiny-slider/src/tiny-slider"
export default function Gallery() {
  
  return (
    <div className="gallery">
      <h2>GALLERY</h2>
      <UnderLine />
      <div className="container">

        <div class="row m-sm-2">
          <div class="col-sm m-sm-2 d-flex justify-content-center ">
            <img src={Italy} alt="p1"  />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain} alt="p2" />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain2} alt="p3"  />
          </div>
        </div>

        <div class="row m-sm-2">
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain3} alt="p4"  />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain4} alt="p5" />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain5} alt="p6" />
          </div>
        </div>

        <div class="row m-sm-2">
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain6} alt="p7"  />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain7} alt="p8"  />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain9} alt="p9" />
          </div>
        </div>

        <div class="row m-sm-2">
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain10} alt="p10" />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain11} alt="p11" />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain12} alt="p12" />
          </div>
        </div>

        <div class="row m-sm-2">
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain13} alt="p13" />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain14} alt="p14"  />
          </div>
          <div class="col-sm m-sm-2 d-flex justify-content-center">
            <img src={mountain8} alt="p15" />
          </div>
        </div>
      </div>

    </div>
  );
}


{/* <Modal className="modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><img src={img}/></Modal.Body>
      </Modal> */}



  // let data = [
  //   {
  //     id: 1,
  //     imgSrc: Italy,
  //   },
  //   {
  //     id: 2,
  //     imgSrc: mountain,
  //   },
  //   {
  //     id: 3,
  //     imgSrc: mountain2,
  //   },
  //   {
  //     id: 4,
  //     imgSrc: mountain3,
  //   },
  //   {
  //     id: 5,
  //     imgSrc: mountain4,
  //   },
  //   {
  //     id: 6,
  //     imgSrc: mountain5,
  //   },
  //   {
  //     id: 7,
  //     imgSrc: mountain6,
  //   },
  //   {
  //     id: 8,
  //     imgSrc: mountain7,
  //   },
  //   {
  //     id: 9,
  //     imgSrc: mountain8,
  //   },
  //   {
  //     id: 10,
  //     imgSrc: mountain9,
  //   },
  //   {
  //     id: 11,
  //     imgSrc: mountain10,
  //   },
  //   {
  //     id: 12,
  //     imgSrc: mountain11,
  //   },
  //   {
  //     id: 13,
  //     imgSrc: mountain12,
  //   },
  //   {
  //     id: 14,
  //     imgSrc: mountain13,
  //   },{
  //     id: 15,
  //     imgSrc: mountain14,
  //   }
  // ];
  // const [show, setShow] = useState(false);
  // let img;
  // // const [tempimgSrc, setTempImgSrc] = useState("");
  // const handleClose = () => setShow(false);
  // const handleShow = (imgSrc) => {
  //   img=imgSrc;
  //   setShow(true);
  // } 
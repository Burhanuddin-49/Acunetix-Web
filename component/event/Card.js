import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../event/ModuleReadMore";
// import "./Card.css";
import { data } from "../event/eventdata";
import IndividualIntervalsExample from "./Carousel";

export default function cards2() {
  const [modalShow, setModalShow] = useState(false);
  const [ModalData, setModalData] = useState("");

  return (
    <>
      <title>ACUNETIX 10.0 | Events</title>
      <div className="container">
        {/* <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src="https://drive.google.com/uc?export=view&id=1cI4tLK2RyyDv0EKRi_J6-S07FyPuOWzK"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="image/event.jpg" className="d-block w-100" alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>
        <IndividualIntervalsExample />
      <div className="bodyEvent">
        <div className="containerEvent">
          <div className="headingEvent">
            <h2>Here are all the Amazing Events</h2>
          </div>

          {data.map((data) => (
            <div className="cardEvent" key={data.id}>
              <div className="box">
                <div className="content">
                  <div>
                    <img src={data.img} alt="" />
                  </div>
                  <h4>{data.name}</h4>
                  <h6>{data.date}</h6>
                  <Button
                    className="more"
                    variant="primary"
                    onClick={() => {
                      setModalData(data);
                      setModalShow(true);
                    }}
                  >
                    Read More
                  </Button>
                  <Button
                    href={data.eventlink}
                    target="_blank"
                    className="register"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MyVerticallyCenteredModal
          eventname={ModalData.name}
          eventdetail={ModalData.eventdetail}
          eventsubline={ModalData.eventsubline}
          eventlink={ModalData.eventlink}
          eventdate={ModalData.date}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

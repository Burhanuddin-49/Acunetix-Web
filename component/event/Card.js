import Link from "next/link";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../event/ModuleReadMore";
// import "./Card.css";
import { data } from "../event/eventdata";

export default function cards2() {
  const [modalShow, setModalShow] = useState(false);
  const [ModalData, setModalData] = useState("");

  return (
    <>
      <div className="container">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
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
        </div>
      </div>
      <div className="bodyEvent">
        <div className="containerEvent">
          <div className="headingEvent">
            <h2>Here are all the Amazing Events</h2>
          </div>

          {data.map((data) => (
            <div className="cardEvent" key={data.id}>
              <div className="box">
                <div className="content">
                  <img src={data.img} alt="" />
                  <h4>{data.date}</h4>
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
                  <Button href="/event" className="register">
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
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

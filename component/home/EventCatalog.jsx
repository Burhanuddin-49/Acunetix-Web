import { Button } from "@mui/material";
import React from "react";
// import "./styles/EventCatalog.css";
// import event from "/public/image/event.jpg";
import { useRouter } from "next/router";
import Carousel from "../home/Carousel";

const EventCatalog = () => {
  const { push } = useRouter();
  return (
    <div className="EventCatalog">
      <div className="split2 left2">
        {/* <div
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
        </div> */}
        <Carousel />
      </div>
      <div className="split2 right2">
        <h1>Event Catalog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          explicabo est esse ipsum tempore at consequatur, doloremque omnis,
          laudantium tenetur quis, tempora velit inventore totam dignissimos
          sint asperiores dolorem facere ut eius rem. Asperiores cumque amet
          libero recusandae voluptatem minima rem deleniti maxime dolorem
          facere. Ducimus quod excepturi iure dolore!
        </p>
        <Button style={{ backgroundColor: "black", color: "white" }}>
          <div push="/event">Events</div>
        </Button>
        {/* <Link to="/event">
          <Button style={{ backgroundColor: "black", color: "white" }}>
            Events
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default EventCatalog;

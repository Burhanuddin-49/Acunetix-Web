import React from "react";
// import "./Card.css";

export default function cards2() {
  const data = [
    { id: 1, name: "game", img: "image/event.jpg", date: "2 Dec" },
    { id: 2, name: "game", img: "image/event.jpg", date: "2 Dec" },
    { id: 3, name: "game", img: "image/event.jpg", date: "2 Dec" },
    { id: 3, name: "game", img: "image/event.jpg", date: "2 Dec" },
    { id: 3, name: "game", img: "image/event.jpg", date: "2 Dec" },
    { id: 3, name: "game", img: "image/event.jpg", date: "2 Dec" },
    { id: 3, name: "game", img: "image/event.jpg", date: "2 Dec" },
  ];

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
            <div className="cardEvent">
              <div className="box">
                <div className="content">
                  <img src={data.img} alt="" />
                  <h4>{data.date}</h4>
                  <a href="/event" className="more">
                    Read more
                  </a>
                  <a href="/event" className="register">
                    Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

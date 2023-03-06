import { data } from "@/component/event/eventdata";
import React from "react";
// import "./Sponsor.css";

const sponsorData = [
  {
    id: 1,
    name: "QLTAAS",
    img: "image/qltaas.png",
    subline: "QUICK LEARNER TRAINING ACADEMY & SOLUTION",
    details: "",
  },
  {
    id: 2,
    name: "CRTC",
    img: "image/crtc.png",
    subline: "",
    details: "",
  },
  {
    id: 3,
    name: "LEMON",
    img: "image/lemon.png",
    subline: "FLY LEMON TRAVEL & FOREX PVT. LTD.",
    details: "",
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor">
      <title>ACUNETIX 10.0 | Sponsors</title>
      <div className="sponsor-title">
        <h1>Sponsors</h1>
      </div>
      <div className="card_collection">
        {sponsorData.map((data) => (
          <div className="service-block-two">
            <div className="inner-box card">
              <div className="spon_type">{data.name}</div>
              <div className="shape-one"></div>
              <div className="shape-two"></div>
              <div>
                <a href="/">
                  <div className="spon_name">{data.name}</div>
                  <img
                    src={data.img}
                    className="spon_img"
                    alt="Sponsors Logo"
                  />
                </a>
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eius ad maiores, soluta cumque omnis aspernatur ea
                totam, quibusdam dolore accusantium ratione neque! Dignissimos
                doloribus esse blanditiis, pariatur deleniti similique!
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;

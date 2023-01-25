import { Telegram } from "@mui/icons-material";
import React from "react";
// import "./styles/Footer.css";
// import aces from "image/aces.jpeg";
// import csi from "image/CSI.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid py-4 border-3 border-danger footer">
        <div className="row">
          <div className="col">
            <h3 className="text-center py-4">ACUNETIX 10.0</h3>
            <div className="container">
              <div className="row">
                <div className="col-md-6 py-3">
                  <div className="map-container">
                    <iframe
                      title="this is unique title"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.910758697476!2d73.81383121489428!3d18.62308328734934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b860d63876d1%3A0x9bccd5081468bc36!2sDr.%20D.%20Y.%20Patil%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1665319094709!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6 ml-5">
                  <div className="contact-us">
                    <div className="contact-header">
                      <h3 className="footer-widget-heading">Contact</h3>
                    </div>
                    <h5>Burhanuddin +9199999999</h5>
                    <h5>Burhanuddin +9199999999</h5>
                  </div>
                  <div className="subscribe">
                    <div className="footer-widget">
                      <div className="footer-widget-heading">
                        <h3>Subscribe</h3>
                      </div>
                      <div className="footer-text mb-25">
                        <p>
                          Don’t miss to subscribe to our new events, kindly fill
                          the form below.
                        </p>
                      </div>
                      <div className="subscribe-form">
                        <form action="/">
                          <input
                            type="email"
                            name="Email"
                            placeholder="Email Address"
                          />
                          <button>
                            <Telegram className="icon-bg" />
                          </button>
                        </form>
                        <span>Thanks You For Subscribing!</span>
                      </div>
                      <div className="created-website">
                        {/* <p>
                    Created By{" "}
                    <a href="https://www.linkedin.com/in/burhanuddin49/">
                      Burhanuddin Marcha &
                    </a>
                  </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center py-3"
        style={{ backdropFilter: "blur(100px)", color: "white" }}
      >
        ©2022 Team Acunetix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
// import "./styles/About.css";
// import img1 from "/image/A1.png";
// import img2 from "/image/A2.png";
// import img3 from "/image/A3.png";
// import img4 from "/image/A4.png";
// import img5 from "/image/A5.png";
// import img6 from "/image/A6.png";
// import img7 from "/image/A7.png";

const About = () => {
  if (typeof window === "object") {
    // code is running in a browser environment
    document.addEventListener("mousemove", parallax);
  }
  function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
      var moving_value = move.getAttribute("datavalue");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }
  return (
    <div className="about">
      <div className="split left">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quidem placeat facere excepturi ipsa cum quod, consequuntur blanditiis
          perferendis saepe enim ab cumque ipsam molestiae eum! Voluptatibus
          voluptate illo expedita alias atque praesentium temporibus
          exercitationem molestias dolore assumenda consequatur, facilis
          sapiente, veniam ad nostrum incidunt, sunt possimus nam? Libero, at.
        </p>
      </div>
      <div className="split right container1">
        <img src="/image/A1.png" className="object" datavalue="-2" alt="" />
        <img
          src="/image/A2.png"
          className="object"
          datavalue="2"
          loading="lazy"
          alt=""
        />
        <img src="/image/A3.png" className="object" datavalue="5" alt="" />
        <img
          src="/image/A5.png"
          className="object"
          datavalue="-5"
          loading="lazy"
          alt=""
        />
        <img
          src="/image/A4.png"
          className="object"
          datavalue="4"
          loading="lazy"
          alt=""
        />
        <img
          src="/image/A6.png"
          className="object"
          datavalue="6"
          loading="lazy"
          alt=""
        />
        <img src="/image/A7.png" className="object" datavalue="3" alt="" />
      </div>
    </div>
  );
};

export default About;

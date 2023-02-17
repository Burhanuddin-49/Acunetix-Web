import { Button } from "@mui/material";
import React from "react";
// import "./styles/EventCatalog.css";
import { useRouter } from "next/router";
import Link from "next/link";
import IndividualIntervalsExample from "../event/Carousel";

const EventCatalog = () => {
  const { push } = useRouter();
  return (
    <div className="EventCatalog">
      <div className="split2 left2">
        <IndividualIntervalsExample />
      </div>
      <div className="split2 right2" style={{ letterSpacing: "2px" }}>
        <h1>Event Catalog</h1>
        <p>
          Acunetix 10.0
          <br />
          presents
          <br />
          METAVERSE
          <br />
          #TravelThroughVirtuality
          <br />
          Enter the realm of metaverse, find your avatar, and challenge yourself
          to participate and compete in various exciting events.
          <br />
        </p>
        <Button style={{ backgroundColor: "black", color: "white" }}>
          <Link href="/event">Events</Link>
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

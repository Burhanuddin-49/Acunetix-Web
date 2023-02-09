// import video from "../../video/mv1.mp4";
import About from "./About";
import Footer from "./Footer";
import Title from "./Title";
import EventCatalog from "./EventCatalog";
// import SponsorCatalog from "./SponsorCatalog";
const Layout = () => {
  return (
    <div className="body">
      <title>ACUNETIX 10.0 | Home</title>
      <div className="section">
        <Title />
        <About />
        <EventCatalog />
        {/* <SponsorCatalog /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

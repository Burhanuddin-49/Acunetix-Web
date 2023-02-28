// import video from "../../video/mv1.mp4";
import About from "./About";
import Footer from "./Footer";
import Title from "./Title";
import EventCatalog from "./EventCatalog";
// import SponsorCatalog from "./SponsorCatalog";
const Layout = () => {
  return (
    <div className="body">
      <title>ACUNETIX 10.0</title>
      <div className="section">
        <Title />
        <About />
        <EventCatalog />
        <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-7297047240840346"
          data-ad-slot="9130489177"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad>
        {/* <SponsorCatalog /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

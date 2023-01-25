import "../styles/home-styles/Home.css";
import "../styles/home-styles/About.css";
import "../styles/home-styles/Footer.css";
import "../styles/home-styles/Title.css";
import "../styles/home-styles/EventCatalog.css";
import "../styles/home-styles/Sponsor.css";
import "../styles/home-styles/Navbar.css";
import "../styles/index.css";
import "../styles/event/Event.css";
import "../styles/event/Card.css";
import "../styles/sponsors/Sponsor.css";
import Navbar from "../component/home/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <video autoPlay muted loop className="home-bg-video">
        <source src="/video/bg-1.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

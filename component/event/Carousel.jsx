import Carousel from "react-bootstrap/Carousel";
import { data } from "./eventdata";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      {data.map((data) => (
        <Carousel.Item interval={1000} key={data.id}>
          <img
            className="d-block w-100"
            src={data.img}
            alt="Second slide"
            loading="lazy"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.eventname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.eventsubline}</h4>
        <p>{props.eventdetail}</p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button href={props.eventlink} target="_blank">Register</Button>
      </Modal.Footer>
    </Modal>
  );
}

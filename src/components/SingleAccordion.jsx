import { Accordion } from "react-bootstrap";

function SingleAccordion({ title, content }) {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{content}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default SingleAccordion;

  import { Button, Form, Col, Row, } from 'react-bootstrap';

  function PrimerFormulario(personanombre) {
    function Click(){
      console.log(personanombre)
    }
    return(
      <Row>
        <Col>
        <Form.Label> Pspspspspsps</Form.Label>
        </Col>
        <Col>
        <Form.Control type='text' value={personanombre.personanombre}></Form.Control>
        </Col>
        <Col>
      <Button variant = "primary" > wato </Button> {''}
      </Col>
      </Row>
    );
}

  export default PrimerFormulario;
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import shortId from "short-id";

const Work = () => {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(true);

  const createTask = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    let [title, description] = e.target.elements;
   title = title.value.trim();
    description= description.value.trim();
    setTasks([...tasks, {id: shortId.generate(), title, description}]);
    e.target.reset();
};

const handleToggleForm = () => {
    setShowForm(!showForm);
};

const showButtonMessage = () =>{
    if (showForm) {
        return "Ocultar Formulario";
    }else{
        return "Ver Formulario";
    }
};


  return (
    <Container>
      <Row>
        <Button onClick={handleToggleForm}> {showButtonMessage()}</Button>
        {showForm && (
            <Col md={6} xs={12}>
              <h3>Tasks</h3>
              <Form onSubmit={createTask}>
                <Form.Group>
                  <Form.Label>Titulo de la Tarea</Form.Label>
                  <Form.Control placeholder="Tarea" name="title" />
                </Form.Group>
    
                <Form.Group>
                  <Form.Label>Descripcion de la Tarea</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Descripcion"
                    name="Description"
                  />
                </Form.Group>
                <Button type="submit">Crear Tarea</Button>
              </Form>
            </Col>
        )}
      </Row>
    </Container>
  );
};

export default Work;

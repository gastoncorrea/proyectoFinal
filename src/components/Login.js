import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Fragment>
      <section className='container'>
          <div className='margen-superior py-3'>
              <h1>Logueate para encontrar el mejor contenido de esta web</h1>
          </div>
        <Form className='my-5'>
          <Form.Group controlId="email">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="gaston@djfhf.com" />
            <Form.Text className="text-muted mb-3">
                Requerimientos de contraseña:
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="contraseña" className='mt-3'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Escribe tu contraseña" className='mb-3' />
          </Form.Group>
          <Form.Group controlId="recordar">
            <Form.Check type="checkbox" label="Recordar contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit" className='mt-3'>
            Submit
          </Button>
        </Form>
      </section>
    </Fragment>
  );
};

export default Login;

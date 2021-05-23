import React from "react";
import { Fragment } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Suscripcion = () => {
  return (
    <Fragment>
      <Container>
        <section className='my-5 pt-5'>
          <div className='my-5'>
            <h1 className="display-1">
              Suscribite a la pagina de noticias y disfruta de maravillosos
              beneficios
            </h1>
          </div>
          <Form>
            <Form.Group controlId="nom-y-ap">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="Gaston Correa" />
            </Form.Group>
            <Form.Group controlId="email-suscripcion" className='my-3' >
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="gaston@correa.com" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="contraseña-suscripcion" className='my-3'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="check-termino">
              <Form.Check type="checkbox" label="Acepto los terminos y condiciones" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Suscribirme
            </Button>
          </Form>
        </section>
      </Container>
    </Fragment>
  );
};

export default Suscripcion;

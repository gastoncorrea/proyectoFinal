import { Button } from "react-bootstrap";
import React from "react";
import { Container, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Listact = () => {
  return (
    <Container className="my-5 py-5">
      <h1 className="display-1">
        Elija una categoria para poder ver las noticias o ingrese una nueva
        categoria
      </h1>
      <ListGroup as="ul" className="my-5">
        <ListGroup.Item as="li" active>
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Actualidad
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Espectaculo
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Tecnologia
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Deportes
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Politica
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Economia
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Salud
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link
            exact={true}
            to="/admin/ver-categoria/lista-categoria"
            className="text-dark nav-link"
          >
            Fotografia
          </Link>
        </ListGroup.Item>
      </ListGroup>
      <Form>
        <Form.Group controlId="agregar-categoria" className="my-3">
          <Form.Label>Agregar una nueva Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Si desea ingrese una nueva categoria"
          />
        </Form.Group>
        <Button className="btn btn-primary">Guardar</Button>
      </Form>
    </Container>
  );
};

export default Listact;

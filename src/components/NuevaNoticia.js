import { Button } from "react-bootstrap";
import React from "react";
import { Fragment } from "react";
import { Container, Form } from "react-bootstrap";

const NuevaNoticia = () => {
  return (
    <Fragment>
      <Container>
        <section className="my-5">
          <div className="my-5 pt-5">
            <h1 className="display-1">
              En está sección puede agregar una Noticia Nueva
            </h1>
          </div>
          <Form className="text-center">
            <Form.Group controlId="titulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aqui ingrese el titulo de la nueva noticia"
              />
            </Form.Group>
            <Form.Group controlId="titulo" className="my-3">
              <Form.Label>Subtitulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aqui ingrese una descripcion breve"
              />
            </Form.Group>
            <Form.Group controlId="categoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control as="select">
                <option value="actualidad">1- Actualidad</option>
                <option value="espectaculos">2- Espectaculos</option>
                <option value="tecnologia">3- Tecnologia</option>
                <option value="deportes">4- Deportes</option>
                <option value="politica">5- Politica</option>
                <option value="economia">6- Economia</option>
                <option value="salud">7- Salud</option>
                <option value="fotografia">8- Fotografia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="text-area" className="my-3">
              <Form.Label>Detalle de la noticia</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Form.Group controlId="link-imagen">
              <Form.Label>Link de la imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://picjumbo.com/wp-content/uploads/strawberry-ice-lollies"
              />
            </Form.Group>
            <Form.Group controlId="autor" className="mb-3">
              <Form.Label>Autor de la Noticia</Form.Label>
              <Form.Control type="text" placeholder="Gastón Correa" />
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" placeholder="DD-MM-AAAA" />
            </Form.Group>
            <Form.Group controlId="destacar" className="my-3 mx-auto text-start">
              <Form.Check type="checkbox" label="Destacar"/>
            </Form.Group>
            <Button className="btn btn-primary text-center my-3" type="submit">
              Guardar
            </Button>
          </Form>
        </section>
      </Container>
    </Fragment>
  );
};

export default NuevaNoticia;

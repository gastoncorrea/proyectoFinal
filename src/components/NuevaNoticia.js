import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Fragment } from "react";
import { Container, Form, Alert } from "react-bootstrap";

const NuevaNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [detalle, setDetalle] = useState("");
  const [link, setLink] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const [destacar, setDestacar] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      titulo.trim() === "" ||
      titulo.length > 120 ||
      subtitulo.trim() === "" ||
      subtitulo.length > 200 ||
      categoria === "" ||
      detalle.trim() === "" ||
      detalle.length > 2000 ||
      link.trim() === "" ||
      autor.trim() === "" ||
      autor.length > 30 ||
      fecha.trim() === ""
    ) {
      setError(true);
      console.log('error');
    } else {
      setError(false);
      console.log('no error')
    }
  };

  return (
    <Fragment>
      <Container>
        <section className="my-5">
          <div className="my-5 pt-5">
            <h1 className="display-1">
              En está sección puede agregar una Noticia Nueva
            </h1>
          </div>
          <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group controlId="titulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aqui ingrese el titulo de la nueva noticia"
                onChange={(e) => setTitulo(e.target.value)}
              />
              <Form.Text className="text-muted mb-3">
                El titulo debe contener entre 1 y 120 caracteres
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="titulo" className="my-3">
              <Form.Label>Subtitulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aqui ingrese una descripcion breve"
                onChange={(e) => {
                  setSubtitulo(e.target.value);
                }}
              />
              <Form.Text className="text-muted mb-3">
                El subtitulo debe contener entre 1 y 200 caracteres
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="categoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCategoria(e.target.value)}
              >
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
              <Form.Control
                as="textarea"
                rows={10}
                onChange={(e) => setDetalle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="link-imagen">
              <Form.Label>Link de la imagen</Form.Label>
              <Form.Control
                type="link"
                placeholder="https://picjumbo.com/wp-content/uploads/strawberry-ice-lollies"
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="autor" className="mb-3">
              <Form.Label>Autor de la Noticia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gastón Correa"
                onChange={(e) => setAutor(e.target.value)}
              />
              <Form.Text className="text-muted mb-3">
                El nombre del autor debe contener entre 1 y 30 caracteres
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder="DD-MM-AAAA"
                onChange={(e) => setFecha(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              controlId="destacar"
              className="my-3 mx-auto text-start"
            >
              <Form.Check
                type="checkbox"
                label="Destacar"
                value="ok"
                onChange={(e) => setDestacar(e.target.value)}
              />
            </Form.Group>
            <Button className="btn btn-primary text-center my-3" type="submit">
              Guardar
            </Button>
            {(error === true) ? (
              <Alert variant="warning">Verifique los campos </Alert>
            ):( null)}
          </Form>
        </section>
      </Container>
    </Fragment>
  );
};

export default NuevaNoticia;

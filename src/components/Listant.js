import React, { Fragment } from "react";
import { ListGroup, Container } from "react-bootstrap";
import NoticiaItem from "./NoticiaItem";

const Listant = (props) => {
  return (
    <Fragment>
      <Container className="my-5">
        <div className="pt-5 my-5 text-center">
          <h1>Estas son todas las noticias disponibles</h1>
        </div>
        <ListGroup className="my-5 pt-5">
          {props.productos.map((producto) => (
            <NoticiaItem
              producto={producto}
              key={producto.id}
              pedirDatos={props.pedirDatos}
            ></NoticiaItem>
          ))}
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default Listant;

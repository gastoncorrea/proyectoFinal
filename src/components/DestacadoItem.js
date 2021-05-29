import React from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";

const DestacadoItem = (props) => {
  return (
    <Fragment>
      <article className="mt-5 col-sm-12 col-lg-6 border">
        <header className="d-flex justify-content-center  titulo">
          <h1 className="display-4 align-self-center">
            {props.producto.titulo}
          </h1>
        </header>
        <main>
          <img
            src={props.producto.link}
            className="w-100 imagen"
            alt={props.producto.titulo}
          />
        </main>
        <footer className="pie d-flex align-items-center flex-column justify-content-between">
          <h3>{props.producto.subtitulo}</h3>
          <Button className="mb-3">Ver mas...</Button>
        </footer>
      </article>
    </Fragment>
  );
};

export default DestacadoItem;

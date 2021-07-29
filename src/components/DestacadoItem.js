import React from "react";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DestacadoItem = (props) => {
  return (
    <Fragment>
      <article className="mt-5 col-sm-12 col-lg-6 border">
        <header className="d-flex justify-content-center  titulo">
          <h2 className=" align-self-center">
            {props.producto.titulo}
          </h2>
        </header>
        <main className='my-3'>
          <img
            src={props.producto.link}
            className="w-100 imagen"
            alt={props.producto.titulo}
          />
        </main>
        <footer className="pie d-flex align-items-center flex-column justify-content-between">
          <h3>{props.producto.subtitulo}</h3>
          <Link to={`/detalle-noticia/${props.producto._id}`}>
          <Button className="mb-3">Ver mas...</Button>
          </Link>
        </footer>
      </article>
    </Fragment>
  );
};

export default DestacadoItem;

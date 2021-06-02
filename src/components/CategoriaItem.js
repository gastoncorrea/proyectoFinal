import React from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const CategoriaItem = (props) => {
  return (
    <article className="col-sm-12 col-lg-6 border mt-5">
      <header className="d-flex justify-content-center  titulo">
        <h2 className="display-4 align-self-center">{props.producto.titulo}</h2>
      </header>
      <body>
        <img
          src={props.producto.link}
          className="w-100 imagen"
          alt={props.producto.titulo}
        />
      </body>
      <footer className="pie d-flex align-items-center flex-column justify-content-between">
        <h3>{props.producto.subtitulo}</h3>
        <Link to={`/detalle-noticia/${props.producto._id}`}>
          <Button className="mb-3">Ver mas...</Button>
        </Link>
      </footer>
    </article>
  );
};

export default CategoriaItem;

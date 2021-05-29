import React from 'react';
import {Button} from 'react-bootstrap';

const CategoriaPcpal = (props) => {
    return (
        <article className="col-sm-12 col-lg-6 border mt-5">
          <header className="d-flex justify-content-center  titulo">
            <h2 className="display-3 align-self-center">{props.producto.titulo}</h2>
          </header>
          <main>
            <img
              src={props.producto.link}
              className="w-100 imagen"
              alt={props.producto.titulo}
            />
          </main>
          <footer className="pie d-flex align-items-center flex-column justify-content-between">
            <h3>
              {props.producto.subtitulo}
            </h3>
            <Button className="mb-3">Ver mas...</Button>
          </footer>
        </article>
    );
};

export default CategoriaPcpal;
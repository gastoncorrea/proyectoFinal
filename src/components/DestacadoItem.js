import React from 'react';
import { Fragment } from 'react';
import {Button} from 'react-bootstrap';

const DestacadoItem = (props) => {
    return (
        <Fragment>
        <header className="d-flex justify-content-center  titulo">
            <h1 className="display-3 align-self-center">
              Titulo destacado Nº1
            </h1>
          </header>
          <body>
            <img
              src="https://cdn.pixabay.com/photo/2017/07/14/18/57/horse-2504677_960_720.jpg"
              className="w-100 imagen"
              alt="Paisaje"
            />
          </body>
          <footer className="pie d-flex align-items-center flex-column justify-content-between">
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              itaque?
            </h3>
            <Button className="mb-3">Ver mas...</Button>
          </footer>
        </Fragment>
    );
};

export default DestacadoItem;
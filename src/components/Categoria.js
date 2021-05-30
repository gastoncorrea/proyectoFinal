import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import {useParams} from "react-router-dom";

const Categoria = () => {
  const categoria = useParams().nombre;
  const ultima = categoria.toUpperCase();
  return (
    <Fragment>
      <section className=" row container my-5">
        <div className="bg-primary text-light py-3 my-5 rounded col-sm-12">
          <h3 className="ms-4">{ultima}</h3>
        </div>
        <article className="col-sm-12 col-lg-6 border mt-5">
          <header className="d-flex justify-content-center  titulo">
            <h2 className="display-3 align-self-center">
              Titulo destacado Nº3
            </h2>
          </header>
          <body>
            <img
              src="https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_960_720.jpg"
              className="w-100 imagen"
              alt="Castillo"
            />
          </body>
          <footer className="pie d-flex align-items-center flex-column justify-content-between">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt
              quibusdam accusamus ratione numquam vero, ex enim fugiat minima ut
              sequi aliquid voluptates officiis blanditiis dolorem minus
              provident in. Temporibus qui neque doloribus porro dolorem aut. Et
              assumenda deleniti quibusdam.
            </h3>
            <Button className="mb-3">Ver mas...</Button>
          </footer>
        </article>
        <article className="col-sm-12 col-lg-6 mt-5 border">
          <header className="d-flex justify-content-center  titulo">
            <h2 className="display-3 align-self-center">
              Titulo destacado Nº3
            </h2>
          </header>
          <body>
            <img
              src="https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_960_720.jpg"
              className="w-100 imagen"
              alt="Castillo"
            />
          </body>
          <footer className="pie d-flex align-items-center flex-column justify-content-between">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt
              quibusdam accusamus ratione numquam vero, ex enim fugiat minima ut
              sequi aliquid voluptates officiis blanditiis dolorem minus
              provident in. Temporibus qui neque doloribus porro dolorem aut. Et
              assumenda deleniti quibusdam.
            </h3>
            <Button className="mb-3">Ver mas...</Button>
          </footer>
        </article>
        <div className="my-5 publicidad">
          <img
            src="https://picjumbo.com/wp-content/uploads/dividends-text-free-photo-2210x1473.jpg"
            className="w-100 h-50"
            alt="publicidad"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Categoria;

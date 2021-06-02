import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import DestacadoItem from "./DestacadoItem";
import CategoriaPcpal from "./CategoriaPcpal";

const principal = (props) => {
  return (
    <Fragment>
      <section className="row container my-5 d-flex text-center">
        <h1 className="my-5 border rounded margen-superior">
          Bienvenidos al portal de noticias que tiene la mejor información para
          vos.
        </h1>
        <div className="row">
          {props.productos.map((producto) =>
            producto.destacar === "ok" ? (
              <DestacadoItem
                producto={producto}
                key={producto._id}
              ></DestacadoItem>
            ) : null
          )}
        </div>
        <article className="col-sm-12 col-lg-6 border mt-5">
          <header className="d-flex justify-content-center  titulo">
            <h1 className="display-3 align-self-center">Publicidad</h1>
          </header>
          <main>
            <img
              src="https://images.pexels.com/photos/7819309/pexels-photo-7819309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="w-100 imagen"
              alt="Publicidad"
            />
          </main>
          <footer className="pie d-flex align-items-center flex-column justify-content-between">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              reprehenderit minus vel, sunt repellendus eveniet est officia quo
              rerum accusamus! Voluptates vel porro, facere perferendis
              voluptate corporis impedit reiciendis nisi deserunt voluptatibus
              fugit, architecto in quod doloribus dignissimos inventore ipsa!
            </h3>
            <Button className="mb-3">Ver mas...</Button>
          </footer>
        </article>
      </section>
      <section className="my-5 row container">
        <div className="bg-primary text-light py-3 my-3 rounded col-sm-12">
          <h3 className="ms-4" value="deportes">
            Deportes
          </h3>
        </div>
        <div className="row">
          {props.productos.map((producto) =>
            producto.categoria === "deportes" ? (
              <CategoriaPcpal
                producto={producto}
                key={producto._id}
              ></CategoriaPcpal>
            ) : null
          )}
        </div>
        <div className="bg-primary text-light py-3 my-3 rounded col-sm-12">
          <h3 className="ms-4">Actualidad</h3>
        </div>
        <div className="row">
          {props.productos.map((producto) =>
            producto.categoria === "actualidad" ? (
              <CategoriaPcpal
                producto={producto}
                key={producto._id}
              ></CategoriaPcpal>
            ) : null
          )}
        </div>
        <div className="my-2 publicidad">
          <img
            src="https://picjumbo.com/wp-content/uploads/dividends-text-free-photo-2210x1473.jpg"
            className="w-100 h-50"
            alt="publicidad"
          />
        </div>
        <div className="bg-primary text-light py-3 my-3 rounded col-sm-12">
          <h3 className="ms-4">Salud</h3>
        </div>
        <div>
          {props.productos.map((producto) =>
            producto.categoria === "salud" ? (
              <CategoriaPcpal
                producto={producto}
                key={producto._id}
              ></CategoriaPcpal>
            ) : null
          )}
        </div>
        <div className="my-2 publicidad">
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

export default principal;

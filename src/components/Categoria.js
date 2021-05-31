import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CategoriaItem from "./CategoriaItem";

const Categoria = (props) => {
  const categoria = useParams().nombre;
  const ultima = categoria.toUpperCase();
  return (
    <Fragment>
      <section className=" row container my-5">
        <div className="bg-primary text-light py-3 my-5 rounded col-sm-12">
          <h3 className="ms-4">{ultima}</h3>
        </div>
        <div className="row">
          {props.productos.map((producto) =>
            producto.categoria === categoria ? (
              <CategoriaItem
                producto={producto}
                key={producto.id}
              ></CategoriaItem>
            ) : null
          )}
        </div>

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

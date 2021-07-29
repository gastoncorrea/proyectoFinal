import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DestacadoItem from "./DestacadoItem";
import CategoriaPcpal from "./CategoriaPcpal";

const Principal = (props) => {
  /*
  const [datosApi, setDatosApi] = useState({});
  const URLApi =
    "api.openweathermap.org/data/2.5/weather?q=tucuman,032&units=metric&appid=7f8e36ec72fa9271dc1083c7362c20b0";

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const consulta = await fetch(
        "api.openweathermap.org/data/2.5/weather?q=tucuman,032&units=metric&appid=7f8e36ec72fa9271dc1083c7362c20b0on"
      );
      // const resultado = await consulta.json();
      if (consulta.status === 200) {
        // setDatosApi(resultado[0]);
        console.log("dentro el if");
      }
      // const resultado = await
    } catch (e) {
      console.log(e);
    }
  };
*/
  return (
    <Fragment>
      <section className="row container my-5 d-flex text-center mx-auto">
        <div className="my-5">
          <div></div>
        </div>
        <h1 className="display-4 my-5 border rounded margen-superior">
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
        <article className="col-sm-12 col-lg-6 mt-5 mx-auto">
          <main>
            <Link to="404">
              <img
                src="https://www.antevenio.com/wp-content/uploads/2017/06/coobis-es.jpg"
                className="w-100 imagen"
                alt="Publicidad"
              />
            </Link>
          </main>
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
        <div className="my-2 publicidad">
          <Link to="404">
            <img
              src="https://picjumbo.com/wp-content/uploads/dividends-text-free-photo-2210x1473.jpg"
              className="w-100 h-50"
              alt="publicidad"
            />
          </Link>
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
          <Link to="404">
            <img
              src="https://picjumbo.com/wp-content/uploads/dividends-text-free-photo-2210x1473.jpg"
              className="w-100 h-50"
              alt="publicidad"
            />
          </Link>
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
          <Link to="404">
            <img
              src="https://picjumbo.com/wp-content/uploads/dividends-text-free-photo-2210x1473.jpg"
              className="w-100 h-50"
              alt="publicidad"
            />
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Principal;

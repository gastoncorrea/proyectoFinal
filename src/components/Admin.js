import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Fragment>
      <section>
        <div className="margen-superior py-5 mt-5 text-center">
          <h1>Buenos días administrador</h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 my-5 text-center">
            <h4>Ver Listas de noticias</h4>
            <Link exact={true} to="/admin/lista-noticia/">
              <img
                src="https://media.istockphoto.com/photos/a-woman-using-and-typing-on-laptop-with-blank-white-desktop-screen-picture-id1160505836"
                alt=""
                className="w-75"
              />
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 my-5 text-center">
            <h4>Ver Listas de categorias</h4>
            <Link exact={true} to="/admin/ver-categoria">
              <img
                src="https://media.istockphoto.com/photos/using-blank-white-screen-laptop-picture-id1192268152"
                alt=""
                className="w-75"
              />
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 my-3 text-center">
            <h4>Agregar Noticias</h4>
            <Link exact={true} to="/">
              <img
                src="https://media.istockphoto.com/photos/mexican-hipster-man-working-with-computer-picture-id1127582480"
                alt=""
                className="w-75"
              />
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 my-3 text-center">
            <h4>Agregar categorias</h4>
            <Link exact={true} to="/">
              <img
                src="https://media.istockphoto.com/photos/mature-latin-american-businesswoman-working-from-home-picture-id1207315307"
                alt=""
                className="w-75"
              />
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Admin;

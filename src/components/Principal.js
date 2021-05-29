import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import DestacadoItem from "./DestacadoItem";

const principal = (props) => {
  return (
    <Fragment>
      <section className="row container my-5 d-flex text-center">
        <h1 className='my-5 border rounded margen-superior'>Bienvenidos al portal de noticias que tiene la mejor información para vos.</h1>
        <article className="mt-5 col-sm-12 col-lg-6 border">
          {
            props.productos.map((producto)=><DestacadoItem producto={props.producto} key={props.producto.id}></DestacadoItem>)
          }
        </article>
        <article className="col-sm-12 col-lg-6 border mt-5">
          <header className="d-flex justify-content-center  titulo">
            <h1 className="display-3 align-self-center">Titulo </h1>
          </header>
          <body>
            <img
              src="https://cdn.pixabay.com/photo/2021/05/10/08/06/child-6242849_960_720.jpg"
              className="w-100 imagen"
              alt="Niño"
            />
          </body>
          <footer className="pie d-flex align-items-center flex-column justify-content-between">
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              omnis animi iusto temporibus sunt harum libero illo assumenda
              atque aut, recusandae tempore ea ipsam beatae accusantium vitae
              quo itaque est.
            </h3>
            <Button className="mb-3">Ver mas...</Button>
          </footer>
        </article>
        <article className="col-sm-12 col-lg-6 border mt-5">
          <header className="d-flex justify-content-center  titulo">
            <h1 className="display-3 align-self-center">Titulo destacado Nº3</h1>
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
        <article className="col-sm-12 col-lg-6 border mt-5">
          <header className="d-flex justify-content-center  titulo">
            <h1 className="display-3 align-self-center">Publicidad</h1>
          </header>
          <body>
            <img
              src="https://images.pexels.com/photos/7819309/pexels-photo-7819309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="w-100 imagen"
              alt="Publicidad"
            />
          </body>
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
          <h3 className="ms-4">Categoria 1</h3>
        </div>
        <article className="col-sm-12 col-lg-6 border mt-5">
          <header className="d-flex justify-content-center  titulo">
            <h2 className="display-3 align-self-center">Titulo destacado Nº3</h2>
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
            <h2 className="display-3 align-self-center">Titulo destacado Nº3</h2>
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
        <div className="my-2 publicidad">
          <img
            src="https://picjumbo.com/wp-content/uploads/dividends-text-free-photo-2210x1473.jpg"
            className="w-100 h-50"
            alt="publicidad"
          />
        </div>
        <div className="bg-primary text-light py-3 my-3 rounded col-sm-12">
          <h3 className="ms-4">Categoria 2</h3>
        </div>
        <article className="col-sm-12 col-lg-6 mt-5 border">
          <header className="d-flex justify-content-center  titulo">
            <h2 className="display-3 align-self-center">Titulo destacado Nº3</h2>
          </header>
          <body className="my-3">
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
            <h2 className="display-3 align-self-center">Titulo destacado Nº3</h2>
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
        <div className="my-2 publicidad">
          <img
            src="https://picjumbo.com/wp-content/uploads/dividends-text-free-photo-2210x1473.jpg"
            className="w-100 h-50"
            alt="publicidad"
          />
        </div>
        <div className="bg-primary text-light py-3 my-3 rounded col-sm-12">
          <h3 className="ms-4">Categoria 3</h3>
        </div>
        <article className="col-sm-12 col-lg-6 mt-5 border">
          <header className="d-flex justify-content-center  titulo">
            <h2 className="display-3 align-self-center">Titulo destacado Nº3</h2>
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
            <h2 className="display-3 align-self-center">Titulo destacado Nº3</h2>
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

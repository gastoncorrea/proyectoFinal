import React, { Fragment, useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
const Detalle = () => {
  const id = useParams().id;
  const [detalleNoticia, setDetalleNoticia] = useState({});

  useEffect(()=>{
    pedirUnaNoticia();
  },[]);

  const pedirUnaNoticia = async ()=>{
    try{const URL = process.env.REACT_APP_API_URL +"/"+id;
    const peticion = await fetch(URL);
    const respuesta = await peticion.json();
    console.log(respuesta);
    if(peticion.status === 200){
      setDetalleNoticia(respuesta);
    }
  }catch(e){
    console.log('èrror al pedir una noticia' + e);
  }
  }
  return (
    <Fragment>
      <section className="container">
        <div className="margen-superior py-5 mt-5 mb-3">
          <h4>{detalleNoticia.categoria}</h4>
        </div>
        <div className="my-3 text-center">
          <h1>
            {detalleNoticia.titulo}
          </h1>
        </div>
        <div className="text-center">
          <h3 className='lead'>
            {detalleNoticia.subtitulo}
          </h3>
        </div>
        <div className="text-center my-5">
          <img
            src={detalleNoticia.link}
            alt={detalleNoticia.titulo}
            className="w-75"
          />
        </div>
        <div>
          <p>
            {detalleNoticia.detalle}
          </p>
        </div>
        <div className='text-end d-flex align-items-center justify-content-end'>
            <h4 className='mb-1'>Autor:</h4> <p className='m-0 ms-2'>{detalleNoticia.autor}</p>
        </div>
        <div className='my-3 text-end d-flex align-items-center justify-content-end'>
            <h4 className='mb-1'>Fecha:</h4> <p className='m-0 ms-2'>{detalleNoticia.fecha}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Detalle;

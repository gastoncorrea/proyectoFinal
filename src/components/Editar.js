import React, { useEffect, useRef, useState } from 'react';
import { Fragment } from "react";
import { Container, Form, Alert, Button } from "react-bootstrap";
import {useParams, withRouter} from 'react-router-dom';

const Editar = (props) => {
    const id = useParams().id;
    const [producto, setProducto] = useState({});
    const tituloRef = useRef('');
    const subtituloRef = useRef('');
    const [categoria, setCategoria] = useState('');
    const detalleRef = useRef('');
    const linkRef = useRef('');
    const autorRef = useRef('');
    const [fecha, setFecha] = useState();
    const [destacar, setDestacar] = useState('');
    const [error,setError] = useState('');


    useEffect(()=>{
    consultarNoticia();
}, []);

    const consultarNoticia = async () => {
        const URL = process.env.REACT_APP_API_URL+"/"+id;
        const peticion = await fetch(URL);
        if(peticion.status === 200){
            const noticia = await peticion.json();
            setProducto(noticia);
            console.log(noticia);
            console.log(peticion)
        }
        
    }

    // consultarNoticia();

    const cambioCategoria=(e)=>{
        setCategoria(e.target.value)
    }
    const cambioFecha=(e)=>{
      setFecha(e.target.value)
    }
    const cambioDestacar=(e)=>{
      setDestacar(e.target.value);
      console.log(destacar);
    }
    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(destacar)
      // si se modifica la categoria se carga el state sino se mantiene el valor que trajo del servidor
      let modificarCategoria = (categoria === '')?(producto.categoria):(categoria);
      let fechaModificada = (fecha === '')?(producto.fecha):(fecha);
      let destacarModificado = (destacar === '')?(producto.destacar):(destacar);
      // Validar datos
      if (
        tituloRef.current.value.trim() === "" ||
        tituloRef.current.value.length > 120 ||
        subtituloRef.current.value.trim() === "" ||
        subtituloRef.current.value.length > 200 ||
        detalleRef.current.value.trim() === "" ||
        detalleRef.current.value.length > 2000 ||
        linkRef.current.value.trim() === "" ||
        autorRef.current.value.trim() === "" ||
        autorRef.current.value.length > 30 
      ) {
        setError(true);
        console.log('error');
      }else{
        setError(false);
        const URL = process.env.REACT_APP_API_URL+"/"+id;
        try{
          const productoModificado = {
            titulo: tituloRef.current.value,
            subtitulo: subtituloRef.current.value,
            categoria: modificarCategoria,
            detalle: detalleRef.current.value,
            link: linkRef.current.value,
            autor: autorRef.current.value,
            fecha: fechaModificada,
            destacar: destacarModificado
          }
          const respuesta = await fetch(URL,{
            method: "PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(productoModificado)
          })
          if(respuesta.status === 200){
            console.log('se pudo modificar noticia');
          }
          console.log(destacar);
          props.pedirDatos();
          props.history.push('/admin/lista-noticia');
        }catch(e){
          console.log(e);
        }
      }
    }
    return (
        <Fragment>
      <Container>
        <section className="my-5">
          <div className="my-5 pt-5">
            <h1 className="display-1">
              En está sección puede Editar una Noticia 
            </h1>
          </div>
          <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group controlId="titulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aqui ingrese el titulo de la nueva noticia"
                ref={tituloRef}
                defaultValue={producto.titulo}
              />
              <Form.Text className="text-muted mb-3">
                El titulo debe contener entre 1 y 120 caracteres
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="titulo" className="my-3">
              <Form.Label>Subtitulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aqui ingrese una descripcion breve"
                ref={subtituloRef}
                defaultValue={producto.subtitulo}
              />
              <Form.Text className="text-muted mb-3">
                El subtitulo debe contener entre 1 y 200 caracteres
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="categoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                onChange={cambioCategoria}
                selected={producto.categoria}
              >
                <option value=''>Seleccione una categoria</option>
                <option value="actualidad" >1- Actualidad</option>
                <option value="espectaculos" >2- Espectaculos</option>
                <option value="tecnologia" >3- Tecnologia</option>
                <option value="deportes" >4- Deportes</option>
                <option value="politica" >5- Politica</option>
                <option value="economia" >6- Economia</option>
                <option value="salud" >7- Salud</option>
                <option value="fotografia" >8- Fotografia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="text-area" className="my-3">
              <Form.Label>Detalle de la noticia</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                ref={detalleRef}
                defaultValue={producto.detalle}
              />
            </Form.Group>
            <Form.Group controlId="link-imagen">
              <Form.Label>Link de la imagen</Form.Label>
              <Form.Control
                type="link"
                placeholder="https://picjumbo.com/wp-content/uploads/strawberry-ice-lollies"
                ref={linkRef}
                defaultValue={producto.link}
              />
            </Form.Group>
            <Form.Group controlId="autor" className="mb-3">
              <Form.Label>Autor de la Noticia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gastón Correa"
                ref={autorRef}
                defaultValue={producto.autor}
              />
              <Form.Text className="text-muted mb-3">
                El nombre del autor debe contener entre 1 y 30 caracteres
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder="DD-MM-AAAA"
                onChange={cambioFecha}
                defaultValue={producto.fecha}
              />
            </Form.Group>
            <Form.Group
              controlId="destacar"
              className="my-3 mx-auto text-start"
            >
              <Form.Check
                type="checkbox"
                label="Destacar"
                value='ok'
                onChange={cambioDestacar}
              />
            </Form.Group>
            <Button className="btn btn-primary text-center my-3" type="submit">
              Guardar
            </Button>
            {(error === true) ? (
              <Alert variant="warning">Verifique los campos </Alert>
            ):( null)}
          </Form>
        </section>
      </Container>
    </Fragment>
    );
};

export default withRouter(Editar);
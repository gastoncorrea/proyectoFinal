import React, { Fragment, useState, useEffect } from "react";
import { Button, Form, Alert, Container } from "react-bootstrap";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [usuarioDb, setUsuarioDb] = useState({});
  const [error,setError] = useState(false);
  let validarEmail = '';
  let validarContrasenia = '';
  const expRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const URL = process.env.REACT_APP_API_URL+ "/" + "usuario/login/";

  const login = {
    usEmail:email,
    usContrasenia:contrasenia
  };

  const configuracion = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(login)
  }

  const cargarUsuario = async () => {
    try{
      const pedirUsuario = await fetch(URL,configuracion);
      if(pedirUsuario.status === 200){
        const usuario = await pedirUsuario.json();
        setUsuarioDb(usuario);
        console.log('usuario cargados de base de datos'+usuarioDb);
      }
    }catch(e){
      console.log(e);
    }
  }
  
  // validaciones
  const validarCampos = async (e)=>{
    e.preventDefault();
    if(email.trim()==='' || contrasenia.trim() === '' || !expRegular.test(email) || contrasenia.length < 8){
      setError(true)
      props.deshabilitar();
      console.log('Email invalido');
      console.log('valor de expresion regular: ' + !expRegular.test(email))
      console.log(contrasenia.length);
    }else{
      setError(false);
      // cargarUsuario();
      if(usuarioDb === "Usuario invalido"){
        Swal.fire(
          'El usuario no existe',
          'Verifique su usuario'
        )
      }else{
        // for(let i = 0; i < usuarioDb.length; i++){
          if(usuarioDb.contrasenia === true && usuarioDb.nombre === 'Admin'){
            validarEmail = email;
            validarContrasenia = contrasenia;
            props.habilitar();
            props.history.push('/');
            // break;
          }else{
            console.log('dentro del else' + usuarioDb);
            if(usuarioDb.contrasenia === true && usuarioDb.nombre !== 'Admin'){
              validarEmail = email;
              validarContrasenia = contrasenia;
              console.log(usuarioDb.nombre + "y" + usuarioDb.contrasenia);
              props.history.push('/');
              // break;
          }else{
            if(usuarioDb.contrasenia === false){
              Swal.fire(
                'Usuario y/o contraseña incorrecta',
                'Verifique su usuario y/o contraseña'
              )
            }
          }
      }
      
      //else{
          // if(usuarioDb.email === null){
          //   Swal.fire(
          //     'El usuario no existe',
          //     'Verifique su usuario'
          //   )
          // }
        // }

        }
      // }
      
    }
  }
  return (
    <Fragment>
      <section className="container my-5">
        <div className="py-5 mt-5">
          <h1 className="display-1">
            Logueate para encontrar el mejor contenido de esta web
          </h1>
        </div>
        <Form className="my-5" onSubmit={validarCampos}>
          <Form.Group controlId="email">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="gaston@djfhf.com" onChange={(e)=>setEmail(e.target.value)}/>
            <Form.Text className="text-muted mb-3">
              Requerimientos de contraseña:
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="contraseña" className="mt-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Escribe tu contraseña"
              className="mb-3"
              onChange={(e)=>setContrasenia(e.target.value)}
              onBlur={cargarUsuario}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Ingresar
          </Button>
        </Form>
        {
            (error === true)?( <Alert variant="warning">Verifique los campos </Alert>):(null)
        }
      </section>
    </Fragment>
  );
};

export default withRouter(Login);

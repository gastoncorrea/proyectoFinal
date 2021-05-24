import React, { Fragment, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [error,setError] = useState(false);
  const expRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  // validaciones
  const validarCampos = (e)=>{
    e.preventDefault();
    if(email.trim()==='' || contrasenia.trim() === '' || !expRegular.test(email) || contrasenia.length < 8){
      setError(true)
      props.deshabilitar();
      console.log('Email invalido');
      console.log('valor de expresion regular: ' + !expRegular.test(email))
      console.log(contrasenia.length);
    }else{
      setError(false);
      props.habilitar();
      console.log('Email valido');
      console.log('valor de expresion regular: ' + !expRegular.test(email))
      console.log(contrasenia.length);
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
            <Form.Control type="email" placeholder="gaston@djfhf.com" onChange={(e)=>setEmail(e.target.value)} />
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

export default Login;

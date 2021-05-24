import React, { Fragment, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [error,setError] = useState(false);
  
  // validaciones
  const validarCampos = (e)=>{
    e.preventDefault();
    if(email.trim()==='' || contrasenia.trim() === ''){
      setError(true)
      props.deshabilitar();
    }else{
      setError(false);
      props.habilitar();
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
            (error === true)?( <Alert variant="warning">Todos los campos son obligatorios</Alert>):(null)
        }
      </section>
    </Fragment>
  );
};

export default Login;

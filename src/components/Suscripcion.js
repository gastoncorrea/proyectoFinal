import React, { useState } from "react";
import { Fragment } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import {withRouter} from 'react-router-dom';

const Suscripcion = (props) => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [aceptar, setAceptar] = useState("");
  const [error, setError] = useState(false);
  const expRegular =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombre.trim() !== "" &&
      nombre.length < 50 &&
      fecha !== "" &&
      email.trim() !== "" &&
      expRegular.test(email) &&
      email.length < 50 &&
      contrasenia.trim() !== "" &&
      contrasenia.length < 30 &&
      aceptar !== ''
    ) {
      setError(false);
      const URL = process.env.REACT_APP_API_URL+ "/" + "usuario/suscripcion";
      const usuario = {
        nombre: nombre,
        fecha: fecha,
        email: email,
        contrasenia: contrasenia,
        aceptar: aceptar
      }

      const configuracion = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(usuario)
      }
        try{
          const enviar = await fetch(URL,configuracion);
          if(enviar.status === 201){
            Swal.fire(
              'Usuario creado',
              'TE SUSCRIBISTE CORRECTAMENTE',
              'success'
            )
          }
          props.history.push('/login');
        }catch(e){
          console.log(e)
        }

    }else{
      setError(true);
    }
    console.log(e);
    // e.target.reset();
  };
  return (
    <Fragment>
      <Container>
        <section className="my-5 pt-5">
          <div className="my-5">
            <h1 className="display-1">
              Suscribite a la pagina de noticias y disfruta de maravillosos
              beneficios
            </h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nom-y-ap">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gaston Correa"
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="fecha-nacimiento" className="my-3">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="DD-MM-AAAA"
                onChange={(e) => setFecha(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email-suscripcion" className="my-3">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="gaston@correa.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="contraseña-suscripcion" className="my-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setContrasenia(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="check-termino">
              <Form.Check
                type="checkbox"
                label="Acepto los terminos y condiciones"
                onChange={(e)=> setAceptar(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Suscribirme
            </Button>
          </Form>
          {(error === true) ? (
              <Alert variant="warning">Verifique los campos </Alert>
            ):( null)}
        </section>
      </Container>
    </Fragment>
  );
};

export default withRouter(Suscripcion);

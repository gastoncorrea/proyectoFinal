import React, { Fragment } from "react";
import { ListGroup, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ListaUnact = () => {
  return (
    <Fragment>
      <Container className="my-5">
        <div className="pt-5 my-5 text-center">
          <h1>Estas son todas las noticias disponibles</h1>
        </div>
        <ListGroup className="my-5 pt-5">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between">
              <p>Noticia 1</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <div>
              <NavLink exact={true} to="/">
                <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
              </NavLink>
              <Button variant="danger" className="ms-3">
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Fragment>
  );
};
export default ListaUnact;

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Navegacion = (props) => {
  return (
    <Navbar
      bg="primary"
      expand="lg"
      variant="dark"
      className="position-fixed w-100 subir-navbar"
    >
      <div className="container w-75">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link exact={true} to="/" className="nav-link">
              Destacados
            </Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="4.2" as={Link} exact={true}
                  to="/categoria/actualidad"
                  className="nav-link text-dark dropdown-item prueba">
                  Actualidad
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3" as={Link}  exact={true}
                  to="/categoria/espectaculos"
                  className="nav-link text-dark "> 
                  Espectaculos  
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4" as={Link}  exact={true}
                  to="/categoria/tecnologia"
                  className="nav-link text-dark">
                  Tecnologia
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5" as={Link}  exact={true}
                  to="/categoria/deportes"
                  className="nav-link text-dark ">
                  Deportes
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6" as={Link} exact={true}
                  to="/categoria/politica"
                  className="nav-link text-dark ">
                  Politica
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7" as={Link} exact={true}
                  to="/categoria/economia"
                  className="nav-link text-dark ">
                  Economia
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.8"  exact={true}
                  to="/categoria/salud"
                  className="nav-link text-dark ">
                  Salud
              </NavDropdown.Item>
              <NavDropdown.Item  eventKey="4.1"  exact={true}
                  to="/categoria/fotografia"
                  className="nav-link text-dark">
                  Fotografia
              </NavDropdown.Item>
            </NavDropdown>
            <Link exact={true} to="/suscripcion" className="nav-link">
              Suscribite
            </Link>
            {(props.habilitarAdmin === false)?(<Link exact={true} to="/login" className="nav-link">
              Login
            </Link>):(null)}
            {props.habilitarAdmin === true ? (
              <Link exact="true" to="/admin" className="nav-link">
                Admin
              </Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navegacion;

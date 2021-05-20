import React from 'react';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';

const Navegacion = () => {
    return (
      <Navbar bg="primary" expand="lg" variant='dark' className='position-fixed w-100 subir-navbar'>
        <div className="container">
      <Navbar.Brand href="/"><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact='true' to='/' className='nav-link'>Destacados</NavLink>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Actualidad</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Espectaculos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tecnologia</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Deportes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Politica</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Economia</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Salud</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Fotografia</NavDropdown.Item>
          </NavDropdown>
          <NavLink exact='true' to='/' className='nav-link'>Suscribite</NavLink>
          <NavLink exact='true' to='/' className='nav-link'>Login</NavLink>
          <NavLink exact='true' to='/' className='nav-link'>Admin</NavLink>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    );
};

export default Navegacion;
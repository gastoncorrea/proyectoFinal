import React from 'react';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';

const Navegacion = (props) => {

    return (
      <Navbar bg="primary" expand="lg" variant='dark' className='position-fixed w-100 subir-navbar'>
        <div className="container w-75">
      <Navbar.Brand href="/"><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link exact={true} to='/' className='nav-link'>Destacados</Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1"><Link exact={true} to='/categoria/actualidad' className='nav-link text-dark'>Actualidad</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"><Link exact={true} to='/categoria/espectaculos' className='nav-link text-dark'>Espectaculos</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><Link exact={true} to='/categoria/tecnologia' className='nav-link text-dark'>Tecnologia</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"><Link exact={true} to='/categoria/deportes' className='nav-link text-dark'>Deportes</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"><Link exact={true} to='/categoria/politica' className='nav-link text-dark'>Politica</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"><Link exact={true} to='/categoria/economia' className='nav-link text-dark'>Economia</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"><Link exact={true} to='/categoria/salud' className='nav-link text-dark'>Salud</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"><Link exact={true} to='/categoria/fotografia' className='nav-link text-dark'>Fotografia</Link></NavDropdown.Item>
          </NavDropdown>
          <Link exact={true} to='/suscripcion' className='nav-link'>Suscribite</Link>
          <Link exact={true} to='/login' className='nav-link' >Login</Link>
          {
            (props.habilitarAdmin === true)?(<Link exact='true' to='/admin' className='nav-link'>Admin</Link>):(null)
          }
          
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    );
};

export default Navegacion;
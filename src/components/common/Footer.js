import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-light row mx-0">
      <div className="col-md-6 col-sm-12">
        <h4 className="ms-3">Redes Sociales:</h4>
        <div className="d-flex mb-4">
          <div className="mx-3">
            <NavLink exact="true" to="/" className="text-light">
              <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink exact="true" to="/" className="text-light">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </NavLink>
          </div>
          <div className="ms-3">
            <NavLink exact="true" to="/" className="text-light">
              <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
            </NavLink>
          </div>
        </div>
        <NavLink
          exact="true"
          to="/contacto"
          className="nav-link text-light my-4"
        >
          <h4>Contacto</h4>
        </NavLink>
        <NavLink exact="true" to="/privacidad" className="nav-link text-light">
          <h4>Politica de Privacidad</h4>
        </NavLink>
      </div>
      <div className="col-md-6 col-sm-12 pe-3 mt-3">
          <NavLink exact='true' to='/error404' className='text-light'>
        <img
          src="https://blogs.iadb.org/agua/wp-content/uploads/sites/8/2020/03/WWD2020_Banner2-V01_FB-LI-1200x628-SPA.jpg"
          alt="recomendacion-covid"
          className="w-75"
        />
          </NavLink>
      </div>
    </footer>
  );
};

export default Footer;

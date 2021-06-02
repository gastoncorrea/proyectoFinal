import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Fragment>
      <footer className="py-5 bg-dark text-light row mx-0 footer-fijo">
        <div className="col-md-6 col-sm-12">
          <h4 className="ms-3">Redes Sociales:</h4>
          <div className="d-flex mb-4">
            <div className="mx-3">
              <Link exact={true} to="/" className="text-light">
                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
              </Link>
            </div>
            <div className="mx-3">
              <Link exact={true} to="/" className="text-light">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </Link>
            </div>
            <div className="ms-3">
              <Link exact={true} to="/" className="text-light">
                <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
              </Link>
            </div>
          </div>
          <Link
            exact={true}
            to="/contacto"
            className="nav-link text-light my-4"
          >
            <h4>Contacto</h4>
          </Link>
          <Link
            exact={true}
            to="/privacidad"
            className="nav-link text-light"
          >
            <h4>Politica de Privacidad</h4>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12 pe-3 mt-3">
          <Link exact={true} to="/error404" className="text-light">
            <img
              src="https://blogs.iadb.org/agua/wp-content/uploads/sites/8/2020/03/WWD2020_Banner2-V01_FB-LI-1200x628-SPA.jpg"
              alt="recomendacion-covid"
              className="w-75"
            />
          </Link>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

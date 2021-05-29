import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {ListGroup, Button} from 'react-bootstrap';

const NoticiaItem = (props) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between">
          <Link exact={true} to='/noticia' className='nav-link'><p>{props.producto.titulo}</p></Link>
        </div>
        <div>
            {
                (props.producto.destacar === 'ok')?(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>):(null)
            }
          
        </div>
        <div>
          <Link exact={true} to="/admin/nueva-noticia">
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
          </Link>
          <Button variant="danger" className="ms-3">
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </Button>
        </div>
      </ListGroup.Item>
    );
};

export default NoticiaItem;
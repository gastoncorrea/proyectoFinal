import React from 'react';
import { Container } from 'react-bootstrap';

const Error404 = () => {
    console.log(process.env.PUBLIC_URL+'404.png')
    return (
        <Container>
            <section className='my-5'>
            <h1 className='text-center my-5 py-5'>
                Pagina de error
            </h1>
            <div className='text-center'>
                <img src={process.env.PUBLIC_URL+'404.png'} alt="error404" className='w-50'/>
            </div>0
            </section>
        </Container>
    );
};

export default Error404;
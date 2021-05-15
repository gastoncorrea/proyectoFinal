import React from 'react';
import {Button} from 'react-bootstrap';

const principal = () => {
    return (
        <section className='row'>
            <article className='col-sm-12 col-md-6'>
                <header>
                    <h1 className='display-1'>Titulo destacado Nº1</h1>
                </header>
                <body>
                    <img src="https://cdn.pixabay.com/photo/2017/07/14/18/57/horse-2504677_960_720.jpg" className='w-100' alt="Paisaje" />
                </body>
                <footer>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt omnis animi iusto temporibus sunt harum libero illo assumenda atque aut, recusandae tempore ea ipsam beatae accusantium vitae quo itaque est.</h3>
                    <Button>Ver mas...</Button>
                </footer>
            </article>
            <article className='col-sm-12 col-md-6'>
            <header>
                    <h1 className='display-1'>Titulo destacado Nº2</h1>
                </header>
                <body>
                    <img src="https://cdn.pixabay.com/photo/2021/05/10/08/06/child-6242849_960_720.jpg" className='w-100' alt="Paisaje" />
                </body>
                <footer>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt omnis animi iusto temporibus sunt harum libero illo assumenda atque aut, recusandae tempore ea ipsam beatae accusantium vitae quo itaque est.</h3>
                    <Button>Ver mas...</Button>
                </footer>
            </article>
            <article className='col-sm-12 col-md-6'>

            </article>
            <article className='col-sm-12 col-md-6'>

            </article>

        </section>
    );
};

export default principal;
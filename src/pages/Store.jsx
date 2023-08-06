import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../produtsData';
import ProductsCard from '../components/ProductsCard';


const Store = () => {
    
  return (
    <>
        <h1 align='center' className='p-5'>Welcome to the great CodeStore!</h1>
        <Row xs={1} md={3} className='g-5'>
            {productsArray.map((product, index) => (
                <Col key={index} align="center">
                    <ProductsCard product={product}/>
                </Col>
            ))}
        </Row>
    </>
  );
}

export default Store;
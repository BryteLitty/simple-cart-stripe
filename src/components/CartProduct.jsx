import React from 'react';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import { getProductData } from '../produtsData';
import { Button } from 'react-bootstrap';


const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);


    return (
        <div>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size='sm' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr />
        </div>
    )
}

export default CartProduct;
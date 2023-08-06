import { React, useState, useContext } from 'react';
import { Button, Navbar, Modal } from 'react-bootstrap' ;
import { CartContext } from '../cartContext';
import CartProduct from './CartProduct';

const NavbarComponent = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const checkout = async () => {
    await fetch('https://simplecart-api.onrender.com/checkout', {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json()
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url)
      }
    })
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <Navbar expand="sm">
          <Navbar.Brand href='/'>CodeStore</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
              <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
          </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
        <Modal.Title>My Cart</Modal.Title>
       </Modal.Header>
        <Modal.Body>
          { productsCount > 0 ?
              <>
                <p>Items in your cart: </p>
                {cart.items.map((currentProduct, index) => (
                  <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} />
                ))}
                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                {productsCount === 1  ?
                  <><Button variant='success' onClick={checkout}>Purchase Item</Button></>
                  :
                  <Button variant='success' onClick={checkout}>Purchase Items</Button>
                }
              </>
              :
              "Your shopping cart is empty"
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
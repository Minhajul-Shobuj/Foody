import React, { useState } from 'react';
import { Button,Card, ListGroup } from 'react-bootstrap';

const Cart = ({cart}) => {
    const [foodName,setFoodName]=useState([]);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;

        };
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    };
    for(const product of cart){
        if (foodName.indexOf(product.name) === -1) {
            const name=[...foodName,product.name];
            setFoodName(name);
        }
    };
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <>
        <Card className="text-center">
  <Card.Header><h1>Order Summary</h1></Card.Header>
  <Card.Body>
    <Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item> <h3>Items Ordered: {totalQuantity}</h3> </ListGroup.Item>
    {foodName.map(name=><ListGroup.Item key={name}><h6>{name}</h6></ListGroup.Item>)} <hr />
    <ListGroup.Item> <h4>Total: {total.toFixed(2)}</h4> </ListGroup.Item>
    <ListGroup.Item> <h4>Shipping: {shipping}</h4> </ListGroup.Item>
    <ListGroup.Item> <h4>tax: {tax.toFixed(2)}</h4> </ListGroup.Item>
    <ListGroup.Item> <h4>Grand Total: {grandTotal.toFixed(2)}</h4> </ListGroup.Item>
  </ListGroup>
    </Card.Text>
    <Button variant="primary">Checkout</Button>
  </Card.Body>
</Card>
        </>
    );
};

export default Cart;
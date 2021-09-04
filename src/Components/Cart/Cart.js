import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 1000){
        shipping = 0;
    }
    else if (total > 400){
        shipping = 0.99;
    }
    else if (total > 200){
        shipping = 1.99;
    }
    else if (total > 35){
        shipping = 2.99;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }

    const tax = total / 10;

    const grandTotal = total + shipping + tax;

    const decimalNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div className="cart-info">
            <h4 className="order-summary">Order Summary</h4>
            <p>Items Order : {cart.length} </p>
            <p><small>Shipping {shipping} </small></p>
            <p><small>Tax : {decimalNumber(tax)} </small></p>
            <p className="price">Total Price : {decimalNumber(grandTotal)} </p>
        </div>
    );
};

export default Cart;
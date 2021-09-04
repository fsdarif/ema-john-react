import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = (props) => {
    const {img, name, seller, price, stock} = props.product;

    return (
        <div className="singleProduct">
            <div className="productImage">
                <img src={img} alt="" />
            </div>

            <div className="productDetails">
                <h3> {name} </h3>
                <br/>
                <p><small>By {seller} </small></p>
                <p> Price : {price} </p>
                <p><small>Only {stock} left in stock. order soon</small></p>

                <button className="add-btn" onClick={() => props.addToCart(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>
            </div>
        </div>
    );
};

export default Products;
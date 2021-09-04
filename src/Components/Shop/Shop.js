import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const productTen = fakeData.slice(0,10);
    const [products, setProducts] = useState(productTen);
    const [cart, setCart] = useState([]);
    
    
    const addToCart = (product) => {
        console.log('Product Added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div className="shop">
            {
                products.map(singleProduct => 
                <Products product={singleProduct} addToCart={addToCart}> </Products>)
            }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
import React, { useState } from 'react';
import useFood from '../../Hooks/useFood';
import Cart from '../Cart/Cart';
import Food from './Food';

const Foods = () => {
    const [foods]=useFood();
    const [cart, setCart] = useState([]);
    const addToCart = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);
    };
    return (
        <div className='container mt-2 row'>
            <div className='col-lg-8 col-md-8'>
            <div className='container mt-2 row row-cols-1 row-cols-md-3 g-4'>
            {foods.map(food=><Food addToCart={addToCart} food={food} key={food._id}></Food>)}
        </div>
            </div>
        <div className='col-lg-4 col-md-4'>
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Foods;
import React, { useState } from 'react';
import useFood from '../../../Hooks/useFood';
import Cart from '../../Cart/Cart';

const TopFoods = () => {
    const [foods]=useFood();
    const topFoods=foods.slice(0,6);
    const [cart, setCart] = useState([]);
    const addToCart = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);
    };
    return (
        <>
            <div className='container mt-2 row'>
            <div className='col-lg-8 col-md-8'>
            <div className='container mt-2 row row-cols-1 row-cols-md-3 g-4'>
            {topFoods.map(food=>
                <div class="col">
                <div style={{'height':'400px', 'width':'250px'}} class="card">
                  <img style={{'height':'200px'}} src={food.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{food.name}</h5>
                    <p class="card-text">{food.type}</p>
                  </div>
                  <div class="card-footer">
                    <button onClick={()=>addToCart(food)} className='btn btn-success'>Add to Cart</button>
                  </div>
                </div>
              </div>
                )}
        </div>
            </div>
        <div className='col-lg-4 col-md-4'>
            <Cart cart={cart}></Cart>
        </div>
        </div>
        </>
    );
};

export default TopFoods;
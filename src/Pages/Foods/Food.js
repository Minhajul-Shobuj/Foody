import React from 'react';

const Food = ({food,addToCart}) => {
const {name,img,rating,price}=food;
    return (
       <>
            <div class="col">
        <div style={{'height':'430px', 'width':'250px'}} class="card">
          <img style={{'height':'200px'}} src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Price: {price}$</p>
            <p class="card-text">Rating: {rating}</p>
          </div>
          <div class="card-footer">
            <button onClick={()=>addToCart(food)} className='btn btn-success'>Add to Cart</button>
          </div>
        </div>
      </div>
       </>
    );
};

export default Food;
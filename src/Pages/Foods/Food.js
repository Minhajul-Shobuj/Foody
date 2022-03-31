import React from 'react';

const Food = ({food,addToCart}) => {
const {name,img,type}=food;
    return (
       <>
            <div class="col">
        <div style={{'height':'400px', 'width':'250px'}} class="card">
          <img style={{'height':'200px'}} src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{type}</p>
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
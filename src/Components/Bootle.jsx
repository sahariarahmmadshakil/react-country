import React from 'react';

const Bootle = ({ props,handleBootle }) => {
    const {category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock}=props
    return (
        <div className='box'>
            <h3>Name:{name}</h3>
            <img src={img} alt="" className='image'/>
            <p>Price: { price}</p>
            <p>Stock: { stock}</p>
            <button className='btn' onClick={()=>handleBootle(props)}>Add To Cart</button>
        </div>
    );
};

export default Bootle;


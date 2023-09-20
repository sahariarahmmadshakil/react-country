import React, { useEffect, useState } from 'react';
import Bootle from './Bootle'
const Bootles = () => {
    const [bootles, setBootles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getBootles = async() => {
            const res = await fetch('../../public/data.json');
            const loadBootles = await res.json();
            setBootles(loadBootles);
          
        }
        getBootles()

    }, [])
    
    const handleBootle = bootle => {
        const newCart = [...cart, bootle];
        setCart(newCart)
        
    }
    return (
        <div >
            <h3>Selected Bootles {bootles.length}</h3>
            <h3>Added Bootles: {cart.length}</h3>
            <div>
                <ul>
                    {
                        cart.map(addedCart => <p key={addedCart.id}>{ addedCart.name}</p>)
                    }
                </ul>
            </div>
            <div className='responsive'>
            {
                bootles.map(bootle => <Bootle
                    key={bootle.id}
                    props={bootle}
                    handleBootle={handleBootle}
                ></Bootle>)
            }
           </div>
        </div>
    );
};

export default Bootles;
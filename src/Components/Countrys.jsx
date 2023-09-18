import React, { useEffect, useState } from 'react';
import Country from './Country';
import '../index.css'
const Countrys = () => {
    const [countrys, setCountrys] = useState([]);

    useEffect(() => {
        const loadCountrys = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const loadData =await res.json();
            setCountrys(loadData);
         
                
        }
        loadCountrys()

    },[])
    return (
        <div>
            <h3>Example of Country {countrys.length}</h3>
            <div className='responsive'>
            {
                countrys.map(country => <Country
                    props={country}
                    key={country.cca3}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countrys;
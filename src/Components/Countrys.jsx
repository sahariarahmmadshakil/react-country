import { useEffect, useState } from 'react';
import Country from './Country';
import '../index.css'
const Countrys = () => {
    const [countrys, setCountrys] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    
    useEffect(() => {
        const loadCountrys = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const loadData = await res.json();
            setCountrys(loadData);
        }
        loadCountrys()

    }, []);
    const handleVisitedCountry = country => {
        const newVisited = [...visitedCountry, country];
       setVisitedCountry(newVisited)
      }
    return (
        <div>
            <h3>Example of Country {countrys.length}</h3>
            <h4>Visited Countrys { visitedCountry.length}</h4>
            <div>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca2}>{ country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className='responsive'>
                {
                    countrys.map(country => <Country
                        props={country}
                        handleVisitedCountry={()=>handleVisitedCountry(country)}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countrys;
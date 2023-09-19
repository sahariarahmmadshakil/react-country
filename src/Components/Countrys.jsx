import { useEffect, useState } from 'react';
import Country from './Country';
import '../index.css'
const Countrys = () => {
    const [countrys, setCountrys] = useState([]);
    const [getVisitedCountry, setVisitedCountry] = useState([]);
    const [getFlag, setFlag] = useState([]);
    useEffect(() => {
        const loadCountrys = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const loadData = await res.json();
            setCountrys(loadData);
        }
        loadCountrys()

    }, []);
    const handleVisitedCuntry = country => {
        const getCountry = [...getVisitedCountry, country];
        setVisitedCountry(getCountry)
    }
    const handleFlag = flag => {
        const newFlag = [...getFlag, flag];
        setFlag(newFlag);
    }
    return (
        <div>
            <h3>Example of Country {countrys.length}</h3>
            <div >
                {
                    getFlag.map((flags, idx) => <img src={flags} key={idx}></img>)
                }
            </div>
            <h3>Visited Country: {getVisitedCountry.length}</h3>
            <ul>
                {getVisitedCountry.map(country => <li key={country.cca3}>
                    {country.name.common}
                </li>)}
            </ul>
            <div className='responsive'>
                {
                    countrys.map(country => <Country
                        props={country}
                        handleVisitedCuntry={handleVisitedCuntry}
                        handleFlag={handleFlag}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countrys;
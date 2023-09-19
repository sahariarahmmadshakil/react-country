import { useState } from 'react';
import '../index.css'
const Country = ({ props,handleVisitedCountry }) => {
  const { name, population, flags } = props;
  const [isVisited, setVisited] = useState(false);
  
  const handleVisited = () => {
    setVisited(!isVisited);
  }

  return (
    <div className={isVisited ? 'visited-box' : 'box'}>
      <h3 style={{color:isVisited?'green':'blueviolet'}}>Name: {name.common}</h3>
      <h3>Poulation: {population}</h3>
      <img src={flags.png} alt="" />
      <button className='btn' onClick={handleVisited}>{isVisited ? 'Visited' : 'Not Visited'}</button> 
      <button className='btn' onClick={handleVisitedCountry}>Mark Visited</button>
      {isVisited ? 'I have Visited' : 'I didnt Visite'}
    </div>
  );
};

export default Country;
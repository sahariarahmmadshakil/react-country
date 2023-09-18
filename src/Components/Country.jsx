import { useState } from 'react';
import '../index.css'
const Country = ({ props }) => {
  const { name, population, flags } = props;
  const [isVisited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  }
  return (
    <div className='box'>
      <h3>Name: {name.common}</h3>
      <h3>Poulation: {population}</h3>
      <img src={flags.png} alt="" />
      <button className='btn' onClick={handleVisited}>{isVisited ? 'Visited' : 'Not Visited'}</button>
      {isVisited?'I have Visited':'I didnt Visite'}
    </div>
  );
};

export default Country;
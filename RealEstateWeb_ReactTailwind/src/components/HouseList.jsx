import { useContext } from 'react';

import { HouseContext } from './HouseContext';

import House from './House';

import { Link } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';

export default function HouseList() {
  const { houses, loading } = useContext(HouseContext);

  console.log(houses);

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

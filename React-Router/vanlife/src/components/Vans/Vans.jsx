import React, { Suspense } from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { getVans } from '../Firebase/api'
// import { getVans } from '../../API';

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  // data is the return value from the loader function
  const dataPromise = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const activeFilter = {
    simple: typeFilter === 'simple' ? { backgroundColor: '#E17654', color: 'white' } : { backgroundColor: '#FFEAD0', color: 'rgba(77, 77, 77, 1)', transition: 'all 0.2s ease-in-out' },
    luxury: typeFilter === 'luxury' ? { backgroundColor: '#161616', color: 'white' } : { backgroundColor: '#FFEAD0', color: 'rgba(77, 77, 77, 1)', transition: 'all 0.2s ease-in-out' },
    rugged: typeFilter === 'rugged' ? { backgroundColor: '#115E59', color: 'white' } : { backgroundColor: '#FFEAD0', color: 'rgba(77, 77, 77, 1)', transition: 'all 0.2s ease-in-out' },
  };

  const types = {
    type: {
      simple: '#E17654',
      luxury: '#161616',
      rugged: '#115E59',
    },
  };

  // Function for <Button/> that will not overwrite search params but instead concatenate them
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderVanElements(vanData) {
    const typeEntries = Object.entries(types.type);
    const filterVan = typeFilter ? vanData.filter((item) => item.type.toLowerCase() === typeFilter) : vanData;
    const VanItems = filterVan.map((item) => (
      // REMINDER! STATE CAN HAVE MULTIPLE OBJECTS INSIDE OF IT
      <Link to={`${item.id}`} state={{ search: searchParams.toString() }} key={item.id} className="van--item">
        <div className="van--img-container">
          <img className="van--img" src={item.imageUrl} />
        </div>
        <div className="van--info">
          <div className="van--name">{item.name}</div>
          <div className="van--rate">${item.price}</div>
          {typeEntries.map(([key, value]) => {
            if (key === item.type) {
              return (
                <div key={item.id} className="van--type" style={{ backgroundColor: value }}>
                  {item.type}
                </div>
              );
            }
          })}
          <span className="day">/day</span>
        </div>
      </Link>
    ));
    return <>{VanItems}</>;
  }

  return (
    <div className="van--container">
      <div className="van--wrapper">
        <div className="van--options">
          <span className="van--options-title">Explore our van options</span>
          <div className="van--options-choices">
            <button style={activeFilter.simple} onClick={() => handleFilterChange('type', 'simple')} className="simple">
              Simple
            </button>
            <button style={activeFilter.luxury} onClick={() => handleFilterChange('type', 'luxury')} className="luxury">
              Luxury
            </button>
            <button style={activeFilter.rugged} onClick={() => handleFilterChange('type', 'rugged')} className="rugged">
              Rugged
            </button>
            {typeFilter ? <button onClick={() => handleFilterChange('type', null)}>Clear filters</button> : <button></button>}
          </div>
        </div>
        <div className="van--list--container">
          <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/*                       OLD WAY TO FETCH DATA FROM API                       */
/* -------------------------------------------------------------------------- */

// State for saving the Van data from the API
// const [vanData, setVanData] = React.useState([])

// Fetch the Van data from the API
// React.useEffect(() => {
//     async function loadVans() {
//         setLoading(true)
//         try {
//             const data = await getVans()
//             setVanData(data)
//         } catch (error) {
//             setError(error)
//         } finally {
//             setLoading(false)
//         }
//     }
//     loadVans()
// }, [])

/* -------------------------------------------------------------------------- */
/*                                    Other                                   */
/* -------------------------------------------------------------------------- */

// <Link to='?type=simple'>Simple</Link>
// <Link to='?type=luxury'>Luxury</Link>
// <Link to='?type=rugged'>Rugged</Link>
// <Link to='.'>Clear filters</Link>

// Function for <Link/> that will not overwrite search params but instead concatenate them
// function genNewSearchParamString(key, value) {
//     const sp = new URLSearchParams(searchParams)
//     if (value === null) {
//       sp.delete(key)
//     } else {
//       sp.set(key, value)
//     }
//     return `?${sp.toString()}`
//   }

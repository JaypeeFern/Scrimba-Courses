import React, { Suspense } from 'react';
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../API';

export function loader() {
  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  // hostVanData is the return value from the loader function
  const hostVanPromise = useLoaderData();

  function renderHostVanElements(vans) {
    const HostVanItems = vans.map((item) => (
      <Link key={item.id} to={item.id} className="hostVans--item">
        <div className="hostVans--item-image-container">
          <img className="hostVans--item-image" src={item.imageUrl} />
        </div>
        <div className="hostVans--item-details">
          <span className="hostVans--item-name">{item.name}</span>
          <span className="hostVans--item-price">${item.price}/day</span>
        </div>
      </Link>
    ));
    return (
      <>
        <div className="hostVans--list">{HostVanItems}</div>
      </>
    );
  }

  return (
    <div className="hostVans--container">
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="hostVans--header">Your Listed Vans</h1>
        <Await resolve={hostVanPromise.vans}>{renderHostVanElements}</Await>
      </Suspense>
    </div>
  );
}

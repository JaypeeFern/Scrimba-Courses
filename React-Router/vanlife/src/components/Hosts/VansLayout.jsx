import React, { Suspense } from 'react';
import { Outlet, NavLink, Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../API';

export function loader({ params }) {
  return defer({ vans: getHostVans(params.id) });
}

export default function VansLayout() {
  const hostVanDetailPromise = useLoaderData();

  function OutletContext(context) {
    return <Outlet context={context} />;
  }

  function renderHostVanDetails(hostVanDetail) {
    return (
      <>
        <div className="hostVanDetails--card">
          <div className="hostVanDetails--card-image-container">
            <img className="hostVanDetails--card-image" src={hostVanDetail.imageUrl} />
          </div>
          <div className="hostVanDetails--card-details">
            <span className="hostVanDetails--van-type">{hostVanDetail.type}</span>
            <span className="hostVanDetails--van-name">{hostVanDetail.name}</span>
            <span className="hostVanDetails--van-price">
              <b className="bold">{hostVanDetail.price}</b>/day
            </span>
          </div>
        </div>
        <div className="hostVanDetails--nav-container">
          <nav className="hostVanDetails--nav">
            <NavLink end to={''}>
              Details
            </NavLink>
            <NavLink to={`pricing`}>Pricing</NavLink>
            <NavLink to={`photos`}>Photos</NavLink>
          </nav>
          {OutletContext(hostVanDetail)}
        </div>
      </>
    );
  }

  return (
    <div className="hostVanDetails--container">
      <Link to="../vans" className="hostVanDetails--header">
        {'<- Back to all vans'}
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={hostVanDetailPromise.vans}>{renderHostVanDetails}</Await>
      </Suspense>
    </div>
  );
}

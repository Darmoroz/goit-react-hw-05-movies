import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MoviesDetails = () => {
  return (
    <>
      <Link />
      <div>CARD</div>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MoviesDetails;

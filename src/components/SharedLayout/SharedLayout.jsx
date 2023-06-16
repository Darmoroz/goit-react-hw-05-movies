import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Container from 'assets/Container';

import { NavStyled } from './SharedLayout.styled';

const SharedLayout = ({ children }) => {
  return (
    <Container>
      <header>
        <nav>
          <NavStyled>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavStyled>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default SharedLayout;

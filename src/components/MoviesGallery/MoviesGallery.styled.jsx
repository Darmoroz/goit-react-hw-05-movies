import styled from 'styled-components';

export const MoviesGrid = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  li {
    display: grid;
    grid-template-columns: 8fr 1fr;
    a {
      color: #0077cc;
      text-decoration: none;
      :hover {
        color: rgba(0, 119, 204, 0.5);
      }
    }
    span {
      font-weight: 500;
    }
  }
`;

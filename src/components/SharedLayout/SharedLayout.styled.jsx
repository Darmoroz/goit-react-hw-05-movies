import styled from 'styled-components';

export const NavStyled = styled.ul`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 1.5;
  li {
    :not(:last-child) {
      margin-right: 28px;
    }
    a {
      text-transform: uppercase;
      text-decoration: none;
      padding: 8px;
      :hover {
        color: #76a5d4;
      }
    }
  }
`;

import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${p => p.theme.spacing(4)};
  @media screen and (max-width: 767px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
export default Container;

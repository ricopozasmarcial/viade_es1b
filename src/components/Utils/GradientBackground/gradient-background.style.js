import styled from 'styled-components';

export const Gradient = styled.div`
  background-image: url("/fondo.jpg");
  background-size: cover;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: absolute;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/background-pattern.svg');
    filter: opacity(30%);
  }
`;

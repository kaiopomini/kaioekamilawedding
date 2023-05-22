import styled from 'styled-components';

export const Container = styled.div`
  /* .gray {
    background: #808080;
  } */
  .gray:nth-child(even) {
    background: #666666;
  }
  .gray:nth-child(odd) {
    background: #808080;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`;

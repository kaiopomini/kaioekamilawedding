import styled from 'styled-components';

export const Container = styled.div`
  .section-1 {
    background-image: url('../resources/images/001.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    height: 100vh;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.9;
    }
  }

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

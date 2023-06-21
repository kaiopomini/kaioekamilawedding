import styled from 'styled-components';

import img001 from '../../../resources/images/001.jpg';

export const Container = styled.div`
  .section-1 {
    background-image: url(${img001});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

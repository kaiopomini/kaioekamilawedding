import styled from 'styled-components';

import img001 from '../../../resources/images/001.jpg';
import img002 from '../../../resources/images/002.jpg';
import img003 from '../../../resources/images/003.jpg';
import img004 from '../../../resources/images/004.jpg';
import img005 from '../../../resources/images/005.jpg';

export const Container = styled.div`
  .home {
    background-image: url(${img001});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .gift {
    background-image: url(${img005});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .location {
    background-image: url(${img002});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .food {
    background-image: url(${img003});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .drink {
    background-image: url(${img004});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .faq {
    background-image: url(${img005});
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

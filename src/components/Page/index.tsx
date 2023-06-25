import React from 'react';

import Countdown from '../Countdown';
import Menu from '../Menu';
import { SectionBase, SectionWrapper } from '../Section';
import UniqueOverlay from '../UniqueOverlay';
import { Home } from './Home';
import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <SectionWrapper>
        <div>
          <SectionBase
            className="section-1"
            sectionName="home"
            id="section1"
            overlayNode={<Home />}
          />
          <SectionBase
            className="gray"
            sectionName="home2"
            id="section2"
            overlayNode={<Menu />}
          />
          <SectionBase
            className="gray"
            sectionName="home3"
            id="section3"
            overlayNode={<Menu />}
          />
        </div>

        <UniqueOverlay />
      </SectionWrapper>
    </Container>
  );
};

export default Page;

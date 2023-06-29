import React from 'react';

import Menu from '../Menu';
import { SectionBase, SectionWrapper } from '../Section';
import UniqueOverlay from '../UniqueOverlay';
import { Gift } from './Gift';
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
            overlayNode={<Gift />}
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

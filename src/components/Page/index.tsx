import React from 'react';

import Countdown from '../Countdown';
import Menu from '../Menu';
import { SectionBase, SectionWrapper } from '../Section';
import UniqueOverlay from '../UniqueOverlay';
import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <SectionWrapper>
        <div>
          <SectionBase
            className="gray"
            sectionName="home"
            id="section1"
            overlayNode={<Countdown targetDate={new Date('08-26-2023')} />}
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

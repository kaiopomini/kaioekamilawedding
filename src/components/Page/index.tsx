import React from 'react';

import Menu from '../Menu';
import { SectionBase, SectionWrapper } from '../Section';
import UniqueOverlay from '../UniqueOverlay';
import { Drink } from './Drink';
import { Food } from './Food';
import { Gift } from './Gift';
import { Home } from './Home';
import { Locale } from './Locale';
import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <SectionWrapper>
        <div>
          <SectionBase
            className="home"
            sectionName="home"
            id="section1"
            overlayNode={<Home />}
          />
          <SectionBase
            className="gift"
            sectionName="gift"
            id="section2"
            overlayNode={<Gift />}
          />

          <SectionBase
            className="food"
            sectionName="food"
            id="section3"
            overlayNode={<Food />}
          />
          <SectionBase
            className="drink"
            sectionName="drink"
            id="section4"
            overlayNode={<Drink />}
          />
          <SectionBase
            className="location"
            sectionName="location"
            id="section5"
            overlayNode={<Locale />}
          />
          <SectionBase
            className="faq"
            sectionName="faq"
            id="section6"
            overlayNode={<Menu />}
          />
        </div>

        <UniqueOverlay />
      </SectionWrapper>
    </Container>
  );
};

export default Page;

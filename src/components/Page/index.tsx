import React, { useEffect, useState } from 'react';

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
            id="home"
            overlayNode={<Home />}
          />
          <SectionBase
            className="gift"
            sectionName="gift"
            id="gift"
            overlayNode={<Gift />}
          />

          <SectionBase
            className="food"
            sectionName="food"
            id="food"
            overlayNode={<Food />}
          />
          <SectionBase
            className="drink"
            sectionName="drink"
            id="drink"
            overlayNode={<Drink />}
          />
          <SectionBase
            className="location"
            sectionName="location"
            id="location"
            overlayNode={<Locale />}
          />
          <SectionBase
            className="faq"
            sectionName="faq"
            id="faq"
            overlayNode={<Menu />}
          />
        </div>

        <UniqueOverlay />
      </SectionWrapper>
    </Container>
  );
};

export default Page;

import { useTransform } from 'framer-motion';
import React from 'react';

import { useWrapperScroll } from '../Section';
import { Container, Footer, Header } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <ul>
          <li>
            <a href="#section1">Home</a>
          </li>
          <li>
            <a href="#section2">Presentes</a>
          </li>
          <li>
            <a href="#section3">Local</a>
          </li>
        </ul>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#section1">teste</a>
          </li>
          <li>
            <a href="#section2">01</a>
          </li>
          <li>
            <a href="#section3">02</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;

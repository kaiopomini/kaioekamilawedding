import { Props } from 'framer-motion/types/types';
import React from 'react';

import Countdown from '../../Countdown';
import { Container, CountdowContainer, SubtitleSection, TitleSection } from './styles';

export const Home: React.FC<Props> = () => {
  return (
    <Container>
      <TitleSection>Casamento Kamila e Kaio</TitleSection>
      <SubtitleSection>
        Save the Date <br /> 26 de Agosto de 2023
      </SubtitleSection>
      <CountdowContainer>
        <Countdown targetDate={new Date('08-26-2023 17:00:00')} />
      </CountdowContainer>
    </Container>
  );
};

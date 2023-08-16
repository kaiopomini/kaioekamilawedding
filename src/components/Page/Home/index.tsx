import { faMartiniGlassCitrus, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Props } from 'framer-motion/types/types';
import React, { useEffect, useState } from 'react';

import Countdown from '../../Countdown';
import {
  AfterCountdownContainer,
  Button,
  ButtonsContainer,
  Container,
  CountdowContainer,
  Icon,
  SubtitleSection,
  Text,
  TextButton,
  Time,
  TitleSection,
} from './styles';

export const Home: React.FC<Props> = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const mariageDate = '08-26-2023 17:00:00';
  const partyDate = '08-26-2023 18:00:00';
  const checkIsFinished = (): boolean => {
    const difference = +new Date(partyDate) - +new Date();

    if (difference <= 0) {
      return true;
    }

    return false;
  };

  const handleClick = (id: string) => {
    const targetElement = document.querySelector(id);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setIsFinished(checkIsFinished());

    const timer = setInterval(() => {
      const finished = checkIsFinished();

      if (finished) {
        setIsFinished(finished);
        clearInterval(timer);
      }
    }, 1000);
    setIsLoading(false);
    return () => clearInterval(timer);
  }, []);
  return (
    <Container>
      <TitleSection>Casamento Kamila e Kaio</TitleSection>

      {loading ? (
        <></>
      ) : isFinished ? (
        <AfterCountdownContainer>
          <SubtitleSection>A Festa Começou !!</SubtitleSection>
          <Text>Aproveite aproveite a festa e tire muitas, muitas fotos !</Text>
          <Text>Ahh!</Text>
          <Text>
            E não esqueça de postar as fotos no instagram e colocar a tag
            <span> #CasamentoKamilaeKaio</span>
          </Text>

          <ButtonsContainer>
            <Button onClick={() => handleClick('#drink')}>
              <Icon>
                <FontAwesomeIcon icon={faMartiniGlassCitrus} />
              </Icon>
              <TextButton>Menu Bebidas</TextButton>
            </Button>
            <Button onClick={() => handleClick('#food')}>
              <Icon>
                <FontAwesomeIcon icon={faUtensils} />
              </Icon>
              <TextButton>Menu Jantar</TextButton>
            </Button>
          </ButtonsContainer>
        </AfterCountdownContainer>
      ) : (
        <>
          <SubtitleSection>
            Save the Date <br /> 26 de Agosto de 2023
          </SubtitleSection>
          <Time>17:00h</Time>
          <CountdowContainer>
            <Countdown targetDate={new Date(mariageDate)} />
          </CountdowContainer>
        </>
      )}
    </Container>
  );
};

import { useTransform } from 'framer-motion';
import React, { useLayoutEffect, useState } from 'react';

import { useWrapperScroll } from '../Section';
import { Container, Footer, Header } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollY, scrollYProgress } = useWrapperScroll();
  const [showFooter, setShowFooter] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      setShowFooter(scrollYProgress.get() > 0.95);
    };

    // Verifica o estado do footer sempre que o scrollYProgress é atualizado
    const unsubscribeScroll = scrollYProgress.onChange(onScroll);

    // Executado quando o componente é desmontado
    return () => {
      unsubscribeScroll();
    };
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId) : null;

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <Header>
        <ul>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Início
            </a>
          </li>
          <li>
            <a href="#gift" onClick={handleLinkClick}>
              Presentes
            </a>
          </li>
          <li>
            <a href="#food" onClick={handleLinkClick}>
              Jantar
            </a>
          </li>
          <li>
            <a href="#drink" onClick={handleLinkClick}>
              Bebidas
            </a>
          </li>
          <li>
            <a href="#location" onClick={handleLinkClick}>
              Local
            </a>
          </li>
          <li>
            <a href="#faq" onClick={handleLinkClick}>
              FAQ
            </a>
          </li>
        </ul>
      </Header>

      {showFooter && (
        <Footer style={{ opacity }}>
          <ul>
            <li>
              <a href="#home" onClick={handleLinkClick}>
                Início
              </a>
            </li>
            <li>
              <a href="#gift" onClick={handleLinkClick}>
                Presentes
              </a>
            </li>
            <li>
              <a href="#food" onClick={handleLinkClick}>
                Jantar
              </a>
            </li>
            <li>
              <a href="#drink" onClick={handleLinkClick}>
                Bebidas
              </a>
            </li>
            <li>
              <a href="#location" onClick={handleLinkClick}>
                Local
              </a>
            </li>
            <li>
              <a href="#faq" onClick={handleLinkClick}>
                FAQ
              </a>
            </li>
          </ul>
        </Footer>
      )}
    </Container>
  );
};

export default UniqueOverlay;

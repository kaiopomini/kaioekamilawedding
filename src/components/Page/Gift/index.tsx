import { QRCodeSVG } from 'qrcode.react';
import React from 'react';

import { Container, CopyButton, QRCode, QRCodeContainer, Text } from './styles';

export const Gift = () => {
  const pixKey =
    '00020126330014BR.GOV.BCB.PIX0111080651239375204000053039865802BR5925Kaio Willian Pomini Campo6009SAO PAULO610805409000622405202DA14sZdio8KRq996516630432FC';

  const handleCopyClick = () => {
    // Função para copiar a chave PIX para a área de transferência
    const textArea = document.createElement('textarea');
    textArea.value = pixKey;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <Container>
      <Text>
        <h1>Pedido Especial</h1>
        <p>
          <br />
          Caros amigos e familiares,
          <br />
          Temos novidades emocionantes para compartilhar com vocês e gostaríamos de
          aproveitar esta oportunidade para fazer um pedido especial.
          <br />
          No próximo ano, teremos a oportunidade de estudar fora do país. Essa experiência
          é realmente única e enriquecedora para nós, mas também representa um desafio
          financeiro significativo.
          <br />
          Com isso em mente, gostaríamos de pedir gentilmente que, em vez de presentes
          materiais, considerem contribuir com um presente em qualquer valor em dinheiro.
          Isso nos ajudará a cobrir despesas relacionadas à viagem, estadia e estudo.
          <br />
          Qualquer valor será apreciado e fará uma diferença significativa para nós.
          Agradecemos antecipadamente pelo seu apoio e generosidade.
          <br />
          Se tiver alguma dúvida, por favor, entre em contato conosco diretamente. Estamos
          mais do que felizes em fornecer detalhes adicionais ou esclarecer algo.
          <br />
          Agradecemos de coração por seu apoio contínuo e por fazerem parte dessa etapa
          emocionante de nossas vidas.
          <br />
        </p>
      </Text>
      <QRCodeContainer>
        <QRCode>
          <QRCodeSVG value={pixKey} size={250} />
        </QRCode>

        <CopyButton onClick={handleCopyClick}>Copiar Chave PIX</CopyButton>
      </QRCodeContainer>
    </Container>
  );
};

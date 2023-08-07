import { Container, Text } from './styles';

export const Drink = () => {
  return (
    <Container>
      <Text>
        <h1>Bebidas</h1>
        <br />
        <h2>Servido à mesa:</h2>
        <p>(Disponível durante toda noite)</p>
        <br />

        <p>Refrigerantes (coca-cola e guaraná)</p>
        <p>Agua mineral (com e sem gás)</p>
        <p>Suco natural de laranja</p>
        <p>Energético</p>

        <br />
        <h2>Bar</h2>
        <p>(Disponível das 20h:00 às 01h:00)</p>
        <br />

        <h4>Drinks</h4>
        <p>Mojito, Sex on the beach e Rossini</p>
        <br />
        <h4>Batidas/caipirinhas</h4>
        <p>Abacaxi, Limão, Morango e Maracujá</p>
        <br />
        <h4>Zero Alcool</h4>
        <p>Liminada Suiça</p>
        <p>Red hot explosion (laranja, leite condensado e grenadini)</p>
        <br />
        <h2>Choop</h2>
        <p>(Self-service disponível durante toda noite)</p>
      </Text>
    </Container>
  );
};

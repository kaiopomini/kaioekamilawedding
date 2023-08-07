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

        <h3>Drinks</h3>
        <p>Mojito</p>
        <p>Sex on the beach</p>
        <p>Rossini</p>
        <br />
        <h3>Batidas/caipirinhas</h3>
        <p>Abacaxi</p>
        <p>Limão</p>
        <p>Morango</p>
        <p>Maracujá</p>
        <br />
        <h3>Zero Alcool</h3>
        <p>Liminada Suiça</p>
        <p>Red hot explosion (laranja, leite condensado e grenadini)</p>
        <br />
        <h2>Choop</h2>
        <p>(Self-service disponível durante toda noite)</p>
      </Text>
    </Container>
  );
};

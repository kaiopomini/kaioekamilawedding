import { Container, Text, Title } from './styles';

export const Food = () => {
  return (
    <Container>
      <Title>Jantar</Title>
      <Text>
        <br />
        <h2>Mesa de frios:</h2>
        <p>(Self-service disponível durante toda noite)</p>
        <br />
        <h2>Jantar:</h2>
        <br />
        <p>Arroz Branco</p>
        <p>Creme de milho</p>
        <p>Lasanha bolonhesa ao molho branco</p>
        <p>Pernil suíno assado</p>
        <p>Costela bovina assada</p>
        <p>Saladas</p>
        <br />
        <h2>Sobremesa</h2>
        <br />
        <p>Doces finos</p>
        <p>Bolo da noiva (naked cake de prestigio)</p>
      </Text>
    </Container>
  );
};

import styled from 'styled-components';
import Home from 'components/pages/Home';

const Container = styled.div`
  padding: 20px;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;

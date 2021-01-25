import styled from 'styled-components';
import Home from 'components/pages/Home/container';

const Container = styled.div`
  padding: 40px;
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

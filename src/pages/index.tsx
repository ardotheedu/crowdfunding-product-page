import { ModalProvider } from '../contexts/modalContext';
import { Container } from '../styles/pages';

import Header from '../components/Header';
import Content from '../components/Content';

export default function Home() {
  return (
    <ModalProvider>
      <Container>
        <Header />
        <Content />
      </Container>
    </ModalProvider>
  );
}

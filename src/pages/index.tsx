import { useState } from 'react';
import { Container } from '../styles/pages';

import Modal from '../components/Modal';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Home() {
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);

  function openBackModal() {
    setIsBackModalOpen(true);
  }

  function closeBackModal() {
    setIsBackModalOpen(false);
  }
  return (
    <Container>
      <Header />
      <Content onOpenNewModal={openBackModal} />
      <Modal isOpen={isBackModalOpen} onRequestClose={closeBackModal} />
    </Container>
  );
}

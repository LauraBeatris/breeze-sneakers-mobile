import React from 'react';

import {
  Container,
  Sneekers,
  Sneeker,
  AddButton,
  SneekerImage,
  SneekerDescription,
} from './styles';
import { Background } from '../../styles/background';
import background from '../../assets/background.jpg';

export default function Home() {
  return (
    <>
      <Background source={background} />
      <Container>
        <Sneekers />
      </Container>
    </>
  );
}

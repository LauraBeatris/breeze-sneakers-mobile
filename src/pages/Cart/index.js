import React from 'react';

import { Container } from './styles';
import { Background } from '../../styles/background';
import background from '../../assets/background.jpg';

export default function Main() {
  return (
    <>
      <Background source={background} />
      <Container />
    </>
  );
}

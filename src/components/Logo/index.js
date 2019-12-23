import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { LogoContainer, LogoText } from './styles';

export default function Logo({ size }) {
  return (
    <LogoContainer>
      <Icon name="wind" color="#333" size={size || 40} />
      <LogoText size={size || '30px'}> Breeze </LogoText>
    </LogoContainer>
  );
}

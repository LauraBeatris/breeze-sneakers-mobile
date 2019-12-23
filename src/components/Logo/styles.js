import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoText = styled.Text`
  text-align: center;
  margin-left: 1px;
  font-weight: bold;
  font-size: ${props => props.size};
  color: ${colors.dark};
`;

import React, {FunctionComponent, ReactNode} from 'react';
import styled from 'styled-components/native';

import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const ButtomView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <ButtomView onPress={props.onPress} styles={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtomView>
  );
};

export default RegularButton;

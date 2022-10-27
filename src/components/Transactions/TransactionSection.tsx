import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {TransactionSectionProps} from './types';
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactionItem from './TransactionItem';

const TransactionSectionBackground = styled.View`
  width: 100%;
  //padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;
const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection: FunctionComponent<
  TransactionSectionProps
> = props => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{marginBottom: 25}}>
        <RegularText style={{fontSize: 19, color: colors.secondary}}>
          Transaction
        </RegularText>
        <SmallText style={{color: colors.secondary}}>
          Recent
          <Icon name="caret-down" size={13} color={colors.graydark} />
        </SmallText>
      </TransactionRow>
      <TransactionList
        data={props.data}
        showVerticalSrollIndicator={false}
        contentContainerStyle={{padding: 25}}
        keyExtrctor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;

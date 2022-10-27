import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import logo1 from '../../assets/cards/visa_white.png';
import logo2 from '../../assets/cards/mc.png';
import CardsSection from '../components/Cards/CardsSection';
import TransactionSection from '../components/Transactions/TransactionSection';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: '75937694850',
      balance: 29999.45,
      alias: 'Work Debit',
      logo: logo1,
    },
    {
      id: 2,
      accountNo: '86037602705',
      balance: 29999.45,
      alias: 'Personal Prepaid',
      logo: logo2,
    },
    {
      id: 3,
      accountNo: '2946502750',
      balance: 29999.45,
      alias: 'School Prepaid',
      logo: logo1,
    },
  ];

  const transactionsData = [
    {
      id: 1,
      title: 'Taxi',
      subtitle: 'Uber car',
      amount: '-$86.00',
      date: '14 Sep 2021',
      art: {
        icon: 'car',
        background: colors.primary,
      },
    },
    {
      id: 2,
      title: 'Shopping',
      subtitle: 'Shop',
      amount: '-$286.34',
      date: '15 Sep 2021',
      art: {
        icon: 'shopping-cart',
        background: colors.tertiary,
      },
    },
    {
      id: 3,
      title: 'Travel',
      subtitle: 'City',
      amount: '-$576.42',
      date: '20 Oct 2021',
      art: {
        icon: 'plane',
        background: colors.accent,
      },
    },
  ];

  return (
    <HomeContainer>
      <StatusBar barStyle="dark-content" />
      <CardsSection data={cardsData} />
      <TransactionSection data={transactionsData}/>
    </HomeContainer>
  );
};

export default Home;

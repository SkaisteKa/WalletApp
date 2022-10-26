import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import logo1 from '../../assets/cards/visa_white.png';
import logo2 from '../../assets/cards/mc.png';
import CardsSection from '../components/Cards/CardsSection';

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
  return (
    <HomeContainer>
      <StatusBar barStyle="dark-content" />
      <CardsSection data={cardsData} />
    </HomeContainer>
  );
};

export default Home;

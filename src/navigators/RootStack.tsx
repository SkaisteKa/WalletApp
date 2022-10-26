import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../components/colors';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../../assets/avi/avatar.png';

export type RootStackParamList = {
  Welcome: undefined;
};

const Stack = createNativeStackNavigator();

const RootStack: FunctionComponent<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
          },
          headerTintColor: colors.secondary,
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{backgroundColor: colors.tertiary}}
            />
          ),
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: props => (
              <Greeting
                mainText="Hey Coby!"
                subText="Welcome back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

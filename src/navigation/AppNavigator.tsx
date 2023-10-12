import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from './Routes';
import * as Screens from '../screen';
import {navigationRef} from './NavigationService';

export type AppStackParamList = {
  Home: undefined;
  AddOrEditNote: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          //   animation: 'slide_from_right',
        }}>
        <Stack.Screen name={'Home'} component={Screens.Home} />
        <Stack.Screen
          name={'AddOrEditNote'}
          component={Screens.AddOrEditNote}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from './Routes';
import * as Screens from '../screen';
import {navigationRef} from './NavigationService';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
          headerShown: false,
          //   animation: 'slide_from_right',
        }}>
        <Stack.Screen name={ROUTES.HOME} component={Screens.Home} />
        <Stack.Screen
          name={ROUTES.ADD_OR_EDIT_NOTE}
          component={Screens.AddOrEditNote}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

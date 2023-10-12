import {createNavigationContainerRef} from '@react-navigation/native';
import {AppStackParamList} from './AppNavigator';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

export const NavigationService = {
  goBack: () => navigationRef.current?.goBack(),

  route: navigationRef.current?.getCurrentRoute(),

  navigate: (route: string, params?: object | undefined) =>
    navigationRef.current?.navigate(route as never, params as never),
};

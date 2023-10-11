import {
  StackActions,
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const NavigationService = {
  goBack: () => navigationRef.current?.goBack(),
  route: navigationRef.current?.getCurrentRoute(),

  navigate: (route: any, params?: any) =>
    navigationRef.current?.navigate(route, params),
};

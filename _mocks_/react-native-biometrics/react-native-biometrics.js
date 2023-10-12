jest.mock('react-native-biometrics', () => {
  class ReactNativeBiometrics {
    constructor() {}
    isSensorAvailable() {}
    simplePrompt() {}
  }
  return {
    __esModule: true,
    default: ReactNativeBiometrics,
    BiometryTypes: {TouchID: 'mock1', FaceID: 'mock2'},
  };
});
export const simplePrompt = jest.fn();

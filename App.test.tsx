import React from 'react';
import App from './App';
import {fireEvent, render} from '@testing-library/react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import {Provider} from 'react-redux';
import {BlurViewCustom} from './src/components';

import {updateBiometric, updateLogin} from './src/store/app';
import {store} from './src/store/store';
import {Home} from './src/screen';
import {TextInput} from 'react-native';
import NoteList from './src/screen/Home/NoteList';

describe('<App />', () => {
  it('Check BlurView show when not logged', () => {
    const isLogin = store.getState().app.isLogin;
    if (!isLogin) {
      render(
        <Provider store={store}>
          <BlurViewCustom />
        </Provider>,
      );
    }
  });

  it('Check if FaceID pass then disable BlurView', () => {
    const bio = new ReactNativeBiometrics();
    jest.spyOn(bio, 'simplePrompt').mockResolvedValue({success: true});
    store.dispatch(updateLogin(true));

    const isLogin = store.getState().app.isLogin;
    if (isLogin) {
      render(
        <Provider store={store}>
          <NoteList />
        </Provider>,
      );
    }
  });

  it('Check if cancel FaceID then display Text Input', () => {
    const bio = new ReactNativeBiometrics();
    jest.spyOn(bio, 'simplePrompt').mockResolvedValue({success: false});
    store.dispatch(updateBiometric(false));
    const isBiometric = store.getState().app.isBiometric;
    if (!isBiometric) {
      render(<TextInput />);
    }
  });

  it("Check if type '1234' then disable Blur View", () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BlurViewCustom />
      </Provider>,
    );
    const textInput = getByTestId('PasswordTest');
    fireEvent.changeText(textInput, '1234');
    expect(textInput.props.value).toBe('1234');
    render(
      <Provider store={store}>
        <NoteList />
      </Provider>,
    );
  });
});

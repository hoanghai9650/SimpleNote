import ReactNativeBiometrics from 'react-native-biometrics';
import {useDispatch} from 'react-redux';
import {updateBiometric, updateLogin} from '../store/app';

const useBioMetrics = () => {
  const rnBiometrics = new ReactNativeBiometrics();
  const dispatch = useDispatch();

  const handleBiometrics = () => {
    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then((resultObject: any) => {
        const {success} = resultObject;

        if (success) {
          dispatch(updateLogin(success));
        } else {
          dispatch(updateBiometric(false));
        }
      });
  };

  return {handleBiometrics};
};

export default useBioMetrics;

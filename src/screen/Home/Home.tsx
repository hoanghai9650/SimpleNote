import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import NodeList from './NoteList';
import {FloatButton} from './FloatButton';

import {ROUTES} from '../../navigation';
import {NavigationService} from '../../navigation/NavigationService';
import useBioMetrics from '../../hooks/useBiometrics';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {BlurViewCustom} from '../../components';

export const Home: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.app.isLogin);

  const {handleBiometrics} = useBioMetrics();

  useEffect(() => {
    if (!isLogin) {
      handleBiometrics();
    }
  }, [isLogin]);

  return (
    <SafeAreaView style={styles.container}>
      {!isLogin ? <BlurViewCustom /> : null}
      <NodeList />
      <FloatButton
        onPress={() => NavigationService.navigate(ROUTES.ADD_OR_EDIT_NOTE)}
      />
    </SafeAreaView>
  );
};

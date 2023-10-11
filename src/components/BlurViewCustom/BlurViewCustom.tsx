import {Alert, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {useDispatch, useSelector} from 'react-redux';
import {updateLogin} from '../../store/app';
import {RootState} from '../../store/store';

export const BlurViewCustom = () => {
  const dispatch = useDispatch();
  const isBiometric = useSelector((state: RootState) => state.app.isBiometric);
  return (
    <View style={styles.container}>
      {!isBiometric ? (
        <View style={styles.inputContainer}>
          <TextInput
            // style={{backgroundColor: 'red'}}
            textAlign={'center'}
            onChangeText={value => {
              if (value.length !== 4) {
                return;
              }
              if (value !== '1234') {
                Alert.alert('Wrong Password', 'Please try again.');
                return;
              }
              dispatch(updateLogin(true));
            }}
          />
        </View>
      ) : null}

      <BlurView
        style={styles.container}
        blurType="light"
        blurAmount={5}
        blurRadius={3}
        overlayColor="transparent"
        reducedTransparencyFallbackColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    zIndex: 101,
    borderRadius: 20,
    backgroundColor: 'pink',
    width: '30%',
    padding: 12,
    // alignItems: 'center',
  },
});

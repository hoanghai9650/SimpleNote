import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ImagePath} from '../../assets';

interface Props {
  onPress: () => void;
}

export const FloatButton = (props: Props) => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={ImagePath.icon_add} style={styles.container} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 66,
    borderRadius: 100,
    position: 'absolute',
    right: 12,
    bottom: 32,
  },
});

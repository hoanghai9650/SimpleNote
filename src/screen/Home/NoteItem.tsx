import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {NavigationService} from '../../navigation/NavigationService';
import {ROUTES} from '../../navigation';
import {INote} from '../../store/note';
import {useEncryption} from '../../hooks/useEncryption';

const NoteItem: React.FC<INote> = (props: INote) => {
  const {id, content} = props;
  const {decrypt} = useEncryption();

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() =>
        NavigationService.navigate(ROUTES.ADD_OR_EDIT_NOTE, {
          id: id,
          prevContent: decrypt(content),
        })
      }>
      <Text style={styles.text}>{decrypt(content)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 12,
  },
  text: {
    // marginTop: 24,
  },
});
export default memo(NoteItem);

import {Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {NavigationService} from '../../navigation/NavigationService';
import {INote, addNote, updateNote} from '../../store/note';
import {useEncryption} from '../../hooks/useEncryption';

export const AddOrEditNote: React.FC = () => {
  const {id, prevContent}: any = useRoute().params ?? {};

  const [content, setContent] = useState(prevContent ? prevContent : '');
  const {encrypt} = useEncryption();
  const dispatch = useDispatch();

  const handleAddOrUpdateNote = () => {
    if (id) {
      // UPDATE NOTE
      if (content.length > 0) {
        let note: INote = {
          id: id,
          content: encrypt(content),
        };
        console.log('note', note);
        dispatch(updateNote(note));
        setContent('');
        NavigationService.goBack();
      }
      return;
    }
    // ADD NOTE
    if (content.length > 0) {
      const newNote: INote = {
        id: new Date().valueOf().toString(),
        content: encrypt(content),
      };

      dispatch(addNote(newNote));
      setContent('');
      NavigationService.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Enter a new note"
        style={styles.textInput}
      />
      {!(content.length > 0) ? <Text>Please type title.</Text> : null}
      <Button title={id ? 'Update' : 'Add'} onPress={handleAddOrUpdateNote} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 12,
  },
  textInput: {
    height: 36,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 8,
    borderColor: '#D7C0D2',
  },
});

import React from 'react';
import {useSelector} from 'react-redux';
import {View, FlatList, Text, StyleSheet} from 'react-native';

import {RootState} from '../../store/store';
import {isEmpty} from 'lodash';
import NoteItem from './NoteItem';

const NoteList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  console.log(notes, 'notessssss');
  return (
    <View style={styles.container}>
      {!isEmpty(notes) ? (
        <FlatList
          keyExtractor={item => item?.id}
          data={notes}
          renderItem={({item}) => (
            <NoteItem id={item?.id} content={item?.content} />
          )}
        />
      ) : (
        <Text style={styles.emptyTaskStyle}>You don't have any note.</Text>
      )}
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyTaskStyle: {
    marginTop: 24,
  },
});

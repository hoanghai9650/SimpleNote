import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface INote {
  id: string;
  content: string;
}

export interface INoteState {
  notes: INote[];
}

const initialState: INoteState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
    },

    updateNote: (state, action: PayloadAction<INote>) => {
      const {id, content} = action.payload;
      const note = state.notes.find(item => item.id === id);

      if (note) {
        note.content = content;
      }
    },
  },
});

export const {addNote, updateNote} = notesSlice.actions;

export default notesSlice.reducer;

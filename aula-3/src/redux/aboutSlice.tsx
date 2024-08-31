import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AboutState {
  content: string;
}

const initialState: AboutState = {
  content: 'Este é o conteúdo inicial do About',
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
  },
});

export const { setContent } = aboutSlice.actions;
export default aboutSlice.reducer;

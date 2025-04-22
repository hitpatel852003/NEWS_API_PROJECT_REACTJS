import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme : (state) =>{
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;

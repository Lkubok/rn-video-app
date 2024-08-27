import { createSlice } from "@reduxjs/toolkit";

type SearchState = {
  searchedPhrase?: string;
};

export const initialState: SearchState = {
  searchedPhrase: "",
};

export const searchStore = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchPhrase: (state, action) => {
      state.searchedPhrase = action.payload;
    },
    resetSearchPhrase: (state) => {
      state.searchedPhrase = "";
    },
  },
  extraReducers: ({ addCase }) => {},
});

export const { setSearchPhrase, resetSearchPhrase } = searchStore.actions;
export const search = searchStore.reducer;

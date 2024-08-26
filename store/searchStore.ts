import { createSlice } from "@reduxjs/toolkit";

// import { User } from "../types/search";
// import {
//   loginAction,
//   logoutAction,
//   registerAction,
//   restoreUser,
// } from "./searchActions";

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
  extraReducers: ({ addCase }) => {
    // addCase(loginAction.fulfilled, (state, action) => {
    //   state.isSignedIn = true;
    //   state.token = action.payload.token;
    //   state.user = action.payload.user;
    // });
    // addCase(loginAction.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = undefined;
    // });
    // addCase(loginAction.rejected, (state, e) => {
    //   state.isLoading = false;
    //   state.error = e.error.message;
    // });
    // addCase(registerAction.fulfilled, (_state, _action) => {});
    // addCase(registerAction.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = undefined;
    // });
    // addCase(registerAction.rejected, (state, e) => {
    //   state.isLoading = false;
    //   state.error = e.error.message;
    // });
    // addCase(logoutAction.fulfilled, (state, _action) => {
    //   state.isSignedIn = false;
    //   state.token = undefined;
    //   state.user = undefined;
    // });
    // addCase(restoreUser.fulfilled, (state, action) => {
    //   if (action.payload.token && action.payload.user) {
    //     state.isSignedIn = true;
    //     state.token = action.payload.token;
    //     state.user = action.payload.user;
    //     return;
    //   }
    // });
  },
});

export const { setSearchPhrase, resetSearchPhrase } = searchStore.actions;
export const search = searchStore.reducer;

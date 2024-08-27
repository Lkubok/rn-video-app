import { createSlice } from "@reduxjs/toolkit";

import { VideoItem } from "@/types/types";

import { fetchVideos, getInitialVideosData } from "./videosActions";

export type VideoItemsWithTag = {
  q: string;
} & VideoItem;

type VideosState = {
  initialVideos: VideoItemsWithTag[];
  searchedVideos: VideoItem[];
  sortOrder: "mostPopular" | "dateOldest" | "dateNewest" | undefined;
  nextPageToken?: string;
};

export const initialState: VideosState = {
  initialVideos: [],
  searchedVideos: [],
  sortOrder: undefined,
  nextPageToken: undefined,
};

export const videosStore = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    resetSearchedVideos: (state) => {
      state.searchedVideos = [];
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getInitialVideosData.fulfilled, (state, action) => {
      const mappedVideos: VideoItemsWithTag[] = action.payload.items.map(
        (item) => ({
          ...item,
          q: action.meta.arg.q,
        })
      );
      state.initialVideos = [...state.initialVideos, ...mappedVideos];
    });
    addCase(fetchVideos.fulfilled, (state, action) => {
      state.searchedVideos = [...state.searchedVideos, ...action.payload.items];
      state.nextPageToken = action.payload.nextPageToken;
    });
  },
});

export const { setSortOrder, resetSearchedVideos } = videosStore.actions;

export const videos = videosStore.reducer;

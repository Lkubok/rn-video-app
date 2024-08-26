import { createSlice } from "@reduxjs/toolkit";

import { VideoItem } from "@/types/types";

import { getVideosData } from "./videosActions";

export type VideoItemsWithTag = {
  q: string;
} & VideoItem;

type VideosState = {
  initialVideos: VideoItemsWithTag[];
  searchedVideos: VideoItem[];
  sortOrder: "mostPopular" | "dateOldest" | "dateNewest" | undefined;
};

export const initialState: VideosState = {
  initialVideos: [],
  searchedVideos: [],
  sortOrder: undefined,
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
    addCase(getVideosData.fulfilled, (state, action) => {
      const mappedVideos: VideoItemsWithTag[] = action.payload.items.map(
        (item) => ({
          ...item,
          q: action.meta.arg.q,
        }),
      );
      state.initialVideos = [...state.initialVideos, ...mappedVideos];
    });
  },
});

export const videos = videosStore.reducer;

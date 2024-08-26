import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { FetchVideoParams, VideoApiService } from "@/api/VideoApi.service";
import { VideoResponse } from "@/types/types";

import { ThunkApiConfig } from "./store";

export const getInitialVideosData = createAsyncThunk<
  VideoResponse,
  FetchVideoParams,
  ThunkApiConfig
>(
  "videos/getInitialVideosData",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await VideoApiService.fetchInitialVideos(params);
      return data;
    } catch (e) {
      const error = e as AxiosError;

      console.error(error);
      return rejectWithValue(e as never);
    }
  },
);

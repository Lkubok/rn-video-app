import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { FetchVideosParams, VideoApiService } from "@/api/VideoApi.service";
import { VideoResponse } from "@/types/types";

import { ThunkApiConfig } from "./store";

export const getVideosData = createAsyncThunk<
  VideoResponse,
  FetchVideosParams,
  ThunkApiConfig
>("videos/getVideosData", async (params, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await VideoApiService.fetchVideos(params);
    return data;
  } catch (e) {
    const error = e as AxiosError;

    console.error(error);
    return rejectWithValue(e as never);
  }
});

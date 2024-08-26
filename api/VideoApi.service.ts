import { AxiosResponse } from "axios";

import { VideoResponse } from "@/types/types";

import { axiosInstance } from "./axiosInstance";

const searchPath = "search";

const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

export type FetchVideosParams = {
  q: string;
  maxResults?: number;
  pageToken?: string;
  order?: string;
  part?: string;
};

export class VideoApiService {
  static readonly fetchVideos = async (
    params: FetchVideosParams,
  ): Promise<AxiosResponse<VideoResponse>> =>
    axiosInstance.get(searchPath, {
      params: { ...params, key: API_KEY, channelId: "" },
    });
}

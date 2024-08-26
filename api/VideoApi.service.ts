import { AxiosResponse } from "axios";

import { VideoResponse } from "@/components/CategoryList/storedResponse";

import { axiosInstance } from "./axiosInstance";

const searchPath = "search";

const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;
// const CHANNEL_ID = "";

//   key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=10

export type FetchVideosParams = {
  q: string;
  maxResults?: number;
  pageToken?: string;
  order?: string;
  part?: string; //snippet
};

export class VideoApiService {
  static readonly fetchVideos = async (
    params: FetchVideosParams
  ): Promise<AxiosResponse<VideoResponse>> =>
    // axiosInstance.get(
    //   `search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=10`
    // );
    axiosInstance.get(searchPath, {
      params: { ...params, key: API_KEY, channelId: "" },
    });
}

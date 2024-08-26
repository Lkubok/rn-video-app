// import { refreshTokenStorage, tokenRefreshThunk } from "@Auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ApiErrorEnum } from "@src/enum/ApiError.enum";
// import { ThunkApiConfig } from "@store";
import { AxiosError } from "axios";

import { FetchVideosParams, VideoApiService } from "@/api/VideoApi.service";
import { VideoResponse } from "@/components/CategoryList/storedResponse";

import { ThunkApiConfig } from "./store";
// import { Videos } from "./DevicesApi.service";
// import { GetDevicesParamsType, GetDevicesReturnType } from "./types";

export const getVideosData = createAsyncThunk<
  // TODO add return type
  VideoResponse,
  FetchVideosParams,
  ThunkApiConfig
>("videos/getVideosData", async (params, { rejectWithValue, dispatch }) => {
  try {
    // const page = params.page ?? 1;
    const { data } = await VideoApiService.fetchVideos(params);
    // console.log("DATA XXX", data);
    // const itemsPerPage = params.itemsPerPage ?? 30; // NOTE: 30 is the default value on API
    // const shouldFetchNextAlarmsPAge = data.data.length === itemsPerPage;
    // if (shouldFetchNextAlarmsPAge) {
    //   await dispatch(
    //     getDevicesData({
    //       itemsPerPage: params.itemsPerPage,
    //       site: params.site,
    //       page: page + 1,
    //     })
    //   );
    // }
    return data;
  } catch (e) {
    const error = e as AxiosError;
    console.error(error);
    // if (error?.response?.data === ApiErrorEnum.Unauthorized) {
    //   const refreshToken = await refreshTokenStorage.read();
    //   if (refreshToken) {
    //     await dispatch(
    //       tokenRefreshThunk({
    //         refreshToken,
    //         successCallback: () => getDevicesData(params),
    //       })
    //     );
    //   } else {
    //     return rejectWithValue(String(e));
    //   }
    // }
    return rejectWithValue(e as never);
  }
});

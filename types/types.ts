export type ButtonMode =
  | "text"
  | "outlined"
  | "contained"
  | "elevated"
  | "contained-tonal";

export enum Category {
  react = "React",
  reactNative = "ReactNative",
  typescript = "TypeScript",
  javascript = "JavaScript",
}

export type CategoryItem = {
  name: string;
  type: Category;
  id: number;
  baseSearchWord: string;
};

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  [key: string]: Thumbnail; // To handle any additional thumbnail sizes
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface VideoItem {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface VideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: VideoItem[];
}

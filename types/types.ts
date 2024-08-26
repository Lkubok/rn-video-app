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

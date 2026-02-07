import type { Todo } from "../types";
export enum FilterTypeEnum {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
export const INITIAL_TODO_LIST: Todo[] = [];
export const INITIAL_NAME_VALUE = "";
export const INITIAL_IS_EDIT = false;

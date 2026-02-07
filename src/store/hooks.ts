import {
  useDispatch,
  useSelector,
} from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./index";

/*
  Хук для dispatch.
  Нужен, чтобы TypeScript знал,
  какие действия можно отправлять в store.
*/
export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return dispatch;
};

/*
  Хук для получения данных из store.
  TypedUseSelectorHook говорит TypeScript,
  как выглядит всё состояние приложения.
*/
export const useAppSelector: TypedUseSelectorHook<RootState> = (
  selector
) => {
  return useSelector(selector);
};
